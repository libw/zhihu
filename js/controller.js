var contro=angular.module("contro",["services","directive"]);
contro.controller("indexlun",function ($scope,fuwu) {
    fuwu.lunbo.then(function (data) {
        $scope.data=data.data.top_stories;
    })
});
contro.controller("list",function ($scope,fuwu) {
    fuwu.lists.then(function (data) {
        $scope.data=data.data.stories;
        fuwu.lunbo.then(function (data) {
            $scope.datalun=data.data.top_stories;
            $scope.datalun1=$scope.datalun[0];
        })
    })
});
contro.controller("lanmu",function ($scope,$rootScope,fuwu){
    fuwu.lanmu.then(function (data) {
        $scope.data=data.data.others;
    })
});
contro.controller("newslist",function ($scope,fuwu,$routeParams) {
    $scope.id=$routeParams.id;
    fuwu.newslist($scope.id).then(function (data) {
        $scope.data=data.data.stories;
        $scope.data1=data.data.background;
        $scope.data2=data.data.description;
        $scope.data3=data.data.editors;
        $scope.data4=data.data.name;
        console.log(data)

    })
});
contro.controller("show",function ($scope,fuwu,$routeParams) {
    $scope.id=$routeParams.id;
    fuwu.newsshow($scope.id).then(function (data) {
        $scope.data=data.data;
    })
});

