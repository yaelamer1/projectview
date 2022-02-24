import { ProductInShop } from "./productInShop";

export class Product{

    constructor(
        public Id?:number,
        public Name?: string, 
        public Picture?: string, 
        public CategoryId?:number,
        public ProductInShops?:ProductInShop[]
        ) {
    }
}