var addressBook;
(function (addressBook) {
    'use strict';
    var Routes = (function () {
        function Routes($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'mainCtrl',
                controllerAs: 'vm',
                resolve: {
                    contacts: ['dataService', function (dataService) { return dataService.getContacts(); }]
                }
            });
            $urlRouterProvider.otherwise('/');
        }
        Routes.$inject = ['$stateProvider', '$urlRouterProvider'];
        return Routes;
    }());
    addressBook.Routes = Routes;
})(addressBook || (addressBook = {}));
angular.module('addressBookApp').config(addressBook.Routes);
//# sourceMappingURL=app.routes.js.map