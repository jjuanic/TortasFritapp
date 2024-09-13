module App {
    export class StockService {
        private apiUrl: string = 'https://localhost:7183/stocks'; // URL base de la API

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        // make sure to maintain database consistency by managing the relationship between orders and order lines well

        // getStocks(): ng.IPromise<StockData[]> {
        //     return this.$http.get<StockData[]>(this.apiUrl).then(response => response.data);
        // }

        // getStockByProductId(productId: number): ng.IPromise<StockData> {
        //     return this.$http.get<StockData>(`${this.apiUrl}/${productId}/`).then(response => response.data);
        // }

        // addStock(stock: StockData): ng.IPromise<StockData> {
        //     return this.$http.post<StockData>(this.apiUrl, stock).then(response => response.data);
        // }

        // updateStock(stock: StockData): ng.IPromise<StockData> {
        //     return this.$http.put<StockData>(`${this.apiUrl}/${stock.ProductId}/`, stock).then(response => response.data);
        // }

        // deleteStock(stock: StockData): ng.IPromise<void> {
        //     return this.$http.delete<void>(`${this.apiUrl}/${stock.ProductId}/`, stock).then(response => response.data);
        // }
    }


}