(function() {
	'use strict';

	angular.module('hello').config(function($routeProvider) {

	/*	$stateProvider.state('contact-index', {
			url : '/contacts',
			views : {
				'content@' : {
					templateUrl : 'app/permission/index.html',
					controller : 'indexPermissionController',
					controllerAs: 'indexPermissionCtrl'
				}
			}
		});
		
		$stateProvider.state('contact-new', {
			url : '/contacts/new',
			views : {
				'content@' : {
					templateUrl : 'app/core/contact/contact.form.html',
					controller : 'contactFormController',
					controllerAs: 'contactFormController'
				}
			}
		});
		
		$stateProvider.state('contact-edit', {
			url : '/contacts/:id/edit',
			views : {
				'content@' : {
					templateUrl : 'app/core/contact/contact.form.html',
					controller : 'contactFormController',
					controllerAs: 'contactFormController'
				}
			}
		});*/
		
		$routeProvider.when('/contacts/new', {
			templateUrl : 'app/core/contact/contact.form.html',
			controller : 'contactFormController',
			controllerAs : 'contactFormController'
		});
		
		$routeProvider.when('/contacts/:id/edit', {
			templateUrl : 'app/core/contact/contact.form.html',
			controller : 'contactFormController',
			controllerAs : 'contactFormController'
		});
		
		$routeProvider.when('/contacts/', {
			templateUrl : 'app/core/contact/contact.list.html',
			controller : 'contactListController',
			controllerAs : 'contactListController'
		});
		
		
	});
})();
