export class BillDetails {
    // id: number;
    productCode: number;
    productName: string;
    quantity: number;
    amount: number;
}

export interface TotalBillDetails {
    productCode: number;
    quantity: number;
}