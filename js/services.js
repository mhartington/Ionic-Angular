'use strict';

(function () {

   var products =[
   {
    "id": "1",
    "sku": "Item 1",
    "thumb": "100x100",
    "pages": [
     {
        "id": "360",
        "content":"stuff"
      },
     {
        "id": "Feature",
        "content":"Feature stuff"
      },
     {
        "id": "Data",
        "content":"Data stuff"
      }
    ]
  }
],

        findById = function (id) {
            var product = null,
                l = products.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (products[i].id === id) {
                    product = products[i];
                    break;
                }
            }
            return product;
        }


    angular.module('myApp.memoryServices', [])
        .factory('Product', [
            function () {
                return {
                    query: function () {
                        return products;
                    },
                    get: function (product) {
                        return findById(parseInt(product.productId));
                    }
                }

            }]);

}());