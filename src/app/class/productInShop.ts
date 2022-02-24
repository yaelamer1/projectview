import { Product } from "./product";
import { Shop } from "./shop";

export class ProductInShop{

    constructor(
        public Id?: number,
        public ShopId?: number,
        public ProductId?: number,
        public Description?: string, 
        public Price?: number, 
        public Product?: Product, 
        public Shop?:Shop) {
    }
}