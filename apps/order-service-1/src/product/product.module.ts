import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductModuleBase } from "./base/product.module.base";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { ProductGrpcController } from "./product.grpc.controller";
import { ProductResolver } from "./product.resolver";

@Module({
  imports: [ProductModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductController, ProductGrpcController],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductModule {}
