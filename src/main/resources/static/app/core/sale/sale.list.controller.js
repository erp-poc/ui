(function() {
    'use strict';

    angular.module('hello').controller('saleListController', function($rootScope, $http, $location, $routeParams, contactsService) {

    	var self = this;
    	
    	self.id = $routeParams.id;
    	
    	
    	self.init = function(){
    		
    	}
    	
    	self.init();
    	
    });

})();