
  angular.module('todoApp', 
    [
    'ngMaterial',
    'ui.router',
    'ngResource',
    'datatables',
    'datatables.bootstrap',
    'ngAnimate', 
    'ngSanitize', 
    'ui.bootstrap'])
  .controller('mainCtrl', function($resource) {
    var todoList = this;


  })
  .controller('search.ctrl', function(DTOptionsBuilder,DTColumnBuilder,$resource,$compile,$scope) {


  })
  .controller('TodoListController', function($resource) {
    var todoList = this;
    //$resource(url, [paramDefaults], [actions], options);    
    }).config(function($stateProvider, $urlRouterProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("index");  

        $stateProvider.state('index', {
          url: "/index",
          templateUrl: "/html/main.html",
          controller:'mainCtrl as todoList'
          })
          .state('index.show', {
          url: "/show",
          templateUrl: "/html/main1.html",
          controller:'search.ctrl as todoList'
          })
          .state('index1', {
          url: "/index1",
          templateUrl: "/html/main1.html",
          controller:'TodoListController as todoList'
          });
      });


