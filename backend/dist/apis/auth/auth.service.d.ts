import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UsersService);
    getAccessToken({ correctUser }: {
        correctUser: any;
    }): string;
    setRefreshToken({ correctUser, res }: {
        correctUser: any;
        res: any;
    }): void;
    socialLogin({ req, res }: {
        req: any;
        res: any;
    }): Promise<void>;
}
