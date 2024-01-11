import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderService } from "./order.service";
import { OrderGrpcControllerBase } from "./base/order.grpc.controller.base";

@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrderGrpcController extends OrderGrpcControllerBase {
  constructor(protected readonly service: OrderService) {
    super(service);
  }
}
