var klanWebIndex = angular.module('klanWebIndexModule', ['ui.router','klanWebHomeModule','klanWebIntroModule',
                                                          'klanWebArtistsModule','klanWebHeader','klanWebArtist',
                                                          'klanWebNews','klanWebContact','klanWebBooking']);



klanWebIndex.config(function($stateProvider) {

  $stateProvider
    .state('intro',{
    url: '/intro',
    templateUrl: 'intro.html',
    controller : 'IntroController',
    module : 'public'
  })
  .state('home',{
    url: '/home',
    templateUrl: 'home.html',
    controller : 'HomeController',
    module : 'public'
  })
  .state('news',{
    url: '/news',
    templateUrl: 'news.html',
    controller : 'NewsController',
    module : 'public'
  })
  .state('jonnyRock',{
    url: '/jonnyrock',
    templateUrl: 'jonnyrock.html',
    module : 'public'
  })
  .state('keremAkdag',{
    url: '/keremakdag',
    templateUrl: 'keremakdag.html',
    module : 'public'
  })
  .state('kaanDuzarat',{
    url: '/kaanduzarat',
    templateUrl: 'kaanduzarat.html',
    module : 'public'
  })
  .state('ponza',{
    url: '/ponza',
    templateUrl: 'ponza.html',
    module : 'public'
  })
  .state('roster',{
    url: '/roster',
    templateUrl: 'roster.html',
    module : 'public'
  })
  .state('booking',{
    url: '/booking',
    templateUrl: 'booking.html',
    controller : 'BookingController',
    module : 'public'
  })
  .state('contact',{
    url: '/contact',
    templateUrl: 'contact.html',
     controller : 'ContactController',
    module : 'public'
  });

});

klanWebIndex.run(function($state,$rootScope,$location, $anchorScroll, $stateParams){
	
	$state.go('intro');
	
});


klanWebIndex.directive("alicansalorBanner", function () {
    return {
      restrict : "E",
      templateUrl : 'partials/alican_salor_banner.html'
    };
});
