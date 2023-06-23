import { IContext } from 'src/commons/type/context';
import { OrderPayment } from './entities/orderPayment.entity';
import { OrdersPaymentsService } from './ordersPayments.service';
export declare class OrdersPaymentsResolver {
    private readonly ordersPaymentsService;
    constructor(ordersPaymentsService: OrdersPaymentsService);
    createOrderPayment(impUid: string, amount: number, context: IContext): Promise<OrderPayment>;
}
