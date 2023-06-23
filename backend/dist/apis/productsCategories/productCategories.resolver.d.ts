import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoriesService } from './productCategories.service';
export declare class ProductCategoriesResolver {
    private readonly productCategoriesService;
    constructor(productCategoriesService: ProductCategoriesService);
    createProductCategory(categoryName: string): Promise<{
        categoryName: any;
    } & ProductCategory>;
}
