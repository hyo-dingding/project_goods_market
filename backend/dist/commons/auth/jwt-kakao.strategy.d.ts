import { Strategy } from 'passport-kakao';
declare const JwtKakaoStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtKakaoStrategy extends JwtKakaoStrategy_base {
    constructor();
    validate(accessToken: any, refreshToken: any, profile: any): {
        email: any;
        password: string;
        name: any;
        birth: any;
        gender: any;
        userGrade: string;
        pointTotal: number;
        phone: string;
    };
}
export {};
