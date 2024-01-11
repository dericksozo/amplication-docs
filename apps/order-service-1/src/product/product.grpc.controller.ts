import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { ProductGrpcControllerBase } from "./base/product.grpc.controller.base";

@swagger.ApiTags("products")
@common.Controller("products")
export class ProductGrpcController extends ProductGrpcControllerBase {
  constructor(protected readonly service: ProductService) {
    super(service);
  }
}
