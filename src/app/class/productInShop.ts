import { Product } from "./product";
import { Shop } from "./shop";

export class ProductInShop{

    constructor(public Id?: number, public ShopId?: number, public Productld?: number, public Price?: number, public Product?: Product, public Shop?:Shop) {
    }
}