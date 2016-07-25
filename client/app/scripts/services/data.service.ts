/// <reference path="../app.definition.ts" />

module addressBook {
  'use strict';
  export class DataService {

    getContacts:() => ng.IHttpPromise<any>;
    createContact:(data) => ng.IHttpPromise<any>;
    updateContact:(id, data) => ng.IHttpPromise<any>;
    deleteContact:(id) => ng.IHttpPromise<any>;

    static $inject = ["$http"];

    constructor($http:ng.IHttpService) {

      this.getContacts = () =>
        $http.get("http://localhost:8080/api/v1/contacts");

      this.createContact = (data) =>
        $http.post("http://localhost:8080/api/v1/contacts", data)
          .success(result=>result)
          .error(error=>error);

      this.updateContact = (id, data) => {
        console.log("data: ", data);
        console.log("id: ", id);
        return $http.post("http://localhost:8080/api/v1/contacts/" + id, data)
          .success(result=>result)
          .error(error=>error);
      };

      this.deleteContact = (id) => {
        console.log("id: ", id);
        return $http.delete("http://localhost:8080/api/v1/contacts/" + id)
          .success(result=>result)
          .error(error=>error);
      };
    };
  }
}

angular.module('addressBookApp').service("dataService", addressBook.DataService);
