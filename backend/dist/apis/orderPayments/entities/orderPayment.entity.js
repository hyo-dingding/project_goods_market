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
exports.OrderPayment = exports.ORDER_PAYMENT_STATE_ENUM = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_entity_1 = require("../../orders/entities/order.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
var ORDER_PAYMENT_STATE_ENUM;
(function (ORDER_PAYMENT_STATE_ENUM) {
    ORDER_PAYMENT_STATE_ENUM["PAYMENT"] = "PAYMENT";
    ORDER_PAYMENT_STATE_ENUM["CANCEL"] = "CANCEL";
})(ORDER_PAYMENT_STATE_ENUM = exports.ORDER_PAYMENT_STATE_ENUM || (exports.ORDER_PAYMENT_STATE_ENUM = {}));
(0, graphql_1.registerEnumType)(ORDER_PAYMENT_STATE_ENUM, {
    name: 'ORDER_PAYMENT_STATE_ENUM',
});
let OrderPayment = class OrderPayment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderPayment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], OrderPayment.prototype, "impUid", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], OrderPayment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ORDER_PAYMENT_STATE_ENUM }),
    (0, graphql_1.Field)(() => ORDER_PAYMENT_STATE_ENUM),
    __metadata("design:type", String)
], OrderPayment.prototype, "orderState", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], OrderPayment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], OrderPayment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)(),
    (0, typeorm_1.OneToOne)(() => order_entity_1.Order),
    __metadata("design:type", order_entity_1.Order)
], OrderPayment.prototype, "order", void 0);
OrderPayment = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], OrderPayment);
exports.OrderPayment = OrderPayment;
//# sourceMappingURL=orderPayment.entity.js.map