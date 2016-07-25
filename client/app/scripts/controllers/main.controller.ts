/// <reference path="../app.definition.ts" />

module addressBook {
  'use strict';
  export class MainCtrl {
    static $inject = ["$rootScope", "logicService", "contacts"];

    constructor($rootScope:ng.IRootScopeService,
                logicService:addressBook.LogicService,
                contacts) {
      var vm:any = this;

      vm.contacts = contacts.data;
      vm.viewContact = (contact) => logicService.viewContactModal(contact);
      vm.editContact = (contact) => logicService.editContactModal(contact);
      vm.deleteContact = (contact) => logicService.deleteContact(contact.id);

      $rootScope.$on("user-data-changed", (event, data) => vm.contacts = data);
    }
  }
}

angular.module('addressBookApp')
  .controller("mainCtrl", addressBook.MainCtrl);
