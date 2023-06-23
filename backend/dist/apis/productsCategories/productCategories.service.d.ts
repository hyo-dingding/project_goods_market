import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';
export declare class ProductCategoriesService {
    private readonly productCategoriesRepository;
    constructor(productCategoriesRepository: Repository<ProductCategory>);
    create({ categoryName }: {
        categoryName: any;
    }): Promise<{
        categoryName: any;
    } & ProductCategory>;
}
