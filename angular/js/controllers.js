/**
 * Created by zhan on 2016/4/3.
 */
/*function PhoneListCtrl($scope){
    $scope.phones = [
        {"name" : "Nexus S","snippet" : "Fast just got faster with Nexus S."},
        {"name" : "Motorola XOOM with Wi-Fi","snippet" : "The Next,Next Generation tablet."},
        {"name" : "MOTOROLA XOOM","snippet" : "The Next,Next Generation tablet."}
    ];
}*/
angular.module('ngApp',[]).controller('PhoneListCtrl',
    function($scope){
        $scope.phones = [
            {"name" : "Nexus S",
                "snippet" : "Fast just got faster with Nexus S.",
                "age" : 0},
            {"name" : "Motorola XOOM with Wi-Fi",
                "snippet" : "The Next,Next Generation tablet.",
                "age" : 1},
            {"name" : "MOTOROLA XOOM",
                "snippet" : "The Next,Next Generation tablet.",
                "age" : 2}
        ];

        $scope.orderProp = "age";
    }
);
angular.module("ngApp2",[]).controller("PhoneListCtrl2",
    function($scope, $http){
        //url是相对于我们的html文件的
        $http.get("data/phone.json").success(function(data){
            $scope.phones = data.splice(0, 5);
        });
        $scope.orderProp2 = "age";
        $scope.imageUrl = "http://www.yanziw.com/templets/default/images/left_phone.gif";
    }
);
angular.module('phonecat',[]).controller('PhoneListCtrl',
    function($scope, $http){
        //url是相对于我们的html文件的
        $http.get("data/phone.json").success(function(data){
            $scope.phones = data.splice(0, 5);
        });
        $scope.orderProp2 = "age";
        $scope.imageUrl = "http://www.yanziw.com/templets/default/images/left_phone.gif";
    }
);
angular.module("phonecat",[]).controller("PhoneDetailCtrl",
    function($scope, $routeParams){
        $scope.phoneId = $routeParams.phoneId;
    }
);