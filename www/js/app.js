// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'ionic.native', 'app.OneCtrl'])
.run(['$ionicPlatform', '$cordovaDeeplinks', '$state', '$timeout', function($ionicPlatform, $cordovaDeeplinks, $state, $timeout) {
  $ionicPlatform.ready(function() {
    // $cordovaDeeplinks.route({'/account':{ target:'tab.account', parent:'tab-account' }}).subscribe(function(match) {
    //     alert('New success!');
    //     $timeout(function() {
    //         $state.go(match.$route.parent, match.$args);
    //         alert('It almost works!!!');
    //         // Finally, we will navigate to the deeplink page. Now the user has
    //         // the 'product' view visibile, and the back button goes back to the
    //         // 'products' view.
    //         $timeout(function() {
    //               $state.go(match.$route.target, match.$args);
    //               alert('It works!!!');
    //         }, 800);
    //     }, 100); // Timeouts can be tweaked to customize the feel of the deeplink
    //     // One of our routes matched, we will quickly navigate to our parent
    //     // view to give the user a natural back button flow
    // }, function(nomatch) {
    //     alert('You are wrong...');
    //     console.warn('No match', nomatch);
    // })
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.view', {
    url: '/view',
    views: {
      'tab-view': {
        templateUrl: 'templates/tab-view.html',
        controller: 'OneCtrl'
      }
    }
  })
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'OneCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/view');
});
