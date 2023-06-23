import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    fetchUsers(): Promise<User[]>;
    fetchUser(email: string): Promise<User>;
    fetchLoginUser(currentUser: any): Promise<User>;
    createUser(createUserInput: CreateUserInput): Promise<any>;
    updateUser(userId: string, updateUserInput: UpdateUserInput): Promise<any>;
    updateLoginPwd(currentUser: any, password: string): Promise<{
        id: any;
        password: any;
        email: string;
        name: string;
        birth: string;
        gender: string;
        userGrade: string;
        phone: string;
        point: number;
        deletedAt: Date;
    } & User>;
    deleteUser(userId: string): Promise<boolean>;
    deleteLoginUser(currentUser: any): Promise<boolean>;
}
