angular.module('app.OneCtrl', ['ionic', 'ionic.native'])
.controller('OneCtrl', function($scope, $cordovaDeeplinks, $state){
    $scope.func = function() {
      console.log('Does it work?');
      $cordovaDeeplinks.route({'/account':{ parent:'tab' }}).subscribe(function(match) {
        alert('Success!');
        // $state.go(match.$route.parent, match.$args);

        // One of our routes matched, we will quickly navigate to our parent
        // view to give the user a natural back button flow
      }, function(nomatch) {
        alert('Something wrong...');
        console.warn('No match', nomatch);
      });
      console.log('It works!');
    }
})
