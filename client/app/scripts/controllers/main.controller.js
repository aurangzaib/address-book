var addressBook;
(function (addressBook) {
    'use strict';
    var MainCtrl = (function () {
        function MainCtrl($rootScope, logicService, contacts) {
            var vm = this;
            vm.contacts = contacts.data;
            vm.viewContact = function (contact) { return logicService.viewContactModal(contact); };
            vm.editContact = function (contact) { return logicService.editContactModal(contact); };
            vm.deleteContact = function (contact) { return logicService.deleteContact(contact.id); };
            $rootScope.$on("user-data-changed", function (event, data) { return vm.contacts = data; });
        }
        MainCtrl.$inject = ["$rootScope", "logicService", "contacts"];
        return MainCtrl;
    }());
    addressBook.MainCtrl = MainCtrl;
})(addressBook || (addressBook = {}));
angular.module('addressBookApp')
    .controller("mainCtrl", addressBook.MainCtrl);
//# sourceMappingURL=main.controller.js.map