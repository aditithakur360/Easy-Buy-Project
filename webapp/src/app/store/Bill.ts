import { TotalBillDetails } from "./Bill_details";

export interface Bill {
    user: number;
    totalAmount: number;
    originalAmount: number;
        finalRewardPoints : number;
    billList : TotalBillDetails[];
    rewardPoints: number;
    purchaseDate: Date;
}