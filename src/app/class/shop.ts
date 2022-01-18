import { City } from "./city";

export class Shop{
    constructor(public Id?: number, public CityId?: number, public Name?: string , public City?:City, public Phone?:string) {
    }
}