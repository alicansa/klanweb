var klanWebHeader = angular.module('klanWebHeader', []);


klanWebHeader.directive("header", function ($window) {
    return {
        scope: {
            activeTab: '@activeTab'
        },

        link: function(scope, element, attrs) {

            function setHeader(tabName){
                //remove all
                angular.element("#main").removeClass("active");
                angular.element("#news").removeClass("active");
                angular.element("#roster").removeClass("active");
                angular.element("#kaanduzarat").removeClass("active");
                angular.element("#jonnyrock").removeClass("active");
                angular.element("#keremakdag").removeClass("active");
                angular.element("#ponza").removeClass("active");
                angular.element("#contact").removeClass("active");

                //add
                angular.element("#" + tabName).addClass("active");

            }

            if(scope.activeTab === "main"){
                setHeader("main");
            }else if(scope.activeTab === "news"){
                setHeader("news");
            }else if(scope.activeTab === "roster"){
                setHeader("roster");
            }else if(scope.activeTab === "contact"){
                setHeader("contact");
            }else if(scope.activeTab === "kaanduzarat"){
                setHeader("kaanduzarat");
            }else if(scope.activeTab === "jonnyrock"){
                setHeader("jonnyrock");
            }else if(scope.activeTab === "keremakdag"){
                setHeader("keremakdag");
            }else if(scope.activeTab === "ponza"){
                setHeader("ponza");
            }


            


        },
        templateUrl : 'partials/header.html'
    };
});