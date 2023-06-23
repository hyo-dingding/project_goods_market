import { Product } from 'src/apis/products/entities/product.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { UserAddress } from 'src/apis/usersAddress/entities/userAddress.entity';
export declare class Order {
    id: string;
    count: number;
    price: number;
    product: Product;
    user: User;
    userAddress: UserAddress;
}
