module App {
    export class OrderlineService {
        private apiUrl: string = 'https://localhost:7183/orders/'; // URL base de la API

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        //make sure to maintain database consistency by managing the relationship between orders and order lines well


        getOrderlines(orderId: number): ng.IPromise<OrderLineData[]> {
            return this.$http.get<OrderLineData[]>(this.apiUrl/${orderId}/).then(response => response.data);
        }

        getOrderlinesByOrderID(orderId: number, orderLineId:number): ng.IPromise<OrderLineData> {
            return this.$http.get<OrderLineData>(`${this.apiUrl}/${orderId}/${orderLineId}`).then(response => response.data);
        }

        addOrderline(orderId: number, orderLine: OrderLineData): ng.IPromise<OrderLineData> {
            return this.$http.post<OrderLineData>(`${this.apiUrl}/${orderId}`, orderLine).then(response => response.data);
        }

        // idk if this will work
        updateOrderline(orderId: number, orderLine: OrderLineData): ng.IPromise<OrderLineData> {
            return this.$http.put<OrderLineData>(`${this.apiUrl}/${orderId}`, orderLine).then(response => response.data);
        } 

        deleteOrderline(orderId: number, orderLine: OrderLineData): ng.IPromise<void> {
            return this.$http.delete<void>(`${this.apiUrl}/${orderLine}`).then(response => response.data);
        }
    }


}