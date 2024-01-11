import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomerService } from "./customer.service";
import { CustomerGrpcControllerBase } from "./base/customer.grpc.controller.base";

@swagger.ApiTags("customers")
@common.Controller("customers")
export class CustomerGrpcController extends CustomerGrpcControllerBase {
  constructor(protected readonly service: CustomerService) {
    super(service);
  }
}
