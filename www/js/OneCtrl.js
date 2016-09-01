angular.module('app.OneCtrl', ['ionic', 'ionic.native'])
.controller('OneCtrl', function($scope, $cordovaDeeplinks, $state, $ionicPlatform){
    $scope.func = function(appId) {
          if (window.device && navigator.PGUtils) {
              navigator.PGUtils.openApp(appId, function(status){
                // if(status === 'OK') {
                //     alert('Success!');
                // } else {
                //     alert('There is no such app...');
                // }
              },
              function(error) {
                  alert('Error!');
                  console.log(error);
              });
          }
      };
})
