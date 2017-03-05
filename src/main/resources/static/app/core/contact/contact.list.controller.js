(function() {
    'use strict';

    angular.module('hello').controller('contactListController', function($rootScope, $http, $location, $route, $routeParams, contactsService) {

    	var self = this;
    	
    	self.init = function (){
    		contactsService.list().success(function(response){
    			self.page = response;
    		});
    	}
    	
    	self.init();
    	
    });

})();