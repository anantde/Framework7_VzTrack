var angularModule = angular.module("VZTrackWebView");

angularModule.config(['$stateProvider',function($stateProvider){
	console.log("rout");

	  /*var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }*/

  $stateProvider
	.state('home', { 
      abstarct:true,
      templateUrl: 'VZ/Home/views/vz.home.tpl.html',
      controller: 'VZHomeController'
    }) 
    .state('home.start', {
     url:'/home',
      views: {
        'home-view' : {
          templateUrl: 'VZ/Home/views/vz.home.view.tpl.html',
        }
      }
    })  
    .state('about', { 
      abstarct:true,
      templateUrl: 'VZ/About/views/vz.about.tpl.html'
    }) 
    .state('about.view', {
     url:'/about',
      views: {
        'about-view' : {
          templateUrl: 'VZ/About/views/vz.about.view.tpl.html',
        }
      }
    }) 

    .state('signin', { 
      templateUrl: 'VZ/SignIn/views/vz.signin.tpl.html',
      controller: 'VZSignInController'
    }) 
    .state('signin.view', {
     url:'/signin',
      views: {
        'signin-view' : {
          templateUrl: 'VZ/SignIn/views/vz.signin.view.tpl.html',
        }
      }
    })   
   /* .state('about', { 
      abstarct:true,
      templateUrl: 'VZ/Home/views/vz.about.tpl.html'
    }) 
    .state('about.view', {
     url:'/about',
      views: {
        'about-view' : {
          templateUrl: 'VZ/Home/views/vz.about.view.tpl.html',
          viewIndex:2
        }
      }
    })  */

 /* $stateProvider.state(helloState);
  $stateProvider.state(aboutState);*/
}]);