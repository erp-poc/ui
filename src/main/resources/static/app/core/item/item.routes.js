(function() {
	'use strict';

	angular.module('hello').config(function($routeProvider) {
		
		$routeProvider.when('/products/', {
			templateUrl : 'app/core/item/item.list.html',
			controller : 'productListController',
			controllerAs : 'controller'
		});
		
		
	});
})();
