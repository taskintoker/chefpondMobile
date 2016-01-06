angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $q, $http, $rootScope, $location, $window, $timeout, $state) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });

    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        $rootScope.error = null;
        console.log("Route change!!!", $location.path());
        var path = $location.path();


        console.log("App Loaded!!!");
    });

    $rootScope.goTo = function(route) {
        $state.go(route);
    };


    $rootScope.goBack = function() {
        window.history.back();
    }

})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive


    // Each tab has its own nav history stack:

        .state('login', {
        url: '/login',
        cache: false,
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })


    .state('register', {
        url: '/register',
        cache: false,
        templateUrl: 'templates/register.html',
        controller: 'loginCtrl'
    })

    .state('modal-detail-info', {
        url: '/modal-detail-info',
        templateUrl: 'templates/modal-detail-info.html',
    })


    .state('modal-detail-collection', {
        url: '/modal-detail-collection',
        templateUrl: 'templates/modal-detail-collection.html',
    })


    .state('taste', {
        url: '/taste',
        templateUrl: 'templates/taste.html',
        controller: 'tasteCtrl'

    })

    .state('taste-detail', {
        url: '/taste/:id',
        templateUrl: 'templates/taste-detail.html',
        controller: 'tasteCtrl'

    })

    .state('writer', {
        url: '/writer',
        templateUrl: 'templates/writer.html',
        controller: 'writerCtrl'

    })


    .state('writer-detail', {
        url: '/writer/:id',
        templateUrl: 'templates/writer-detail.html',
        controller: 'writerCtrl'

    })

    .state('product', {
        url: '/product',
        templateUrl: 'templates/product.html',
        controller: 'productCtrl'

    })

    .state('product-detail', {
        url: '/product/:id',
        templateUrl: 'templates/product-detail.html',
        controller: 'productCtrl'

    })


    .state('gallery', {
        url: '/gallery',
        templateUrl: 'templates/gallery.html',
        controller: 'galleryCtrl'

    })

    .state('gallery-detail', {
        url: '/gallery/:id',
        templateUrl: 'templates/gallery-detail.html',
        controller: 'galleryCtrl'

    })




    .state('four-category', {
        url: '/four-category',
        cache: false,
        templateUrl: 'templates/four-category.html'

    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/register');

});
