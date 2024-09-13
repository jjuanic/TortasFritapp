module App {
    export class OrderService {
        private apiUrl: string = 'https://localhost:7183/orders'; // URL base de la API

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        // make sure to maintain database consistency by managing the relationship between orders and order lines well

        getOrders(): ng.IPromise<OrderData[]> {
            return this.$http.get<OrderData[]>(this.apiUrl).then(response => response.data);
        }

        getOrderByID(id: number): ng.IPromise<OrderData> {
            return this.$http.get<OrderData>(`${this.apiUrl}/${id}`).then(response => response.data);
        }

        addOrder(item: OrderData): ng.IPromise<OrderData> {
            return this.$http.post<OrderData>(this.apiUrl, item).then(response => response.data);
        }

        updateOrder(item: OrderData): ng.IPromise<OrderData> {
            return this.$http.put<OrderData>(`${this.apiUrl}/${item.id}`, item).then(response => response.data);
        }

        deleteOrder(id: OrderData): ng.IPromise<void> {
            return this.$http.delete<void>(`${this.apiUrl}/${id}`).then(response => response.data);
        }
    }


}