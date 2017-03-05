(function() {
    'use strict';

    angular.module('hello').controller('contactFormController', function($rootScope, $http, $location, $routeParams, contactsService) {

    	var self = this;
    	
    	self.contact = {};
    	
    	self.id = $routeParams.id;
    	
    	
    	self.init = function(){
    		
    	}
    	
    	self.init();
    	
    	
    	
    	self.save = function(){
    		contactsService.save(self.contact).success(function(response){
    			$location.path('/contacts/')
    		});
    	}
    });

})();