var app = angular.module('shoppingCart',['ngRoute','toaster']);

app.controller('shoppingCartCtrl',['$scope','toaster',function($scope, toaster){
  var itmesInCart= JSON.parse(localStorage.getItem('itemsInCart')) || [];
  $scope.items=itmesInCart;
  $scope.totalItems = getTotalItems($scope.items);
  $scope.totalAmount = getTotalAmount($scope.items);

  $scope.deleteItem = function(PId){
    var itemsInCart = JSON.parse(localStorage.getItem('itemsInCart')) || [];
    itemsInCart = itemsInCart.filter(item => item.PId != PId)
    localStorage.setItem('itemsInCart',angular.toJson(itemsInCart)); //persisting to localstorage
    $scope.items=JSON.parse(localStorage.getItem('itemsInCart')) || [];
    $scope.totalItems = getTotalItems($scope.items);
    $scope.totalAmount = getTotalAmount($scope.items);
    toaster.pop('info', "Item Removed.", "");
  }

  $scope.buy =function(){
    toaster.pop('success', "Your order is received successfully", "");

  }

  $scope.remove = function(PId){
    $scope.items.map(function(item){
      if(item.PId == PId){
        item.quantity--;
        if(item.quantity == 0){
          $scope.deleteItem(PId);
        }
      }
    })
    localStorage.setItem('itemsInCart',angular.toJson($scope.items)); //persisting to localstorage
    $scope.totalItems = getTotalItems($scope.items);
    $scope.totalAmount = getTotalAmount($scope.items);
    toaster.pop('info', "Item Quantity Decreased.", "");
  }

  $scope.add = function(PId){
    $scope.items.map(function(item){
      if(item.PId == PId){
        item.quantity++;
      }
    })
    localStorage.setItem('itemsInCart',angular.toJson($scope.items)); //persisting to localstorage
    $scope.totalItems = getTotalItems($scope.items);
    $scope.totalAmount = getTotalAmount($scope.items);
    toaster.pop('info', "Item Quantity Increased.", "");
  }

  function getTotalItems(arr){
    var acc = 0;
    arr.forEach(function(item){
      acc += item.quantity;
    })
    return acc;
  }

  function getTotalAmount(arr){
    var amount = 0;
    arr.forEach(function(item){
      amount += item.quantity* item.price;
    })
    return amount;
  }
}])
