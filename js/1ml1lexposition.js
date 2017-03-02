angular.module('1ml1lexposition', ['angularGrid'])
    .service('imageService',['$q','$http',function($q,$http){
        this.loadImages = function(){
            return $http.get("https://1million1love.org/memberapi/index.php/apis/memberdata?key=1Mi2ll8ion91L10ov12e");
        };
    }])
    .controller('1ml1lexposition', ['$scope','$http','imageService', 'angularGridInstance', function ($scope,$http,imageService,angularGridInstance) {
       imageService.loadImages().then(function(data){
            data.data.res_object.forEach(function(obj){
                var desc = obj.member_title;
                    // width = desc.match(/width="(.*?)"/)[1],
                    // height = desc.match(/height="(.*?)"/)[1];
                
                //obj.actualHeight  = 240;
                //obj.actualWidth = 240;
            });
           $scope.pics = data.data.res_object;           
        });;
    }]);