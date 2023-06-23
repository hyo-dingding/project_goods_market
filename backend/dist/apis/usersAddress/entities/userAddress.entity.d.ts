import { User } from 'src/apis/users/entities/user.entity';
export declare class UserAddress {
    id: string;
    address: string;
    isMain: boolean;
    user: User;
}
