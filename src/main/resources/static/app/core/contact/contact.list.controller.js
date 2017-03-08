(function() {
    'use strict';

    angular.module('hello').controller('contactListController', function($rootScope, utils, $http, $location, $route, $routeParams, contactsService) {

    	var self = this;

    	
    	self.getEditUrl = function(contact){
    		var id = utils.getId(contact._links.self.href);
    		return "/#/contacts/"+id+"/edit";
    	}
    	
    	self.init = function (){
    		contactsService.list().success(function(response){
    			self.page = response;
    		});
    	}
    	
    	self.init();
    	
    });

})();