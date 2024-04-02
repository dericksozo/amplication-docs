import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AvailabilityController } from "../availability.controller";
import { AvailabilityService } from "../availability.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  days: 42,
  startTime: new Date(),
  endTime: new Date(),
  date: new Date(),
};
const CREATE_RESULT = {
  id: 42,
  days: 42,
  startTime: new Date(),
  endTime: new Date(),
  date: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    days: 42,
    startTime: new Date(),
    endTime: new Date(),
    date: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  days: 42,
  startTime: new Date(),
  endTime: new Date(),
  date: new Date(),
};

const service = {
  createAvailability() {
    return CREATE_RESULT;
  },
  availabilities: () => FIND_MANY_RESULT,
  availability: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Availability", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AvailabilityService,
          useValue: service,
        },
      ],
      controllers: [AvailabilityController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /availabilities", async () => {
    await request(app.getHttpServer())
      .post("/availabilities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startTime: CREATE_RESULT.startTime.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /availabilities", async () => {
    await request(app.getHttpServer())
      .get("/availabilities")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          startTime: FIND_MANY_RESULT[0].startTime.toISOString(),
          endTime: FIND_MANY_RESULT[0].endTime.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /availabilities/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/availabilities"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /availabilities/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/availabilities"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        startTime: FIND_ONE_RESULT.startTime.toISOString(),
        endTime: FIND_ONE_RESULT.endTime.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /availabilities existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/availabilities")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        startTime: CREATE_RESULT.startTime.toISOString(),
        endTime: CREATE_RESULT.endTime.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/availabilities")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
