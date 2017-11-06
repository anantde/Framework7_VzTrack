angular.module('VZTrackWebView')
.controller('VZSignInController',['$scope','$rootScope','UserSignInServices', '$state',function($scope,$rootScope,UserSignInServices, $state){
console.log('initialise SignIn controller');

$scope.login=function(){
		console.log("Login function called...!");
		$state.go('list', {});
	}


$scope.jsonForSigninUser=function(){
console.log("signin 2");
		/*var userdata={
			'mobileno':'27'+$scope.signinUser.mobileno,
			'password':$scope.signinUser.password
		}
		return angular.toJson(userdata);*/

		var userdata={
		"device_os":"AND",
		"user_dev_id":"ea70a6af133a59fb",
		"user_gcm_id":"eBlcHujaEUk:APA91bGPTsBlTj4uzghJsdELPcUwfKQko1ZiBzSKMQTlZcl699pdiEnGzqdCZ1m9EGQPJHsYtst8jBNlITRl-s9383thdyC8rTBGEfySsT-3XW0huOZrXIdf8Vlt6ig-o_lxXco8sTUu",
		"user_name":"R152F99",
		"user_password":"12345"}
		return angular.toJson(userdata);
	}



	$scope.userSignin=function(){
	console.log("signin 1");

		UserSignInServices.SigninUser($scope.jsonForSigninUser());
	}


var cleanupEventSigninDone = $rootScope.$on("SigninDone", function(event, message){
	    console.log("signin 5.1");
	   // $log.debug(message);
	    $scope.handleSigninDoneResponse(message);      
  	});

var cleanupEventSigninNotDone = $rootScope.$on("SigninNotDone", function(event, message){
	    console.log('server problem');
	  console.log("signin 5.2");
	    /*ionicToast.show('server problem','bottom',false,1800);*/
	    alert("server problem");
	});


	$scope.handleSigninDoneResponse=function(data){
		console.log("signin 6");
		console.log("signinuser success");
		console.log(data);
		/*if(data){
			if(data.code=='SUCCESS'){
				$rootScope.signInUserData=data.user;
				  if($rootScope.signInUserData.email){
			        if($rootScope.signInUserData.email=='orderzapp@giantleapsystems.com'){
			            $rootScope.signInUserData.email='';
			        }
			      }
				$localstorage.setObject('signInUserData',$rootScope.signInUserData);
				if($scope.$state.current.name=='orderstatus.view'){
					OrderHistoryPageServices.GetOrderStatus();
				}else if($scope.$state.current.name=='orderhistory.view'){
					OrderHistoryPageServices.GetOrderHistory();
				}else if($scope.$state.current.name=='paymentoption.view'){
					if($rootScope.signInUserData.countrycode=='27'){
						UserSignUpServices.PaymentOption($scope.jsonForPaymentOption());
					}
				}
				ionicToast.show(data.message,'bottom',false,1800);
		    	$scope.signInModal.hide();
    			$rootScope.issignin=false;
			}else{
				if(data.code=='AU003'){
					$scope.verifyError=true;
					if($scope.signinUser.countryCode){
						if($scope.signinUser.countryCode!=27){
							$rootScope.userVerifyData=$scope.signinUser;
							$rootScope.userVerifyData.email=data.email;
							$localstorage.setObject('userVerifyData',$rootScope.userVerifyData);
						}
					}else{
						$rootScope.userVerifyData=$scope.signinUser;
						$localstorage.setObject('userVerifyData',$rootScope.userVerifyData);
					}
				}
				ionicToast.show(data.message,'bottom',false,1800);
			}
		}*/
		
	}


$scope.$on('$destroy', function(event, message) {
		cleanupEventSigninDone();
    	cleanupEventSigninNotDone();
    	// $rootScope.hideSpinner();
    });
}]);