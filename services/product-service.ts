module App {
    export class ProductService {
        private apiUrl: string = 'https://localhost:7183/products'; // URL base de la API

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {}

        getProducts(): ng.IPromise<ProductData[]> {
            return this.$http.get<ProductData[]>(this.apiUrl).then(response => response.data);
        }

        getProductByID(productId: number): ng.IPromise<ProductData> {
            return this.$http.get<ProductData>(`${this.apiUrl}/${productId}`).then(response => response.data);
        }

        addProduct(product: ProductData): ng.IPromise<ProductData> {
            return this.$http.post<ProductData>(this.apiUrl, product).then(response => response.data);
        }

        updateProduct(product: ProductData): ng.IPromise<ProductData> {
            return this.$http.put<ProductData>(`${this.apiUrl}/${product.id}`, product).then(response => response.data);
        }

        deleteProduct(product: number): ng.IPromise<void> {
            return this.$http.delete<void>(`${this.apiUrl}/${product}`).then(response => response.data);
        }
    }


}