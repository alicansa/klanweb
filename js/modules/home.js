var klanWebHome = angular.module('klanWebHomeModule', []);

klanWebHome.controller('HomeController', function($scope, $state) {

});


klanWebHome.directive("navigation", function () {
    return {
        restrict: 'A',
        scope: {
            navigation: '@'
        },
        link: function (scope, element) {

            newWidth = $('#klanOpenImg').width();
            $('#klanOpenNav').css('margin-left',-1*newWidth/2);
            $('#klanOpenImg').css('margin-left',-1*newWidth/2);
           
           $(window).resize(function(){

                console.log("resize");
                newWidth = $('#klanOpenNav').width();
                console.log(newWidth);
                $('#klanOpenNav').css('margin-left',-1*newWidth/2);
                $('#klanOpenImg').css('margin-left',-1*newWidth/2);
           });

            element.on('mousemove', function(e) {
                
            	var img = $('#klanOpenNav')[0];
            	var canvas = $('<canvas/>')[0];
            	canvas.width = img.width;
				canvas.height = img.height;
				canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
            	
            	var parentOffset = $('#klanOpenNav').offset(); 
                console.log(parentOffset);
   				var relX = e.pageX - parentOffset.left;
   				var relY = e.pageY - parentOffset.top;

            	var pixelData = canvas.getContext('2d').getImageData(relX, relY, 1, 1).data;
                
            	//determine segment 

            	if (pixelData[0] < 100 && pixelData[1] > 200 && pixelData[2] < 100){ //left
            		$('.roster').addClass("appear");
                    // $('.artist-overlay').addClass("appear");

            		//remove other segments' appear class
            		$('.contact').removeClass("appear");
            		$('.news').removeClass("appear");
            		$('.blog').removeClass("appear");

            		//add disappear class to other segments
            		$('.contact').addClass("disappear");
            		$('.news').addClass("disappear");
            		$('.blog').addClass("disappear");





            	}else if (pixelData[0] < 100 && pixelData[1] > 200 && pixelData[2] > 200){ //bottom
            		
            		$('.contact').addClass("appear");

            		//remove other segments' appear class
            		$('.roster').removeClass("appear");
            		$('.news').removeClass("appear");
            		$('.blog').removeClass("appear");
                    // $('.artist-overlay').removeClass("appear");
            		//add disappear class to other segments
            		$('.roster').addClass("disappear");
            		$('.news').addClass("disappear");
            		$('.blog').addClass("disappear");
                    // $('.artist-overlay').addClass("disappear");

            	}else if (pixelData[0] > 200 && pixelData[1] < 100 && pixelData[2] > 200){ //right
            		
            		$('.blog').addClass("appear");


            		//remove other segments' appear class
            		$('.roster').removeClass("appear");
            		$('.news').removeClass("appear");
            		$('.contact').removeClass("appear");
                    // $('.artist-overlay').removeClass("appear");
            		//add disappear class to other segments
            		$('.roster').addClass("disappear");
            		$('.news').addClass("disappear");
            		$('.contact').addClass("disappear");
                    // $('.artist-overlay').addClass("disappear");

            	}else if (pixelData[0] > 200 && pixelData[1] < 100 && pixelData[2]< 100){ //top
            		
            		$('.news').addClass("appear");


            		//remove other segments' appear class
            		$('.roster').removeClass("appear");
            		$('.contact').removeClass("appear");
            		$('.blog').removeClass("appear");
                    // $('.artist-overlay').removeClass("appear");
            		//add disappear class to other segments
            		$('.roster').addClass("disappear");
            		$('.contact').addClass("disappear");
            		$('.blog').addClass("disappear");
                    // $('.artist-overlay').addClass("disappear");

            	}


   				
            });
        }
    };
})