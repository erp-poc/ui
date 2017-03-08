(function() {
    'use strict';

    angular.module('hello').factory('contactsService', function($rootScope, $http, $location, $route) {

    	
    	function list() {
            return $http({
                method: 'GET',
                url: 'core/contacts/'
            });
    	}
    	
    	function get(id) {
            return $http({
                method: 'GET',
                url: 'core/contacts/'+id
            });
    	}    	
    	
    	function save(contact) {
    		
    		if(contact.id){
    			
                return $http({
                    method: 'PUT',
                    url: 'core/contacts/'+contact.id,
                    data: contact
                });
                
    		} else {
    			
                return $http({
                    method: 'POST',
                    url: 'core/contacts/',
                    data: contact
                });	
                
    		}
            
        }

        return {
            save: save,
            list: list,
            get: get
        };

    	
    	
    });

})();