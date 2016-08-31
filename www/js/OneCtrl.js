angular.module('app.OneCtrl', ['ionic', 'ionic.native'])
.controller('OneCtrl', function($scope, $cordovaDeeplinks, $state, $ionicPlatform){
    $scope.func = function(match) {
          $cordovaDeeplinks.route({'/account':{ target:'tab-account', parent:'tab.account' }}).subscribe(function(match) {
              console.log('Does it work?', $cordovaDeeplinks.subscribe);
              alert('Success!')
              $timeout(function() {
                  $state.go(match.$route.parent, match.$args);
                  $timeout(function() {
                      $state.go(match.$route.target, match.$args);
                      alert('Success!');
                  }, 800);
              }, 100);
          }, function(nomatch) {
            alert('Something is wrong...');
            console.warn('No match', nomatch);
          });
          console.log('It works!');
      };
})
