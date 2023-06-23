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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const productImage_entity_1 = require("../productImages/entities/productImage.entity");
const productDiscount_entity_1 = require("../productsDiscount/entities/productDiscount.entity");
const product_entity_1 = require("./entities/product.entity");
let ProductService = class ProductService {
    constructor(productsRepository, productsDiscountRepository, productsImageRepository) {
        this.productsRepository = productsRepository;
        this.productsDiscountRepository = productsDiscountRepository;
        this.productsImageRepository = productsImageRepository;
    }
    findAll() {
        return this.productsRepository.find({
            relations: ['productCategory', 'productDiscount', 'productImages'],
        });
    }
    findOne({ productId }) {
        return this.productsRepository.findOne({
            where: { id: productId },
            relations: ['productCategory', 'productDiscount', 'productImages'],
        });
    }
    async fetchDelete() {
        return await this.productsRepository.find({
            withDeleted: true,
            relations: ['productCategory', 'productDiscount'],
        });
    }
    async create({ createProductInput }) {
        const { productCategoryId, productDiscount, productImages } = createProductInput, product = __rest(createProductInput, ["productCategoryId", "productDiscount", "productImages"]);
        const result = await this.productsDiscountRepository.save(Object.assign({}, productDiscount));
        const temp = [];
        for (let i = 0; i < productImages.length; i++) {
            const imagename = productImages[i];
            const prevImage = await this.productsImageRepository.findOne({
                where: { image: imagename },
            });
            if (prevImage) {
                temp.push(prevImage);
            }
            else {
                const newImage = await this.productsImageRepository.save({
                    image: imagename,
                });
                temp.push(newImage);
            }
        }
        const result2 = await this.productsRepository.save(Object.assign(Object.assign({}, product), { productDiscount: result, productCategory: {
                id: productCategoryId,
            }, productImages: temp }));
        return result2;
    }
    async update({ productId, updateProductInput }) {
        const myproduct = await this.productsRepository.findOne({
            where: { id: productId },
        });
        const result = this.productsRepository.save(Object.assign(Object.assign(Object.assign({}, myproduct), { id: productId }), updateProductInput));
        return result;
    }
    async checkStock({ productId }) {
        const product = await this.productsRepository.findOne({
            where: { id: productId },
        });
        if (product.stock === 0)
            throw new common_1.UnprocessableEntityException('재고가 없습니다.');
    }
    async delete({ productId }) {
        const result = await this.productsRepository.softDelete({ id: productId });
        return result.affected ? true : false;
    }
    async restore({ productId }) {
        const result = await this.productsRepository.restore({ id: productId });
        return result.affected ? true : false;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(productDiscount_entity_1.ProductDiscount)),
    __param(2, (0, typeorm_1.InjectRepository)(productImage_entity_1.ProductImage)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map