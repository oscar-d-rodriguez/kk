'use strict';

/**
 * @ngdoc function
 * @name kikisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kikisApp
 */
angular.module('kikisApp')
  .controller('StoreCtrl', function () {
    
    this.storeTitle = 'Pasele pariente!';

    this.products = [
    	{
          'product': {
              'name': 'Nombre del Producto 1',
              'family': 'Vettel'
          },
          'price': '397',
          'images': {
          	'small' : 'http://thumbs.dreamstime.com/t/sweet-working-women-22954933.jpg',
          	'medium' : '',
          	'large' : ''
          }
        },
        {
          'product': {
              'name': 'Nombre del Producto 2',
              'family': 'Alonso'
          },
          'price': '242',
          'images': {
          	'small' : 'http://thumbs.dreamstime.com/t/sweet-working-women-22954933.jpg',
          	'medium' : '',
          	'large' : ''
          }
        },
                {
          'product': {
              'name': 'Nombre del Producto 2',
              'family': 'Alonso'
          },
          'price': '242',
          'images': {
          	'small' : 'http://thumbs.dreamstime.com/t/sweet-working-women-22954933.jpg',
          	'medium' : '',
          	'large' : ''
          }
        },
        {
          'product': {
              'name': 'Nombre del Producto 2',
              'family': 'Alonso'
          },
          'price': '242',
          'images': {
          	'small' : 'http://thumbs.dreamstime.com/t/sweet-working-women-22954933.jpg',
          	'medium' : '',
          	'large' : ''
          }
        },
        {
          'product': {
              'name': 'Nombre del Producto 2',
              'family': 'Alonso'
          },
          'price': '242',
          'images': {
          	'small' : 'http://thumbs.dreamstime.com/t/sweet-working-women-22954933.jpg',
          	'medium' : '',
          	'large' : ''
          }
        },
        {
          'product': {
              'name': 'Nombre del Producto 2',
              'family': 'Alonso'
          },
          'price': '242',
          'images': {
          	'small' : 'http://thumbs.dreamstime.com/t/sweet-working-women-22954933.jpg',
          	'medium' : '',
          	'large' : ''
          }
        }
    ];


  });
