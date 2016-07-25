/// <reference path="../app.definition.ts" />

module addressBook {
  'use strict';
  export class DialogCtrl {
    static $inject = ["$mdDialog", "logicService", "title", "contact"];

    constructor($mdDialog,
                logicService:addressBook.LogicService,
                title,
                contact) {
      var vm:any = this;

      vm.title = title;
      vm.contact = contact;

      vm.closeDialog = () => $mdDialog.cancel();
      vm.addContact = (contact) => logicService.addContact(contact);
      vm.updateContact = (id, contact) => logicService.updateContact(id, contact);
    };
  }
}

angular.module('addressBookApp')
  .controller("dialogCtrl", addressBook.DialogCtrl);
