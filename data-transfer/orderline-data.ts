module App {
    export interface OrderlineData {
        id: number;
        quantity: number;
        pricePerUnit: number;
        totalAmount: number;
        order?: OrderData;
        product?: ProductData;
    }
}