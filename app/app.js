var app = angular.module('shoppingOnline',['ui.router','shoppingList','shoppingCart']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
            url: '/home',
            templateUrl: 'app/components/shoppingList/shoppingList.html',
            controller: 'shoppingListCtrl',
    })
    .state('cart',{
      url: '/cart',
      templateUrl: 'app/components/shoppingCart/shoppingCart.html',
      controller : 'shoppingCartCtrl'
    })
});
