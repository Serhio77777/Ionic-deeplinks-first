// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'ionic.native', 'app.OneCtrl'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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
});
// .run(['$ionicPlatform', '$cordovaDeeplinks', '$state', function($ionicPlatform, $cordovaDeeplinks, $state) {
//   $ionicPlatform.ready(function() {
//     // Note: route's first argument can take any kind of object as its data,
//     // and will send along the matching object if the route matches the deeplink
//     $cordovaDeeplinks.route({
//       '/account': { target:'account' }
//     }).subscribe(function(match) {
//       alert('Success!');
//       // One of our routes matched, we will quickly navigate to our parent
//       // view to give the user a natural back button flow
//     }, function(nomatch) {
//       alert('Something wrong...');
//       console.warn('No match', nomatch);
//     });
//   });
// }]);
