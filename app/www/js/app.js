/**
 * Created by qingyun on 16/10/27.
 */
angular.module('starter',['ionic','starter.controllers','starter.services'])
.run(function ($ionicPlatform,$rootScope) {

    $ionicPlatform.ready(function () {

      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
    $rootScope.$on('hello',function (evt,msg) {
        console.log(msg);
        $rootScope.$broadcast('hi','2');
    })
})

.config(function ($stateProvider,$urlRouterProvider) {


    $stateProvider


      .state('tab',{
        url:'/tab',
        abstract:true,
        templateUrl:'templates/tabs.html'
    })
      .state('tab.dash',{
        url:'/dash',
        views:{
            'tab-dash':{
                templateUrl:'templates/tab-dash.html',
                controller:'DashCtrl'
            }
        }
    })
      .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
        .state('tab.chat-detail',{
            url:'/chats/:chatId',
            views:{
                'tab-chats':{
                    templateUrl:'templates/chat-detail.html',
                    controller:'ChatDetailCtrl'
                }
            }
        })
        .state('tab.account',{
            url:'/account',
            views:{
                'tab-account':{
                    templateUrl:'templates/tab-account.html',
                    controller:'AccountCtrl'
                }
            }
        });
    $urlRouterProvider.otherwise('/tab/dash');
});
