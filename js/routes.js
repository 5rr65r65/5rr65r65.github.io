angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.buttonPage', {
    url: '/buttons',
    views: {
      'tab2': {
        templateUrl: 'templates/buttonPage.html',
        controller: 'buttonPageCtrl'
      }
    }
  })

  .state('tabsController.toggler', {
    url: '/toggler',
    views: {
      'tab3': {
        templateUrl: 'templates/toggler.html',
        controller: 'togglerCtrl'
      }
    }
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('gallery', {
    url: '/page6',
    templateUrl: 'templates/gallery.html',
    controller: 'galleryCtrl'
  })

$urlRouterProvider.otherwise('/page1/home')


});