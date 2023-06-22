import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { OrderPayment } from './entities/orderPayment.entity';
import { OrdersPaymentsResolver } from './ordersPayments.resolver';
import { OrdersPaymentsService } from './ordersPayments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderPayment, //
      User,
    ]),
  ],
  providers: [
    OrdersPaymentsResolver, //
    OrdersPaymentsService,
  ],
})
export class OrdersPaymentsModule {}
