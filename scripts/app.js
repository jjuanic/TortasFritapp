var App;
(function (App) {
    var SignupController = /** @class */ (function () {
        function SignupController(userService, $timeout, $state) {
            this.userService = userService;
            this.$timeout = $timeout;
            this.$state = $state;
            this.newUser = { id: 0,
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '' };
        }
        SignupController.prototype.eraseNewUser = function () {
            this.newUser = { id: 0,
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '' };
        };
        // Signing up a User in the database
        SignupController.prototype.signUpUser = function () {
            var _this = this;
            this.userService.addUser(this.newUser).then(function (item) {
                _this.eraseNewUser();
                alert('User sign up.');
                // Redirigir a la página deseada después de 2 segundos (2000 ms)
                _this.$timeout(function () {
                    _this.$state.go('home'); // Reemplaza 'desiredState' con el nombre del estado al que quieres redirigir
                }, 2000);
            });
        };
        SignupController.$inject = ['UserService', '$timeout', '$state'];
        return SignupController;
    }());
    App.SignupController = SignupController;
})(App || (App = {}));
var App;
(function (App) {
    var SignInController = /** @class */ (function () {
        function SignInController(userService, $timeout, $state, $cookies) {
            this.userService = userService;
            this.$timeout = $timeout;
            this.$state = $state;
            this.$cookies = $cookies;
            this.user = { id: 0,
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '' };
        }
        // Signing up a User in the database
        SignInController.prototype.signInUser = function () {
            var _this = this;
            this.userService.getUserByEmailAndPassword(this.user).then(function (authenticatedUser) {
                if (authenticatedUser &&
                    authenticatedUser.email === _this.user.email &&
                    authenticatedUser.password === _this.user.password) {
                    _this.$cookies.setUserId(authenticatedUser.id);
                    alert('User login');
                    _this.$timeout(function () {
                        _this.$state.go('home');
                    }, 2000);
                    console.log(_this.$cookies.getUserId());
                }
                else {
                    alert('Wrong Credentials!');
                }
            });
        };
        SignInController.$inject = ['UserService', '$timeout', '$state', 'CookiesService'];
        return SignInController;
    }());
    App.SignInController = SignInController;
})(App || (App = {}));
var App;
(function (App) {
    var OrderService = /** @class */ (function () {
        function OrderService($http) {
            this.$http = $http;
            this.apiUrl = 'https://localhost:7183/orders'; // URL base de la API
        }
        // make sure to maintain database consistency by managing the relationship between orders and order lines well
        OrderService.prototype.getOrders = function () {
            return this.$http.get(this.apiUrl).then(function (response) { return response.data; });
        };
        OrderService.prototype.getOrderByID = function (id) {
            return this.$http.get(this.apiUrl + "/" + id).then(function (response) { return response.data; });
        };
        OrderService.prototype.addOrder = function (item) {
            return this.$http.post(this.apiUrl, item).then(function (response) { return response.data; });
        };
        OrderService.prototype.updateOrder = function (item) {
            return this.$http.put(this.apiUrl + "/" + item.id, item).then(function (response) { return response.data; });
        };
        OrderService.prototype.deleteOrder = function (id) {
            return this.$http.delete(this.apiUrl + "/" + id).then(function (response) { return response.data; });
        };
        OrderService.$inject = ['$http'];
        return OrderService;
    }());
    App.OrderService = OrderService;
})(App || (App = {}));
var App;
(function (App) {
    var OrderlineService = /** @class */ (function () {
        function OrderlineService($http) {
            this.$http = $http;
            this.apiUrl = 'https://localhost:7183/orders/'; // URL base de la API
        }
        //make sure to maintain database consistency by managing the relationship between orders and order lines well
        OrderlineService.prototype.getOrderlines = function (orderId) {
            return this.$http.get("this.apiUrl/" + orderId).then(function (response) { return response.data; });
        };
        OrderlineService.prototype.getOrderlinesByOrderID = function (orderId, orderLineId) {
            return this.$http.get(this.apiUrl + "/" + orderId + "/" + orderLineId).then(function (response) { return response.data; });
        };
        OrderlineService.prototype.addOrderline = function (orderId, orderLine) {
            return this.$http.post(this.apiUrl + "/" + orderId, orderLine).then(function (response) { return response.data; });
        };
        // idk if this will work
        OrderlineService.prototype.updateOrderline = function (orderId, orderLine) {
            return this.$http.put(this.apiUrl + "/" + orderId, orderLine).then(function (response) { return response.data; });
        };
        OrderlineService.prototype.deleteOrderline = function (orderId, orderLine) {
            return this.$http.delete(this.apiUrl + "/" + orderLine).then(function (response) { return response.data; });
        };
        OrderlineService.$inject = ['$http'];
        return OrderlineService;
    }());
    App.OrderlineService = OrderlineService;
})(App || (App = {}));
var App;
(function (App) {
    var StockService = /** @class */ (function () {
        function StockService($http) {
            this.$http = $http;
            this.apiUrl = 'https://localhost:7183/stocks'; // URL base de la API
        }
        StockService.$inject = ['$http'];
        return StockService;
    }());
    App.StockService = StockService;
})(App || (App = {}));
var App;
(function (App) {
    var UserService = /** @class */ (function () {
        function UserService($http, $q) {
            this.$http = $http;
            this.$q = $q;
            this.apiUrl = 'https://localhost:7183/users'; // URL base de la API
        }
        UserService.prototype.getUsers = function () {
            return this.$http.get(this.apiUrl).then(function (response) { return response.data; });
        };
        UserService.prototype.getUserByID = function (id) {
            return this.$http.get(this.apiUrl + "/" + id).then(function (response) { return response.data; });
        };
        UserService.prototype.getUserByEmailAndPassword = function (user) {
            var fakeUser = {
                id: 123,
                firstName: 'Beto',
                lastName: 'Salazar',
                email: 'hola@gmail.com',
                address: 'Pronunciamiento 2073',
                password: '123'
                // Agrega otros campos que necesites según la estructura de UserData
            };
            // Simula una respuesta exitosa usando $q
            return this.$q(function (resolve) {
                setTimeout(function () {
                    resolve(fakeUser); // 
                }, 1000); // 1000 ms de retraso, ajusta según lo necesites
            });
        };
        // addUser(item: UserData): ng.IPromise<UserData> {
        //     return this.$http.post<UserData>(this.apiUrl, item).then(response => response.data);
        // }
        UserService.prototype.addUser = function (item) {
            var fakeUser = {
                id: 123,
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
                address: item.address,
                password: item.password,
            };
            // Simula una respuesta exitosa usando $q
            return this.$q(function (resolve) {
                setTimeout(function () {
                    resolve(fakeUser); // Devuelve el usuario fake después de un tiempo para simular el retraso del servidor
                }, 1000); // 1000 ms de retraso, ajusta según lo necesites
            });
        };
        UserService.prototype.updateUser = function (item) {
            return this.$http.put(this.apiUrl + "/" + item.id, item).then(function (response) { return response.data; });
        };
        UserService.prototype.deleteUser = function (id) {
            return this.$http.delete(this.apiUrl + "/" + id).then(function (response) { return response.data; });
        };
        UserService.$inject = ['$http', '$q'];
        return UserService;
    }());
    App.UserService = UserService;
})(App || (App = {}));
var App;
(function (App) {
    var ProductService = /** @class */ (function () {
        function ProductService($http) {
            this.$http = $http;
            this.apiUrl = 'https://localhost:7183/products'; // URL base de la API
        }
        ProductService.prototype.getProducts = function () {
            return this.$http.get(this.apiUrl).then(function (response) { return response.data; });
        };
        ProductService.prototype.getProductByID = function (productId) {
            return this.$http.get(this.apiUrl + "/" + productId).then(function (response) { return response.data; });
        };
        ProductService.prototype.addProduct = function (product) {
            return this.$http.post(this.apiUrl, product).then(function (response) { return response.data; });
        };
        ProductService.prototype.updateProduct = function (product) {
            return this.$http.put(this.apiUrl + "/" + product.id, product).then(function (response) { return response.data; });
        };
        ProductService.prototype.deleteProduct = function (product) {
            return this.$http.delete(this.apiUrl + "/" + product).then(function (response) { return response.data; });
        };
        ProductService.$inject = ['$http'];
        return ProductService;
    }());
    App.ProductService = ProductService;
})(App || (App = {}));
/// <reference path="../node_modules/@types/angular/index.d.ts" />
/// <reference path="../node_modules/@types/angular-cookies/index.d.ts" />
var App;
(function (App) {
    var CookiesService = /** @class */ (function () {
        function CookiesService($cookies) {
            this.$cookies = $cookies;
        }
        CookiesService.prototype.setUserId = function (userId) {
            var expiresAt = new Date(new Date().getTime() + 30 * 60 * 1000);
            this.$cookies.put('userId', userId.toString(), { expires: expiresAt });
        };
        CookiesService.prototype.getUserId = function () {
            var userId = this.$cookies.get('userId');
            return userId ? parseInt(userId, 10) : undefined;
        };
        CookiesService.$inject = ['$cookies'];
        return CookiesService;
    }());
    App.CookiesService = CookiesService;
})(App || (App = {}));
/// <reference path="controllers/signup-controller.ts"/>
/// <reference path="controllers/signin-controller.ts"/>
/// <reference path="services/order-service.ts"/>
/// <reference path="services/orderline-service.ts"/>
/// <reference path="services/stock-service.ts"/>
/// <reference path="services/user-service.ts"/>
/// <reference path="services/product-service.ts"/>
/// <reference path="services/cookies-service.ts"/>
(function () {
    var rootModule = angular.module("TortasApp", [
        'ui.router',
        'ngCookies'
    ]);
    // Registrar el servicio en el módulo principal
    rootModule.service('UserService', App.UserService);
    rootModule.service("OrderService", App.OrderService);
    rootModule.service("OrderlineService", App.OrderlineService);
    rootModule.service("StockService", App.StockService);
    rootModule.service("ProductService", App.ProductService);
    rootModule.service("CookiesService", App.CookiesService);
    rootModule.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state({
            name: 'home',
            url: '/',
            template: 'The home!'
        });
        $stateProvider.state({
            name: 'signup',
            url: '/signup',
            templateUrl: 'views/signup.template.html',
            controller: App.SignupController,
            controllerAs: 'ctrl',
        });
        $stateProvider.state({
            name: 'signin',
            url: '/signin',
            templateUrl: 'views/signin.template.html',
            controller: App.SignInController,
            controllerAs: 'ctrl',
        });
        // $stateProvider.state({
        //     name: 'product-detail',
        //     url: '/products/:itemId', // Acepta itemId como parámetro
        //     templateUrl: 'views/product-detail.html',
        //     controller: App.ProductController,
        //     controllerAs: 'ctrl',
        //     resolve: {
        //         isEdit: ($stateParams: angular.ui.IStateParamsService) => {
        //             return !!$stateParams['itemId']; 
        //         },
        //         productId: ($stateParams: angular.ui.IStateParamsService) => {
        //             return $stateParams['itemId'] ? parseInt($stateParams['itemId'], 10) : null;
        //         }
        //     }
        // });        
    });
})();
var App;
(function (App) {
    var OrderController = /** @class */ (function () {
        function OrderController(orderService, userService) {
            this.orderService = orderService;
            this.userService = userService;
            this.orders = [];
            this.newOrder = {
                id: 0,
                name: '',
                orderDate: new Date(),
                orderAdress: '',
                totalAmount: 0,
                orderlines: [],
                user: {
                    id: 0,
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                    address: ''
                }
            };
        }
        OrderController.prototype.addOrder = function () {
        };
        OrderController.$inject = ['OrderService', 'UserService'];
        return OrderController;
    }());
    App.OrderController = OrderController;
})(App || (App = {}));
//# sourceMappingURL=app.js.map