var app = angular.module('shoppingList',['ngRoute','toaster']);

app.controller('shoppingListCtrl',['$scope','toaster',function($scope,toaster){
  var itemss = [
    {'PId':'001','name': "Philips Trimmer", 'image':"/images/philips-trimmer.jpg",'price': 1999,'description':"It's a trimmer, produced by Philips."},
    {'PId':'002','name': "Philips Hair Dryer", 'image':"/images/philips-hair-dryer.jpg",'price': 600,'description':"It's a hair dryer, produced by Philips."},
    {'PId':'003','name': "Iphone 7", 'image':"/images/iphone7.jpg",'price': 59000,'description':"It's an iPhone. The flagship phone by Apple."},
    {'PId':'004','name': "Iphone 6", 'image':"/images/iphone7.jpg",'price': 34000,'description':"It's an iPhone. produced phone by Apple."},
    {'PId':'005','name': "Furniture", 'image':"/images/furniture.jpg",'price': 12600,'description':"It's wood furniture."},
    {'PId':'006','name': "HP envy 15", 'image':"/images/laptop.jpg",'price': 32000,'description':"HP laptops with powerfull battery, performance."}
  ];
  $scope.search;
  $scope.items=itemss;

  $scope.addItem = function(PId){
    var itemsInCart = JSON.parse(localStorage.getItem('itemsInCart'))|| [];
    var curItem = $scope.items.filter(item => item.PId == PId)[0];
    curItem.quantity = 1;

    if(checkDuplicate(itemsInCart, PId)){ //increase quantity if product is already there
      curItem = itemsInCart.filter(item=> item.PId == PId)[0];
      curItem.quantity++;
      itemsInCart = itemsInCart.filter(item=> item.PId != PId) || [];
    }

    itemsInCart.push(curItem);
    localStorage.setItem('itemsInCart',angular.toJson(itemsInCart));
    toaster.pop('info', curItem.name+" added successfully", "Click on cart to see the final amount.");
  }

  function checkDuplicate(list, PId){
    return list.filter(item => item.PId == PId).length > 0
  }

  function removeByPId(list, PId){
    return list.filter(item => item.PId != PId)
  }
}])
