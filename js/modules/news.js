var klanWebNews = angular.module('klanWebNews', []);

klanWebNews.controller('NewsController',function($scope,$http,$sce){

	$scope.loading = true;


	//fetch news from database with ajax request
	$http({method : 'POST',
			 url : "http://alicansalor.com/klan/news",
			 data : {}
			 }).success(function(data, status, headers, config){

				 //organize the data
				 // if there is one med priority news -> push it to high
				 // if there is odd number of med priority news -> push one to high
				 // 
				 //
				 //
				 var urlExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
				 // data = $sce.trustAsHtml(data);
				 if (data.newsMedPriority.length == 1 || data.newsMedPriority.length % 2 > 0){
					data.newsHighPriority.push(data.newsMedPriority[0]);
				 	data.newsMedPriority.splice(0,1);
				 }

				  //summarize content
				  //process links

				 for (var i=0;i<data.newsHighPriority.length;i++){
				 	data.newsHighPriority[i].summary = data.newsHighPriority[i].content.substr(0,300) + "...";
				 	contentUrls = data.newsHighPriority[i].content.match(urlExp);
				 	//find index of urls and replace these with <a href="...">...</a>
				 	if (contentUrls != null){
					 	for (var k=0;k<contentUrls.length;k++){
					 		var startIndex = data.newsHighPriority[i].content.indexOf(contentUrls[k]);
					 		data.newsHighPriority[i].content =  data.newsHighPriority[i].content.substring(0,startIndex-1) + "<a href=\"" + contentUrls[k] + "\" target=\"_blank\">" + contentUrls[k] + "</a>" + data.newsHighPriority[i].content.substring(startIndex + contentUrls[k].length,data.newsHighPriority[i].content.length);
					 	}
					 	console.log(contentUrls);
					 }

					 data.newsHighPriority[i].content = $sce.trustAsHtml(data.newsHighPriority[i].content);
				 	
				 }
				 for (var i=0;i<data.newsMedPriority.length;i++){
				 	contentUrls = data.newsMedPriority[i].content.match(urlExp);
				 	console.log(contentUrls);
				 	data.newsMedPriority[i].summary = data.newsMedPriority[i].content.substr(0,100) + "...";
				 }
				 for (var i=0;i<data.newsLowPriority.length;i++){

				 }

				 //put med priority into two columns
				var cols = [];
				var rows = [];
				var count=0;
				 for (var i=0;i<data.newsMedPriority.length;i++){
				 	count++;
				 	cols.push(data.newsMedPriority[i]);

				 	if (count == 2){
				 		rows.push(cols);
				 		cols = [];
				 		count = 0;
				 	}
				 }
				 data.newsMedPriority = rows;
				 $scope.news = data;
				 console.log(data);
				 $scope.loading = false;


			}).error(function(data, status, headers, config){
				$scope.loading = false;
				alert("something went wrong with ajax call")
			});

	$scope.facebookShare = function(img_src,caption,summary,news_id){
		console.log(img_src + '\n' + caption + '\n' + summary + '\n' + news_id);
		FB.ui({
			method: 'share',
			name: 'Klan News',
			picture : img_src,
			href: ' http://www.klanklan.com/#/news#' + news_id,
			caption: caption,
			description: summary,
			message: ''
		});
	}

});

klanWebNews.directive("newsItem", function () {
    return{
		
		link : function (scope,element,attrs) {
			
		},
		templateUrl : 'partials/news_item.html'
	};
});

klanWebNews.directive("datesItem", function () {
    return{
		
		link : function (scope,element,attrs) {
			
		},
		templateUrl : 'partials/dates_item.html'
	};
});


