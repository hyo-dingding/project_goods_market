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
exports.Product = void 0;
const graphql_1 = require("@nestjs/graphql");
const productCategory_entity_1 = require("../../productsCategories/entities/productCategory.entity");
const productImage_entity_1 = require("../../productImages/entities/productImage.entity");
const productDiscount_entity_1 = require("../../productsDiscount/entities/productDiscount.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "deliveryPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "maxQ", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    (0, graphql_1.Field)(() => Date),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Product.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => productCategory_entity_1.ProductCategory),
    (0, graphql_1.Field)(() => productCategory_entity_1.ProductCategory),
    __metadata("design:type", productCategory_entity_1.ProductCategory)
], Product.prototype, "productCategory", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => productDiscount_entity_1.ProductDiscount),
    (0, graphql_1.Field)(() => productDiscount_entity_1.ProductDiscount),
    __metadata("design:type", productDiscount_entity_1.ProductDiscount)
], Product.prototype, "productDiscount", void 0);
__decorate([
    (0, typeorm_1.JoinTable)(),
    (0, typeorm_1.ManyToMany)(() => productImage_entity_1.ProductImage, (ProductImages) => ProductImages.products),
    (0, graphql_1.Field)(() => [productImage_entity_1.ProductImage]),
    __metadata("design:type", Array)
], Product.prototype, "productImages", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Date)
], Product.prototype, "deletedAt", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map