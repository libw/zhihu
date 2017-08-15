var services=angular.module("services",[]);
services.factory("fuwu",function ($http,$q) {
    return {
        lunbo:(function () {
            var dd=$q.defer();
            $http({
                url:"js/app.php?url=http://news-at.zhihu.com/api/4/news/latest"
            }).then(function (data) {
                dd.resolve(data);
            });
            return dd.promise;
        })(),
        lists:(function () {
            var dd=$q.defer();
            $http({
                url:"js/app.php?url=http://news-at.zhihu.com/api/4/news/latest"
            }).then(function (data) {
                dd.resolve(data);
            });
            return dd.promise;
        })(),
        lanmu:(function () {
            var dd=$q.defer();
            $http({
                url:"js/app.php?url=http://news-at.zhihu.com/api/4/themes"
            }).then(function (data) {
                dd.resolve(data);
            });
            return dd.promise;
        })(),
        newslist:function (id) {
            var dd=$q.defer();
            $http({
                url:"js/app.php?url=http://news-at.zhihu.com/api/4/theme/"+id
            }).then(function (data) {
                dd.resolve(data);
            });
            return dd.promise;
        },
        newsshow:function (id) {
            var dd=$q.defer();
            $http({
                url:"js/app.php?url=http://news-at.zhihu.com/api/4/news/"+id
            }).then(function (data) {
                dd.resolve(data);
            });
            return dd.promise;
        }
    }
});
