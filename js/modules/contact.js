var klanWebContact = angular.module('klanWebContact', []);

klanWebContact.controller('ContactController',function($scope,$http){

	$scope.contact= {};
	$scope.success = 0;

	$scope.submitContactForm = function(){

		//send email thru server
		$scope.success = 2;
		
		$http({method : 'POST',
			 url : "http://alicansalor.com/klan/contact",
			 data : $scope.contact
			 }).success(function(data, status, headers, config){
			 	console.log("email sent");
			 	$scope.success=1;
				
			}).error(function(data, status, headers, config){
				$scope.success= -1;
			});

	}
	
});