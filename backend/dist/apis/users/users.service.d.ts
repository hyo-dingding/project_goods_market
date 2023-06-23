import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne({ email }: {
        email: any;
    }): Promise<User>;
    create({ createUserInput }: {
        createUserInput: any;
    }): Promise<any>;
    update({ userId, updateUserInput }: {
        userId: any;
        updateUserInput: any;
    }): Promise<any>;
    updateLoginPwd({ userId, password }: {
        userId: any;
        password: any;
    }): Promise<{
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
    delete({ userId }: {
        userId: any;
    }): Promise<boolean>;
}
