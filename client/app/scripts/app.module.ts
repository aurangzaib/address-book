/// <reference path="app.definition.ts" />
'use strict';

module addressBook {

  export interface contactTemplate {
    name: string,
    number: number,
    email: string,
    company: string,
    address: string
  }

  angular.module('addressBookApp', ['ui.router', 'ngMaterial', 'ng-mfb']);
}
