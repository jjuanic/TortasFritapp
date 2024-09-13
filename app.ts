/// <reference path="controllers/signup-controller.ts"/>
/// <reference path="controllers/signin-controller.ts"/>

/// <reference path="services/order-service.ts"/>
/// <reference path="services/orderline-service.ts"/>
/// <reference path="services/stock-service.ts"/>
/// <reference path="services/user-service.ts"/>
/// <reference path="services/product-service.ts"/>
/// <reference path="services/cookies-service.ts"/>

(() => {
    const rootModule = angular.module("TortasApp", [
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

    rootModule.config(($stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

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