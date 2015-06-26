/// <reference path="../../typings/cordova/cordova.d.ts"/>
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.js', {
    url: '/js',
    views: {
      'tab-js': {
        templateUrl: 'templates/tab-js.html'
      }
    }
  })
  
   .state('tab.refresh', {
    url: '/refresh',
    views: {
      'tab-js': {
        templateUrl: 'templates/tab-refresher.html',
        controller: 'RefreshCtrl'
      }
    }
  })
  
   .state('tab.list', {
    url: '/list',
    views: {
      'tab-js': {
        templateUrl: 'templates/tab-list.html',
        controller: 'ListCtrl'
      }
    }
  })
  
   .state('tab.header', {
    url: '/header',
    views: {
      'tab-js': {
        templateUrl: 'templates/tab-header.html',
        controller: 'ListCtrl'
      }
    }
  })
  
  
  .state('tab.form', {
    url: '/form',
    views: {
      'tab-js': {
        templateUrl: 'templates/tab-form.html'
      }
    }
  })
  
  .state('tab.slidebox', {
    url: '/slidebox',
    views: {
      'tab-js': {
        templateUrl: 'templates/tab-slidebox.html'
      }
    }
  })

  .state('tab.css', {
      url: '/css',
      views: {
        'tab-css': {
          templateUrl: 'templates/tab-css.html'
        }
      }
    })
    
    .state('tab.forms', {
      url: '/forms',
      views: {
        'tab-css': {
          templateUrl: 'templates/tab-forms.html'
        }
      }
    })
    
    .state('tab.cards', {
      url: '/cards',
      views: {
        'tab-css': {
          templateUrl: 'templates/tab-cards.html'
        }
      }
    })
    
    .state('tab.button', {
      url: '/button',
      views: {
        'tab-css': {
          templateUrl: 'templates/tab-button.html'
        }
      }
    })
    
    .state('tab.grid', {
      url: '/grid',
      views: {
        'tab-css': {
          templateUrl: 'templates/tab-grid.html',
          controller : 'GridsCtrl'
        }
      }
    })
    
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.services', {
    url: '/services',
    views: {
      'tab-services': {
        templateUrl: 'templates/tab-services.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/js');

});
