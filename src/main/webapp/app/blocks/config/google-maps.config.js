(function() {
    'use strict';

    angular
        .module('jhipsterApp')
        .config(googleMapsConfig);

    googleMapsConfig.$inject = ['uiGmapGoogleMapApiProvider'];

    function googleMapsConfig(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
               key: your-api-key,
               v: '3.28',
               libraries: 'weather,geometry,visualization,places'
           });
    }
})();
