/// <reference path="../app.definition.ts" />
var addressBook;
(function (addressBook) {
    'use strict';
    var DataService = (function () {
        function DataService($http) {
            this.getContacts = function () {
                return $http.get("http://localhost:8080/api/v1/contacts");
            };
            this.createContact = function (data) {
                return $http.post("http://localhost:8080/api/v1/contacts", data)
                    .success(function (result) { return result; })
                    .error(function (error) { return error; });
            };
            this.updateContact = function (id, data) {
                console.log("data: ", data);
                console.log("id: ", id);
                return $http.post("http://localhost:8080/api/v1/contacts/" + id, data)
                    .success(function (result) { return result; })
                    .error(function (error) { return error; });
            };
            this.deleteContact = function (id) {
                console.log("id: ", id);
                return $http.delete("http://localhost:8080/api/v1/contacts/" + id)
                    .success(function (result) { return result; })
                    .error(function (error) { return error; });
            };
        }
        ;
        DataService.$inject = ["$http"];
        return DataService;
    }());
    addressBook.DataService = DataService;
})(addressBook || (addressBook = {}));
angular.module('addressBookApp').service("dataService", addressBook.DataService);
//# sourceMappingURL=data.service.js.map