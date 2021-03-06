/**
 * Created by Indhumathi on 5/21/2016.
 */
(function () {
    'use strict';
    angular
        .module('contacts')
        .controller('contactsController', contactsController);
        function contactsController($scope, serviceFactory) {
        var outletMap;
        serviceFactory.getData('contacts').success(function (contactData) {
            $scope.contacts = contactData;
        }).error(function (contactData) {
            console.log("error");
        }),
            serviceFactory.getData('outlets').success(function (outletData) {
                outletMap = _.object(_.map(outletData, function (item) {
                    $scope.outletsName = item.name;
                    $scope.getOutletNameById = function (outletId) {
                        var outletName = outletMap[outletId];
                        return outletName;
                    }

                    return [item.id, item.name]
                }));
            }).error(function (outletData) {
                console.log("error");
            })

    };
})();