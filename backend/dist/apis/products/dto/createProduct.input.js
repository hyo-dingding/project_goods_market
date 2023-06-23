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
exports.CreateProductInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const productDiscount_input_1 = require("../../productsDiscount/dto/productDiscount.input");
let CreateProductInput = class CreateProductInput {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProductInput.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "deliveryPrice", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "maxQ", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], CreateProductInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], CreateProductInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProductInput.prototype, "contents", void 0);
__decorate([
    (0, class_validator_1.Min)(0),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateProductInput.prototype, "stock", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateProductInput.prototype, "productCategoryId", void 0);
__decorate([
    (0, graphql_1.Field)(() => productDiscount_input_1.ProductDiscountInput),
    __metadata("design:type", productDiscount_input_1.ProductDiscountInput)
], CreateProductInput.prototype, "productDiscount", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], CreateProductInput.prototype, "productImages", void 0);
CreateProductInput = __decorate([
    (0, graphql_1.InputType)()
], CreateProductInput);
exports.CreateProductInput = CreateProductInput;
//# sourceMappingURL=createProduct.input.js.map