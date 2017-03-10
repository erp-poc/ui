(function() {
    'use strict';

    angular.module('hello').controller('productListController', function($rootScope, utils, $http, $location, $route, $routeParams, productsService) {

    	var self = this;
    	
    	self.init = function (){
    		productsService.list().success(function(response){
    			self.page = response;
    		});
    	}
    	
    	self.init();
    	
    });

})();