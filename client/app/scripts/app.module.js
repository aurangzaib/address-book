/// <reference path="app.definition.ts" />
'use strict';
var addressBook;
(function (addressBook) {
    angular
        .module('addressBookApp', ['ui.router', 'ngMaterial', 'ng-mfb'])
        .config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
        $httpProvider.defaults.headers.delete = {};
    });
})(addressBook || (addressBook = {}));
//# sourceMappingURL=app.module.js.map