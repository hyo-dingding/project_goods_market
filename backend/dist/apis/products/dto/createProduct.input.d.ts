import { ProductDiscountInput } from 'src/apis/productsDiscount/dto/productDiscount.input';
export declare class CreateProductInput {
    name: string;
    price: number;
    deliveryPrice: number;
    maxQ: number;
    createdAt: Date;
    updatedAt: Date;
    contents: string;
    stock: number;
    productCategoryId: string;
    productDiscount: ProductDiscountInput;
    productImages: string[];
}
