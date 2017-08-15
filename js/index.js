window.onload=function () {
    var left=document.querySelector(".header .headleft");
    var zuolan=document.querySelector(".con-left");
    var zhe=document.querySelector(".zhe");
    var daohang=document.querySelector(".con-left ul");
    var headright=document.querySelector(".headright");
    left.onclick=function () {
        zuolan.style.left="0";
        zhe.style.display="block";
    };
    zhe.onclick=function () {
        zuolan.style.left="-6.3rem";
        zhe.style.display="none";
    };
    daohang.onclick=function () {
        zuolan.style.left="-6.3rem";
        zhe.style.display="none";
    }
};
var zhihu=angular.module("zhihu",["ngRoute","ngSanitize","services","directive","contro"]);
zhihu.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"tap/lists.html",
        controller:"list"
    })
    .when("/newlist/:id",{
        templateUrl:"tap/newslists.html",
        controller:"newslist"
    })
    .when("/show/:id",{
            templateUrl:"tap/show.html",
            controller:"show"
    })

});


