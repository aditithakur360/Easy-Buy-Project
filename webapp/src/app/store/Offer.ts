import { Products } from "./Products";


export interface Offer{
    id: number;
    offerDate: Date;
    offerPercentage: number;
    offerDetails: string;
    productId: Products;
}