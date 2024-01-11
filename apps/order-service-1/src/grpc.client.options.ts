import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["user", "order", "customer", "address", "product"],
    protoPath: [
      "src/user/user.proto",
      "src/order/order.proto",
      "src/customer/customer.proto",
      "src/address/address.proto",
      "src/product/product.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
