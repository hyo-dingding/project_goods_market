import { Product } from 'src/apis/products/entities/product.entity';
import { User } from 'src/apis/users/entities/user.entity';
export declare class Review {
    id: string;
    reviewContents: string;
    createdAt: Date;
    updatedAt: Date;
    isReplied: boolean;
    user: User;
    product: Product;
}
