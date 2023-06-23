import { Order } from 'src/apis/orders/entities/order.entity';
import { User } from 'src/apis/users/entities/user.entity';
export declare enum ORDER_PAYMENT_STATE_ENUM {
    PAYMENT = "PAYMENT",
    CANCEL = "CANCEL"
}
export declare class OrderPayment {
    id: string;
    impUid: string;
    amount: number;
    orderState: string;
    createdAt: Date;
    user: User;
    order: Order;
}
