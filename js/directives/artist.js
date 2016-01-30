var klanWebArtist = angular.module('klanWebArtist', []);

// klanWebArtist.controller('artistController',['',function($scope){




// }]);

klanWebArtist.directive("artist", function () {
    return {
    	restrict : "E",
        scope: {
            artistName: "@artistName",
            artistBio: "@artistBio",
            artistImg : "@artistImg",
            moreInfo : "@moreInfo",
            rider : "@rider"
        },
        templateUrl : 'partials/artist.html'
    };
});