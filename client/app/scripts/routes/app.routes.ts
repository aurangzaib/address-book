/// <reference path="../app.definition.ts" />
module addressBook {
  'use strict';
  export class Routes {
    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor($stateProvider:ng.ui.IStateProvider,
                $urlRouterProvider:ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'mainCtrl',
          controllerAs: 'vm',
          resolve: {
            contacts: ['dataService', (dataService:addressBook.DataService) => dataService.getContacts()]
          }
        });
      // default route
      $urlRouterProvider.otherwise('/');
    }
  }
}

angular.module('addressBookApp').config(addressBook.Routes);
