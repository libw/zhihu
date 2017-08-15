var directive=angular.module("directive",[]);
directive.directive('mybanner', function () {
    return {
        data:"=",
        templateUrl:"tap/lunbo.html",
        //controller:"indexlun",
        link: function(scope, element, attr) {
            // if (scope.$last === true) {
            //     console.log(element);
            //
            //     TouchSlide({
            //         slideCell:"#focus",
            //         titCell:".hd ul",
            //         mainCell:".bd ul",
            //         effect:"left",
            //         autoPlay:true,
            //         autoPage:true,
            //         switchLoad:"_src"
            //     });
            // }
        }
    }
});
