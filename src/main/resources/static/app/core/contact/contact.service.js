(function() {
    'use strict';

    angular.module('hello').factory('contactsService', function($rootScope, $http, $location, $route) {

    	
    	function list() {
            return $http({
                method: 'GET',
                url: 'core/contacts/'
            });
    	}
    	
    	function get(url) {
            return $http({
                method: 'GET',
                url: url
            });
    	}    	
    	
    	function save(contact) {
    		
            return $http({
                method: 'POST',
                url: 'core/contacts/',
                data: contact
            });
            
        }

        return {
            save: save,
            list: list,
            get: get
        };

    	
    	
    });

})();