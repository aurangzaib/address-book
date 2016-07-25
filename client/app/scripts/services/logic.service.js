/// <reference path="../app.definition.ts" />
var addressBook;
(function (addressBook) {
    'use strict';
    var LogicService = (function () {
        function LogicService($rootScope, $mdDialog, dataService) {
            this.viewContactModal = function (contact) {
                $mdDialog.show({
                    controller: 'dialogCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'views/view.html',
                    resolve: {
                        title: [function () { return "View Details"; }],
                        contact: [function () { return contact; }]
                    },
                    parent: angular.element(document.body),
                    clickOutsideToClose: true
                });
            };
            this.editContactModal = function (contact) {
                $mdDialog.show({
                    controller: 'dialogCtrl',
                    controllerAs: 'vm',
                    templateUrl: 'views/add.html',
                    resolve: {
                        title: [function () { return !!contact ? "Edit Details" : "Add Contact"; }],
                        contact: [function () { return contact; }]
                    },
                    parent: angular.element(document.body),
                    clickOutsideToClose: true
                });
            };
            this.deleteContact = function (contactId) {
                dataService.deleteContact(contactId)
                    .success(function (data) {
                    dataService.getContacts()
                        .success(function (data) {
                        $rootScope.$broadcast("user-data-changed", data);
                    });
                });
            };
            this.addContact = function (contact) {
                dataService.createContact(contact)
                    .success(function (data) {
                    dataService.getContacts()
                        .success(function (data) {
                        $rootScope.$broadcast("user-data-changed", data);
                        $mdDialog.hide();
                    });
                });
            };
            this.updateContact = function (id, contact) {
                dataService.updateContact(id, contact)
                    .success(function (data) {
                    dataService.getContacts()
                        .success(function (data) {
                        $rootScope.$broadcast("user-data-changed", data);
                        $mdDialog.hide();
                    });
                });
            };
        }
        ;
        LogicService.$inject = ["$rootScope", "$mdDialog", "dataService"];
        return LogicService;
    }());
    addressBook.LogicService = LogicService;
})(addressBook || (addressBook = {}));
angular.module('addressBookApp').service("logicService", addressBook.LogicService);
//# sourceMappingURL=logic.service.js.map