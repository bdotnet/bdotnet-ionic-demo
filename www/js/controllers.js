/// <reference path="../../typings/angularjs/angular.d.ts"/>
angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) { })
  
   .controller('FormsCtrl', function ($scope) {
     $scope.viewModel = {};
     $scope.viewModel.isSubscribed = false;
    })

  .controller('ListCtrl', function ($scope,$ionicActionSheet,$timeout) {
  $scope.viewModel = {};
  $scope.viewModel.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 }];
  $scope.viewModel.showDelete = false;
  $scope.viewModel.showReorder = false;

  $scope.showDeleteButton = function () {
    $scope.viewModel.showDelete = !$scope.viewModel.showDelete;
  };

  $scope.showReorderButton = function () {
    $scope.viewModel.showReorder = !$scope.viewModel.showReorder;
  };

  $scope.moveItem = function (item, fromIndex, toIndex) {
    $scope.viewModel.items.splice(fromIndex, 1);
    $scope.viewModel.items.splice(toIndex, 0, item);
  };
  
  // Triggered on a button click, or some other target
 $scope.showActionSheet = function() {
   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
      {text : 'Reorder'},
      {text : 'Save'},
      {text : 'Share'}
     ],
     destructiveText: 'Delete',
     titleText: 'Sample Action Sheet',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
            hideSheet();
        },
     buttonClicked: function(index) {
       var clickedButton = "Cancel";
       switch (index)
       {
        case 0 :
        clickedButton = "Reorder";
        break;
        case 1 :
        clickedButton = "Save";
        break;
        case 2 :
        clickedButton = "Share";
        break;
        case 3 :
        clickedButton = "Delete";
        break;
       }
       alert ("You just clicked : " + clickedButton);
     },
     destructiveButtonClicked : function(){
       alert("Destructive Button Clicked");
       return true;
     }
   });
 };
})

  .controller('ChatsCtrl', function ($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function (chat) {
    Chats.remove(chat);
  };
})

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
 .controller('RefreshCtrl', function ($scope) {
   $scope.viewModel = {};
   $scope.viewModel.items=[
     {"id":0},
     {"id":1},
     {"id":2},
     {"id":3},
   ];
  $scope.RefreshData = function(){
    var randomNumber = Math.floor(Math.random()*100);
    $scope.viewModel.items.push({"id":randomNumber});
    $scope.$broadcast('scroll.refreshComplete');
  };
})
  .controller('AccountCtrl', function ($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
