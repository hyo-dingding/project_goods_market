import { Strategy } from 'passport-naver-v2';
declare const JwtNaverStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtNaverStrategy extends JwtNaverStrategy_base {
    constructor();
    validate(accessToken: any, refreshToken: any, profile: any): {
        email: any;
        password: string;
        name: any;
        birth: any;
        gender: any;
        userGrade: string;
        pointTotal: number;
        phone: any;
    };
}
export {};
