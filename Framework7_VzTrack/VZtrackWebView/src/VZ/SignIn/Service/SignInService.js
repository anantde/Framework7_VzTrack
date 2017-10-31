angular.module('VZTrackWebView')
.factory('UserSignInServices', [
  '$rootScope',
  '$resource',
  '$http',
  '$state',
  '$log',
  function ($rootScope, $resource, $http, $state, $log) {
   var SignInServices = {
   	      SigninUser: $resource('/VZ-Test/api/userLogin',{}, {GetSigninUser :{method: 'POST',params:{data:'@userdata'}}})
    };
    var signin = {};
    signin.isLoggedIn = false;
    signin.currentUser = null;
    signin.SigninUser = function (userdata) {
    	console.log("signin 3"+userdata);
      SignInServices.SigninUser.GetSigninUser({userdata:userdata},function (success) {
      	console.log("signin 4.1");
        $log.debug(success);
        $rootScope.$broadcast('SigninDone', success);
      }, function (error) {
      	console.log("signin 4.2");
        $log.debug(error);
        $rootScope.$broadcast('SigninNotDone', error.status);
      });
    };
   return signin;
  }
]);

