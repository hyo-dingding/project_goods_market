"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersPaymentsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const orderPayment_entity_1 = require("./entities/orderPayment.entity");
const ordersPayments_resolver_1 = require("./ordersPayments.resolver");
const ordersPayments_service_1 = require("./ordersPayments.service");
let OrdersPaymentsModule = class OrdersPaymentsModule {
};
OrdersPaymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                orderPayment_entity_1.OrderPayment,
                user_entity_1.User,
            ]),
        ],
        providers: [
            ordersPayments_resolver_1.OrdersPaymentsResolver,
            ordersPayments_service_1.OrdersPaymentsService,
        ],
    })
], OrdersPaymentsModule);
exports.OrdersPaymentsModule = OrdersPaymentsModule;
//# sourceMappingURL=ordersPayments.module.js.map