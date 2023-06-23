"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtKakaoStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_kakao_1 = require("passport-kakao");
class JwtKakaoStrategy extends (0, passport_1.PassportStrategy)(passport_kakao_1.Strategy, 'kakao') {
    constructor() {
        super({
            clientID: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/login/kakao',
        });
    }
    validate(accessToken, refreshToken, profile) {
        console.log('access: ', accessToken);
        console.log('refresh: ', refreshToken);
        console.log('profile:', profile);
        return {
            email: profile._json.kakao_account.email,
            password: '1234',
            name: profile.displayName,
            birth: profile._json.kakao_account.birthday,
            gender: profile._json.kakao_account.gender,
            userGrade: 'Diamond',
            pointTotal: 0,
            phone: '01099493276',
        };
    }
}
exports.JwtKakaoStrategy = JwtKakaoStrategy;
//# sourceMappingURL=jwt-kakao.strategy.js.map