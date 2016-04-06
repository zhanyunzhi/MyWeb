/**
 * Created by zhan on 2016/4/4.
 */
angular.module('phonecat', ['ngRoute']).
    config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/phones', {templateUrl:'phone-list.html', controller: PhoneListCtrl});
        $routeProvider.when('/phones/:phoneId', {templateUrl:'phone-detail.html', controller: PhoneDetailCtrl});
        $routeProvider.otherwise({redirectTo:'/'});
    }]);
