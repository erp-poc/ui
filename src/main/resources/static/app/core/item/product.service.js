(function() {
    'use strict';

    angular.module('hello').factory('productsService', function($rootScope, $http, $location, $route) {

    	
    	function list() {
            return $http({
                method: 'GET',
                url: 'core/products/'
            });
    	}

        return {
        	list: list
        };
    });

})();