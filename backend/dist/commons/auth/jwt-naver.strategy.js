"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtNaverStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_naver_v2_1 = require("passport-naver-v2");
class JwtNaverStrategy extends (0, passport_1.PassportStrategy)(passport_naver_v2_1.Strategy, 'naver') {
    constructor() {
        super({
            clientID: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/login/naver',
            scope: ['email', 'profile'],
        });
    }
    validate(accessToken, refreshToken, profile) {
        console.log('access: ', accessToken);
        console.log('refresh: ', refreshToken);
        console.log(profile);
        return {
            email: profile.email,
            password: '1234',
            name: profile.name,
            birth: profile.birthday,
            gender: profile.gender,
            userGrade: 'Diamond',
            pointTotal: 0,
            phone: profile.mobile.split('-').join(''),
        };
    }
}
exports.JwtNaverStrategy = JwtNaverStrategy;
//# sourceMappingURL=jwt-naver.strategy.js.map