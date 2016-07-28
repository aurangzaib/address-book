/// <reference path="../app.definition.ts" />

module addressBook {
  'use strict';
  export class DataService {

    getContacts: () => ng.IHttpPromise<any>;
    createContact: (data) => ng.IHttpPromise<any>;
    updateContact: (id: string, data) => ng.IHttpPromise<any>;
    deleteContact: (id: string) => ng.IHttpPromise<any>;

    static $inject = ["$http"];

    constructor($http: angular.IHttpService) {

      this.getContacts = () =>
        $http.get("http://localhost:8080/api/v1/contacts")
          .success((result: any) => result)
          .error(error => error);

      this.createContact = (data) =>
        $http.post("http://localhost:8080/api/v1/contacts", data)
          .success(result => result)
          .error(error => error);

      this.updateContact = (id: string, data) =>
        $http.post("http://localhost:8080/api/v1/contacts/" + id, data)
          .success(result => result)
          .error(error => error);

      this.deleteContact = (id: string) =>
        $http.delete("http://localhost:8080/api/v1/contacts/" + id)
          .success(result => result)
          .error(error => error);
    };
  }
}

angular.module('addressBookApp').service("dataService", addressBook.DataService);
