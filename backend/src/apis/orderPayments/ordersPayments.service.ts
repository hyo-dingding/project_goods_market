import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';
import {
  OrderPayment,
  ORDER_PAYMENT_STATE_ENUM,
} from './entities/orderPayment.entity';

@Injectable()
export class OrdersPaymentsService {
  constructor(
    @InjectRepository(OrderPayment)
    private readonly ordersPaymentsRepository: Repository<OrderPayment>, //
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  //
  async create({ impUid, amount, user: _user }) {
    const orderPayment = this.ordersPaymentsRepository.create({
      impUid,
      amount,
      user: _user,
      orderState: ORDER_PAYMENT_STATE_ENUM.PAYMENT,
    });

    await this.ordersPaymentsRepository.save(orderPayment);

    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    this.usersRepository.update(
      { id: _user.id },
      { point: user.point + amount },
    );

    return orderPayment;
  }
}
