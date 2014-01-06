'use strict';

(function () {

	var employees = [
		{
			"id": 1,
			"title": "Titrator",
			"sku": "HI904",
			"thumb": "100x100",

			"pages": [
				{
					"id": "360",
					"imgs":"01",
					"content": "stuff"
            },
				{
					"id": "Feature",
					"imgs":"02",
					"content": "Feature stuff"
            },
				{
					"id": "Data",
					"imgs":"03",
					"content": "Data stuff"
            }
        ]
		},
		{
			"id": 2,
			"title": "Titrator",
			"sku": "HI903",
			"thumb": "100x100",

			"pages": [
				{
					"id": "360",
					"content": "stuff"
            },
				{
					"id": "Feature",
					"content": "Feature stuff"
            },
				{
					"id": "Data",
					"content": "Data stuff"
            }
        ]
			}
					],

		findById = function (id) {
			var employee = null,
				l = employees.length,
				i;
			for (i = 0; i < l; i = i + 1) {
				if (employees[i].id === id) {
					employee = employees[i];
					break;
				}
			}
			return employee;
		},

		findByManager = function (managerId) {
			var results = employees.filter(function (element) {
				return managerId === element.managerId;
			});
			return results;
		};


	angular.module('myApp.memoryServices', [])
		.factory('Employee', [

            function () {
				return {
					query: function () {
						return employees;
					},
					get: function (employee) {
						return findById(parseInt(employee.employeeId));
					}
				}

            }])
		.factory('Report', [

            function () {
				return {
					query: function (employee) {
						return findByManager(parseInt(employee.employeeId));
					}
				}

            }]);

}());