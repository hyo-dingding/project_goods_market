"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("../users/users.service");
const auth_service_1 = require("./auth.service");
const bcrypt = require("bcrypt");
const gql_auth_guard_1 = require("../../commons/auth/gql-auth.guard");
let AuthResolver = class AuthResolver {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async userLogin(email, password, context) {
        const correctUser = await this.userService.findOne({ email });
        if (!correctUser)
            throw new common_1.UnprocessableEntityException('이메일이 없습니다.!!!!!');
        const isAuth = await bcrypt.compare(password, correctUser.password);
        if (!isAuth)
            throw new common_1.UnprocessableEntityException('비밀번호가 틀렸습니다.!!!!!');
        this.authService.setRefreshToken({ correctUser, res: context.res });
        const hashedPassword = await bcrypt.hash(correctUser.password, 10);
        correctUser.password = hashedPassword;
        return this.authService.getAccessToken({ correctUser });
    }
    restoreAccessToken(context) {
        return this.authService.getAccessToken({
            correctUser: context.req.user,
        });
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('email')),
    __param(1, (0, graphql_1.Args)('password')),
    __param(2, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "userLogin", null);
__decorate([
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthRefreshGuard),
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "restoreAccessToken", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map