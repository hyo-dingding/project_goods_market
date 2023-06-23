import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { IContext } from 'src/commons/type/context';
export declare class AuthResolver {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    userLogin(email: string, password: string, context: IContext): Promise<string>;
    restoreAccessToken(context: IContext): string;
}
