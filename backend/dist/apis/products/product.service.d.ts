import { Repository } from 'typeorm';
import { ProductImage } from '../productImages/entities/productImage.entity';
import { ProductDiscount } from '../productsDiscount/entities/productDiscount.entity';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private readonly productsRepository;
    private readonly productsDiscountRepository;
    private readonly productsImageRepository;
    constructor(productsRepository: Repository<Product>, productsDiscountRepository: Repository<ProductDiscount>, productsImageRepository: Repository<ProductImage>);
    findAll(): Promise<Product[]>;
    findOne({ productId }: {
        productId: any;
    }): Promise<Product>;
    fetchDelete(): Promise<Product[]>;
    create({ createProductInput }: {
        createProductInput: any;
    }): Promise<any>;
    update({ productId, updateProductInput }: {
        productId: any;
        updateProductInput: any;
    }): Promise<any>;
    checkStock({ productId }: {
        productId: any;
    }): Promise<void>;
    delete({ productId }: {
        productId: any;
    }): Promise<boolean>;
    restore({ productId }: {
        productId: any;
    }): Promise<boolean>;
}
