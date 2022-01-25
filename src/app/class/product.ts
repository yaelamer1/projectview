import { ProductInShop } from "./productInShop";

export class Product{

    constructor(
        public Name?: string, 
        public Description?: string, 
        public Picture?: string, 
        public CategoryId?:number,
        public ProductInShops?:ProductInShop[]
        ) {
    }
}