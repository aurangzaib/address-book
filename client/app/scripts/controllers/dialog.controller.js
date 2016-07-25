/// <reference path="../app.definition.ts" />
var addressBook;
(function (addressBook) {
    'use strict';
    var DialogCtrl = (function () {
        function DialogCtrl($mdDialog, logicService, title, contact) {
            var vm = this;
            vm.title = title;
            vm.contact = contact;
            vm.closeDialog = function () { return $mdDialog.cancel(); };
            vm.addContact = function (contact) { return logicService.addContact(contact); };
            vm.updateContact = function (id, contact) { return logicService.updateContact(id, contact); };
        }
        ;
        DialogCtrl.$inject = ["$mdDialog", "logicService", "title", "contact"];
        return DialogCtrl;
    }());
    addressBook.DialogCtrl = DialogCtrl;
})(addressBook || (addressBook = {}));
angular.module('addressBookApp')
    .controller("dialogCtrl", addressBook.DialogCtrl);
//# sourceMappingURL=dialog.controller.js.map