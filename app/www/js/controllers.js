/**
 * Created by qingyun on 16/10/27.
 */
angular.module('starter.controllers',[])

.controller('DashCtrl',function ($scope) {

})
    .controller('ChatsCtrl',function ($scope,Chats) {

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
    $scope.$on('hi',function (evt,msg) {
        console.log(msg);
    });

})
.controller('ChatDetailCtrl',function ($scope,$scopeParams,Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
    $scope.emitSome = function () {
        $scope.$emit('hello','1');
    }

})
  .controller('AccountCtrl',function ($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
