angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function () {

    
    var pets = [
        {
            "id": "0",
            "sku": "HI902",
            "title": "Automatic Titrator",
            "pages": {
                "360": {
                    "type": "normal",
                    "id": "360",
                    "imgs": ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
                    "content": "The HI902C is an automatic titrator that complements our wide range of products dedicated to quick and accurate laboratory analysis. HI902C can perform acid/base, potentiometric, ORP, complexometric, precipitation, back titrations and titre determinations.The HI902C dispenses the titrant, detects the endpoint and performs all necessary calculations automatically. This versatile titrator supports up to 100 methods, standard or user defined. When powered on, the instrument initiates an internal diagnostics check and then readies itself for the first titration of the day. A large color LCD screen clearly shows the chosen method and related information. A real-time titration curve can be shown on the display; this feature is useful when new methods are tested or when a procedure needs to be optimized. At the end of the titration, all data, including the graph, are automatically stored in memory and can be copied via the built-in USB drive or through direct connection with a PC.This titrator is supplied with a pack of standard methods or you can create your own. Methods (standard and user) can be upgraded, stored or deleted by connecting the titrator to a PC with Hanna software or USB flash drive. Software updates can also be performed using a USB flash drive.Users can connect pH, ORP or ISE electrodes to the HI902C, as well as create a complete workstation with a PC, monitor, keyboard and printer. The HI902C complies with GLP specifications. All GLP information from each sample can be stored, including ID number, date and time of analysis, electrode ID code, and last calibration date."
                },
               
                "Feature": {
                    "type": "slide",
                    "id": "Feature",

                    "slides": {
                        "slide1": {
                            "img": "burettes",
                            "content": "Hanna's exclusive Clip-Lock Burette System allows users to exchange reagent burettes quickly and easily to perform different titrations. Also prevents cross contamination.Simply slide out burette and slide second burette into place. Burettes are available in 5, 10, and 25 ml sizes and the size is automatically recognized when inserted.The HI 902 also features a highly precise 40,000 step screw drive, piston dosing pump."
                        },

                        "slide2": {
                            "img": "collar",
                            "content": "The overhead propeller stirrer holds sensors and dosing tip and is repositioned by an adjustable collar. The stirrer speed is controlled through the software."
                        },

                        "slide3": {
                            "img": "lcd",
                            "content": "This large backlit LCD provides a configurable interface with real-time graphing of measurements, customizable on-screen reporting, and customizable titration methods.5.7 (320x240)."
                        }
                              }

},
                
                
                
                "Data": {
                    "type": "normal",
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