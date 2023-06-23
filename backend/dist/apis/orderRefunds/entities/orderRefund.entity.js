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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRefund = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
let OrderRefund = class OrderRefund {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderRefund.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderRefund.prototype, "refundIssue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => Boolean),
    __metadata("design:type", Boolean)
], OrderRefund.prototype, "isRefunded", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderRefund.prototype, "refundCoupon", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderRefund.prototype, "refundPoint", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderRefund.prototype, "refundPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderRefund.prototype, "refundTotal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], OrderRefund.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], OrderRefund.prototype, "processedAt", void 0);
OrderRefund = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], OrderRefund);
exports.OrderRefund = OrderRefund;
//# sourceMappingURL=orderRefund.entity.js.map