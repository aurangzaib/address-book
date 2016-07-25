/// <reference path="app.definition.ts" />
'use strict';

module addressBook {
  angular
    .module('addressBookApp', ['ui.router', 'ngMaterial', 'ng-mfb'])
    .config(function ($httpProvider) {
      $httpProvider.defaults.headers.common = {};
      $httpProvider.defaults.headers.post = {};
      $httpProvider.defaults.headers.put = {};
      $httpProvider.defaults.headers.patch = {};
      $httpProvider.defaults.headers.delete = {};
    });
}
