/// <reference path="../app.definition.ts" />

module addressBook {
  'use strict';
  export class LogicService {

    viewContactModal: (contact) => void;
    editContactModal: (contact) => void;
    deleteContact: (contactId: string) => void;
    addContact: (contact) => void;
    updateContact: (id: string, contact) => void;

    static $inject = ["$rootScope", "$mdDialog", "dataService"];
    constructor(
      $rootScope: angular.IRootScopeService,
      $mdDialog,
      dataService: addressBook.DataService
    ) {

      this.viewContactModal = (contact) => {
        $mdDialog.show({
          controller: 'dialogCtrl',
          controllerAs: 'vm',
          templateUrl: 'views/view.html',
          resolve: {
            title: [() => "View Details"],
            contact: [() => contact]
          },
          parent: angular.element(document.body),
          clickOutsideToClose: true
        });
      };

      this.editContactModal = (contact) => {
        $mdDialog.show({
          controller: 'dialogCtrl',
          controllerAs: 'vm',
          templateUrl: 'views/add.html',
          resolve: {
            title: [() => !!contact ? "Edit Details" : "Add Contact"],
            contact: [() => contact]
          },
          parent: angular.element(document.body),
          clickOutsideToClose: true
        });
      };

      this.deleteContact = (contactId) => {
        dataService.deleteContact(contactId)
          .success(data => {
            dataService.getContacts()
              .then(data => {
                $rootScope.$broadcast("user-data-changed", data.data);
              });
          });
      };

      this.addContact = (contact) => {
        dataService.createContact(contact)
          .success(data => {
            dataService.getContacts()
              .then(data => {
                $rootScope.$broadcast("user-data-changed", data.data);
                $mdDialog.hide();
              });
          });
      };

      this.updateContact = (id, contact) => {
        dataService.updateContact(id, contact)
          .success(data => {
            dataService.getContacts()
              .then(data => {
                $rootScope.$broadcast("user-data-changed", data.data);
                $mdDialog.hide();
              });
          });
      };
    };
  }
}

angular.module('addressBookApp')
  .service("logicService", addressBook.LogicService);