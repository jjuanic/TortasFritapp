/// <reference path="controllers/ListController.ts"/>
/// <reference path="controllers/DetailController.ts"/>
/// <reference path="controllers/CategoryController.ts"/>
/// <reference path="controllers/ProductController.ts"/>
/// <reference path="services/items-service.ts"/>
/// <reference path="services/category-service.ts"/>
/// <reference path="services/product-service.ts"/>

(() => {
    const rootModule = angular.module("TortasApp", [
        'ui.router'
    ]);

    // Registrar el servicio en el módulo principal
    rootModule.service('categoryService', App.CategoryService);
    rootModule.service("itemsService", App.ItemsService)
    rootModule.service("productService", App.ProductService)

    rootModule.config(($stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider) => {

        $urlRouterProvider.otherwise('/');
        $stateProvider.state({
            name: 'home',
            url: '/',
            template: 'The home!'
        });

        $stateProvider.state({
            name: 'list',
            url: '/list',
            templateUrl: 'views/list.template.html',
            controller: App.ListController,
            controllerAs: 'ctrl',
        });

        $stateProvider.state({
            name: 'detail',
            url: '/items/{itemId}',
            templateUrl: 'views/detail.template.html',
            controller: App.DetailController,
            controllerAs: 'ctrl',
        });

        
        $stateProvider.state({
            name: 'categories',
            url: '/category',
            templateUrl: 'views/category-template.html',
            controller: App.CategoryController,
            controllerAs: 'ctrl',
        });

        $stateProvider.state({
            name: 'category-detail',
            url: '/category/:itemId',
            templateUrl: 'views/category-detail.html',
            controller: App.CategoryController,
            controllerAs: 'ctrl',
            resolve: {
                isEdit: ($stateParams: angular.ui.IStateParamsService) => {
                    return !!$stateParams['itemId']; 
                },
                productId: ($stateParams: angular.ui.IStateParamsService) => {
                    return $stateParams['itemId'] ? parseInt($stateParams['itemId'], 10) : null;
                }
            }
        }); 

        $stateProvider.state({
            name: 'products',
            url: '/products',
            templateUrl: 'views/product-template.html',
            controller: App.ProductController,
            controllerAs: 'ctrl',
        });

        $stateProvider.state({
            name: 'product-detail',
            url: '/products/:itemId', // Acepta itemId como parámetro
            templateUrl: 'views/product-detail.html',
            controller: App.ProductController,
            controllerAs: 'ctrl',
            resolve: {
                isEdit: ($stateParams: angular.ui.IStateParamsService) => {
                    return !!$stateParams['itemId']; 
                },
                productId: ($stateParams: angular.ui.IStateParamsService) => {
                    return $stateParams['itemId'] ? parseInt($stateParams['itemId'], 10) : null;
                }
            }
        });        
    });
})();