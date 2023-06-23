import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductImage } from 'src/apis/productImages/entities/productImage.entity';
import { ProductDiscount } from 'src/apis/productsDiscount/entities/productDiscount.entity';
export declare class Product {
    id: string;
    name: string;
    price: number;
    deliveryPrice: number;
    maxQ: number;
    createdAt: Date;
    updatedAt: Date;
    contents: string;
    stock: number;
    productCategory: ProductCategory;
    productDiscount: ProductDiscount;
    productImages: ProductImage[];
    deletedAt: Date;
}
