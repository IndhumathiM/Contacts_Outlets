/**
 * Created by Indhumathi on 5/21/2016.
 */
(function(){
    angular
    .module('ngContacts')
    .factory('serviceFactory',serviceFactory);
        function serviceFactory($http){
            var getData = function(type){
            var data;
            if(type === 'contacts'){
                data = $http.get('data/contacts.json');
            }else if(type === 'outlets'){
                data = $http.get('data/outlets.json');
            }
            return data;
             };
            return{
                getData:getData
            };
    };
})();

