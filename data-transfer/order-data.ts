module App {
    export interface OrderData {
        id: number;
        name: string;
        orderDate: Date;
        orderAdress: string;
        totalAmount: number;
        orderlines: OrderlineData[];
        user: UserData;
    }
}