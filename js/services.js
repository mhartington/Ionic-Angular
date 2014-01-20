angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var pets = [
        {
            "id": "0",
            "title": "Cats",
            "description": "Furry little creatures. Obsessed with plotting assassination, but never following through on it.",
            "sku": "HI904",
            "pages": {
                "360": {
                    "type": "normal",
                    "id": "360",
                    "imgs": ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
                    "content": "stuff"
                },
                "Feature": {
                    "type": "slide",
                    "id": "Feature",
                    "content": "Feature stuff"
                },
                "Data": {
                    "type": "normal",
                    "id": "Data",
                    "content": "Data stuff"
                }
            }
        },
        {
            "id": "1",
            "title": "Dogs",
            "description": "Lovable. Loyal almost to a fault. Smarter than they let on.",
            "pages": {
                "360": {
                    "id": "360",
                    "content": "stuff"
                },
                "Feature": {
                    "id": "Feature",
                    "content": "Feature stuff"
                },
                "Data": {
                    "id": "Data",
                    "content": "Data stuff"
                }
            }
        },
        {
            "id": "2",
            "title": "Turtles",
            "description": "Everyone likes turtles.",
            "pages": {
                "360": {
                    "id": "360",
                    "content": "stuff"
                },
                "Feature": {
                    "id": "Feature",
                    "content": "Feature stuff"
                },
                "Data": {
                    "id": "Data",
                    "content": "Data stuff"
                }
            }
        },
        {
            "id": "3",
            "title": "Sharks",
            "description": "An advanced pet. Needs millions of gallons of salt water. Will happily eat you.",
            "pages": {
                "360": {
                    "id": "360",
                    "content": "stuff"
                },
                "Feature": {
                    "id": "Feature",
                    "content": "Feature stuff"
                },
                "Data": {
                    "id": "Data",
                    "content": "Data stuff"
                }
            }
        }
  ];

    return {
        all: function () {
            return pets;
        },
        get: function (petId) {
            // Simple index lookup
            return pets[petId];
        }
    };
});