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
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: 42,
  username: "exampleUsername",
  name: "exampleName",
  email: "exampleEmail",
  emailVerified: new Date(),
  password: "examplePassword",
  bio: "exampleBio",
  avatar: "exampleAvatar",
  timeZone: "exampleTimeZone",
  weekStart: "exampleWeekStart",
  startTime: 42,
  endTime: 42,
  bufferTime: 42,
  hideBranding: "true",
  theme: "exampleTheme",
  createdDate: new Date(),
  trialEndsAt: new Date(),
  defaultScheduleId: 42,
  completedOnboarding: "true",
  locale: "exampleLocale",
  timeFormat: 42,
  twoFactorSecret: "exampleTwoFactorSecret",
  twoFactorEnabled: "true",
  identityProviderId: "exampleIdentityProviderId",
  invitedTo: 42,
  brandColor: "exampleBrandColor",
  darkBrandColor: "exampleDarkBrandColor",
  away: "true",
  allowDynamicBooking: "true",
  verified: "true",
  disableImpersonation: "true",
};
const CREATE_RESULT = {
  id: 42,
  username: "exampleUsername",
  name: "exampleName",
  email: "exampleEmail",
  emailVerified: new Date(),
  password: "examplePassword",
  bio: "exampleBio",
  avatar: "exampleAvatar",
  timeZone: "exampleTimeZone",
  weekStart: "exampleWeekStart",
  startTime: 42,
  endTime: 42,
  bufferTime: 42,
  hideBranding: "true",
  theme: "exampleTheme",
  createdDate: new Date(),
  trialEndsAt: new Date(),
  defaultScheduleId: 42,
  completedOnboarding: "true",
  locale: "exampleLocale",
  timeFormat: 42,
  twoFactorSecret: "exampleTwoFactorSecret",
  twoFactorEnabled: "true",
  identityProviderId: "exampleIdentityProviderId",
  invitedTo: 42,
  brandColor: "exampleBrandColor",
  darkBrandColor: "exampleDarkBrandColor",
  away: "true",
  allowDynamicBooking: "true",
  verified: "true",
  disableImpersonation: "true",
};
const FIND_MANY_RESULT = [
  {
    id: 42,
    username: "exampleUsername",
    name: "exampleName",
    email: "exampleEmail",
    emailVerified: new Date(),
    password: "examplePassword",
    bio: "exampleBio",
    avatar: "exampleAvatar",
    timeZone: "exampleTimeZone",
    weekStart: "exampleWeekStart",
    startTime: 42,
    endTime: 42,
    bufferTime: 42,
    hideBranding: "true",
    theme: "exampleTheme",
    createdDate: new Date(),
    trialEndsAt: new Date(),
    defaultScheduleId: 42,
    completedOnboarding: "true",
    locale: "exampleLocale",
    timeFormat: 42,
    twoFactorSecret: "exampleTwoFactorSecret",
    twoFactorEnabled: "true",
    identityProviderId: "exampleIdentityProviderId",
    invitedTo: 42,
    brandColor: "exampleBrandColor",
    darkBrandColor: "exampleDarkBrandColor",
    away: "true",
    allowDynamicBooking: "true",
    verified: "true",
    disableImpersonation: "true",
  },
];
const FIND_ONE_RESULT = {
  id: 42,
  username: "exampleUsername",
  name: "exampleName",
  email: "exampleEmail",
  emailVerified: new Date(),
  password: "examplePassword",
  bio: "exampleBio",
  avatar: "exampleAvatar",
  timeZone: "exampleTimeZone",
  weekStart: "exampleWeekStart",
  startTime: 42,
  endTime: 42,
  bufferTime: 42,
  hideBranding: "true",
  theme: "exampleTheme",
  createdDate: new Date(),
  trialEndsAt: new Date(),
  defaultScheduleId: 42,
  completedOnboarding: "true",
  locale: "exampleLocale",
  timeFormat: 42,
  twoFactorSecret: "exampleTwoFactorSecret",
  twoFactorEnabled: "true",
  identityProviderId: "exampleIdentityProviderId",
  invitedTo: 42,
  brandColor: "exampleBrandColor",
  darkBrandColor: "exampleDarkBrandColor",
  away: "true",
  allowDynamicBooking: "true",
  verified: "true",
  disableImpersonation: "true",
};

const service = {
  createUser() {
    return CREATE_RESULT;
  },
  users: () => FIND_MANY_RESULT,
  user: ({ where }: { where: { id: string } }) => {
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

describe("User", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: service,
        },
      ],
      controllers: [UserController],
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

  test("POST /users", async () => {
    await request(app.getHttpServer())
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        emailVerified: CREATE_RESULT.emailVerified.toISOString(),
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        trialEndsAt: CREATE_RESULT.trialEndsAt.toISOString(),
      });
  });

  test("GET /users", async () => {
    await request(app.getHttpServer())
      .get("/users")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          emailVerified: FIND_MANY_RESULT[0].emailVerified.toISOString(),
          createdDate: FIND_MANY_RESULT[0].createdDate.toISOString(),
          trialEndsAt: FIND_MANY_RESULT[0].trialEndsAt.toISOString(),
        },
      ]);
  });

  test("GET /users/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /users/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/users"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        emailVerified: FIND_ONE_RESULT.emailVerified.toISOString(),
        createdDate: FIND_ONE_RESULT.createdDate.toISOString(),
        trialEndsAt: FIND_ONE_RESULT.trialEndsAt.toISOString(),
      });
  });

  test("POST /users existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/users")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        emailVerified: CREATE_RESULT.emailVerified.toISOString(),
        createdDate: CREATE_RESULT.createdDate.toISOString(),
        trialEndsAt: CREATE_RESULT.trialEndsAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/users")
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
