import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { OrderPayment } from './entities/orderPayment.entity';
export declare class OrdersPaymentsService {
    private readonly ordersPaymentsRepository;
    private readonly usersRepository;
    constructor(ordersPaymentsRepository: Repository<OrderPayment>, usersRepository: Repository<User>);
    create({ impUid, amount, user: _user }: {
        impUid: any;
        amount: any;
        user: any;
    }): Promise<OrderPayment>;
}
