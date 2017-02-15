var app = angular.module('shoppingCart',['ui.router','shoppingList','shoppingCart2']);

// app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
            url: '/home',
            templateUrl: 'app/components/shoppingList/shoppingList.html',
            controller: 'shoppingListCtrl',
    })
    .state('about',{
      url: '/cart',
      templateUrl: 'app/components/shoppingCart/shoppingCart.html',
      controller : 'shoppingCartCtrll'
    })
});
