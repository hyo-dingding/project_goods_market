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
exports.ProductCategoriesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const productCategory_entity_1 = require("./entities/productCategory.entity");
const productCategories_service_1 = require("./productCategories.service");
let ProductCategoriesResolver = class ProductCategoriesResolver {
    constructor(productCategoriesService) {
        this.productCategoriesService = productCategoriesService;
    }
    createProductCategory(categoryName) {
        return this.productCategoriesService.create({ categoryName });
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => productCategory_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('categoryName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductCategoriesResolver.prototype, "createProductCategory", null);
ProductCategoriesResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [productCategories_service_1.ProductCategoriesService])
], ProductCategoriesResolver);
exports.ProductCategoriesResolver = ProductCategoriesResolver;
//# sourceMappingURL=productCategories.resolver.js.map