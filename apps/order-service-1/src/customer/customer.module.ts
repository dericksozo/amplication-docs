import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerModuleBase } from "./base/customer.module.base";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { CustomerGrpcController } from "./customer.grpc.controller";
import { CustomerResolver } from "./customer.resolver";

@Module({
  imports: [CustomerModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerController, CustomerGrpcController],
  providers: [CustomerService, CustomerResolver],
  exports: [CustomerService],
})
export class CustomerModule {}
