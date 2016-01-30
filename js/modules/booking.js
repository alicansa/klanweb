var klanWebBooking = angular.module('klanWebBooking', []);

klanWebBooking.controller('BookingController',function($scope,$http){

	 $scope.booking= {};
	 $scope.success = 0;

	$scope.submitBookingForm = function(){
		console.log($scope.booking);
		$scope.success = 2;
			//send email thru server
		$http({method : 'POST',
			 url : "http://alicansalor.com/klan/booking",
			 data : $scope.booking
			 }).success(function(data, status, headers, config){
			 	console.log("email sent");
			 	$scope.success = 1;
				
			}).error(function(data, status, headers, config){
				$scope.success = -1;
			});


	}
	
});