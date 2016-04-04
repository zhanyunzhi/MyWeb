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
                "snippet" : "Fast just got faster with Nexus S."},
            {"name" : "Motorola XOOM with Wi-Fi",
                "snippet" : "The Next,Next Generation tablet."},
            {"name" : "MOTOROLA XOOM",
                "snippet" : "The Next,Next Generation tablet."}
        ];
}
);