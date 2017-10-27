var angularModule = angular.module('VZTrackWebView',["ui.router"]);
var app;
angularModule.config(['$stateProvider',function($stateProvider){
// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
 app= new Framework7({pushState: true,});

 /*var mainView = app.addView('home.start', {
  dynamicNavbar: true
})
var anotherView = app.addView('about.view');*/
/* app = new Framework7({
  root: '#app',
  theme: theme,
  precompileTemplates: true,
  template7Pages:true,
  pushState : true,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    }
  }
});*/

}]);

angularModule.controller('VZMainController',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
  $scope.msg = "hello all";
  console.log($scope.msg);
 // alert(Android.showToast());
 // var view1=app.addView('home.start', {})
  $state.go('home.start',{});
  //console.log("os::::::::"+app.device.os);

  


}

]);

/* <html ng-app="demo"> 
<head>

  <title>Framework7</title>
  

  <!--  <script type="text/javascript" src="assets/js/jquery.min.js"></script> -->
  <!-- <link rel="stylesheet" href="../assets/app.css"> -->
</head>
<body ng-controller="VZMainController" >
    
  <script type="text/javascript" src="../assets/js/angular.min.js"></script>
  <script type="text/javascript" src="../assets/js/angular-route.min.js"></script>
    <script src="../VZ/app.js"></script>
<!--  <script src="../VZ/route.js"></script> -->
  <h1 id="test"></h1>
</body>*/