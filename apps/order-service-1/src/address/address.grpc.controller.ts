import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AddressService } from "./address.service";
import { AddressGrpcControllerBase } from "./base/address.grpc.controller.base";

@swagger.ApiTags("addresses")
@common.Controller("addresses")
export class AddressGrpcController extends AddressGrpcControllerBase {
  constructor(protected readonly service: AddressService) {
    super(service);
  }
}
