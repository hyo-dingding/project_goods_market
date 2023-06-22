import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';
import { IContext } from 'src/commons/type/context';
import { OrderPayment } from './entities/orderPayment.entity';
import { OrdersPaymentsService } from './ordersPayments.service';

@Resolver()
export class OrdersPaymentsResolver {
  constructor(
    private readonly ordersPaymentsService: OrdersPaymentsService, //
  ) {}

  // 결제내역 저장
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => OrderPayment)
  createOrderPayment(
    @Args('impUid') impUid: string, //
    @Args({ name: 'amount', type: () => Int }) amount: number,
    @Context() context: IContext,
  ) {
    const user = context.req.user;
    console.log(user);

    return this.ordersPaymentsService.create({ impUid, amount, user });
  }
}
