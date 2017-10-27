angular.module('VZTrackWebView')
.controller('VZHomeController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
console.log('initialise home controller');

$scope.goToAbout = function(){
    console.log("go to about");
   // var view2 = myApp.addView('about.view');
    $state.transitionTo('about.view');
  }

$scope.goToSignin = function(){
	 console.log("go to signin");
   // var view2 = myApp.addView('about.view');
    $state.transitionTo('signin.view');
}

}]);