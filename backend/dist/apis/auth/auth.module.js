"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_google_strategy_1 = require("../../commons/auth/jwt-google.strategy");
const jwt_kakao_strategy_1 = require("../../commons/auth/jwt-kakao.strategy");
const jwt_naver_strategy_1 = require("../../commons/auth/jwt-naver.strategy");
const jwt_refresh_strategy_1 = require("../../commons/auth/jwt-refresh.strategy");
const user_entity_1 = require("../users/entities/user.entity");
const users_service_1 = require("../users/users.service");
const auth_controller_1 = require("./auth.controller");
const auth_resolver_1 = require("./auth.resolver");
const auth_service_1 = require("./auth.service");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({}),
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
            ]),
        ],
        providers: [
            jwt_kakao_strategy_1.JwtKakaoStrategy,
            jwt_naver_strategy_1.JwtNaverStrategy,
            jwt_google_strategy_1.JwtGoogleStrategy,
            jwt_refresh_strategy_1.JwtRefreshStrategy,
            auth_resolver_1.AuthResolver,
            auth_service_1.AuthService,
            users_service_1.UsersService,
        ],
        controllers: [
            auth_controller_1.AuthController,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map