module App {
    export class OrderlineService {
        private apiUrl: string = 'https://localhost:7183/orders/'; // URL base de la API

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        //make sure to maintain database consistency by managing the relationship between orders and order lines well


        getOrderlines(orderId: number): ng.IPromise<OrderlineData[]> {
            return this.$http.get<OrderlineData[]>(`this.apiUrl/${orderId}`).then(response => response.data);
        }

        getOrderlinesByOrderID(orderId: number, orderLineId:number): ng.IPromise<OrderlineData> {
            return this.$http.get<OrderlineData>(`${this.apiUrl}/${orderId}/${orderLineId}`).then(response => response.data);
        }

        addOrderline(orderId: number, orderLine: OrderlineData): ng.IPromise<OrderlineData> {
            return this.$http.post<OrderlineData>(`${this.apiUrl}/${orderId}`, orderLine).then(response => response.data);
        }

        // idk if this will work
        updateOrderline(orderId: number, orderLine: OrderlineData): ng.IPromise<OrderlineData> {
            return this.$http.put<OrderlineData>(`${this.apiUrl}/${orderId}`, orderLine).then(response => response.data);
        } 

        deleteOrderline(orderId: number, orderLine: OrderlineData): ng.IPromise<void> {
            return this.$http.delete<void>(`${this.apiUrl}/${orderLine}`).then(response => response.data);
        }
    }


}