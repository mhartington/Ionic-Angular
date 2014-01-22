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
            "manual": "http://www.hannainst.com/manuals/manHI_901_902.pdf",
            "pages": {
                "360": {
                    "type": "normal",
                    "id": "360",
                    "icon": "icon icon-360",
                    "imgs": ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
                    "content": "The HI902C is an automatic titrator that complements our wide range of products dedicated to quick and accurate laboratory analysis. HI902C can perform acid/base, potentiometric, ORP, complexometric, precipitation, back titrations and titre determinations.The HI902C dispenses the titrant, detects the endpoint and performs all necessary calculations automatically. This versatile titrator supports up to 100 methods, standard or user defined. When powered on, the instrument initiates an internal diagnostics check and then readies itself for the first titration of the day. A large color LCD screen clearly shows the chosen method and related information. A real-time titration curve can be shown on the display; this feature is useful when new methods are tested or when a procedure needs to be optimized. At the end of the titration, all data, including the graph, are automatically stored in memory and can be copied via the built-in USB drive or through direct connection with a PC.This titrator is supplied with a pack of standard methods or you can create your own. Methods (standard and user) can be upgraded, stored or deleted by connecting the titrator to a PC with Hanna software or USB flash drive. Software updates can also be performed using a USB flash drive.Users can connect pH, ORP or ISE electrodes to the HI902C, as well as create a complete workstation with a PC, monitor, keyboard and printer. The HI902C complies with GLP specifications. All GLP information from each sample can be stored, including ID number, date and time of analysis, electrode ID code, and last calibration date."
                },

                "Feature": {
                    "type": "slide",
                    "id": "Feature",
                    "icon": "icon icon-feature",
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
                    "icon": "icon icon-data",
                    "imgs": ['usb'],
                    "content": "The built-in USB interface with flash drive allows reports and methods to be downloaded and transerred to a PC. The USB interface also allows for new methods to be uploaded and for software upgrades."
                },


                "Nav": {
                    "type": "normal",
                    "id": "Nav",
                    "icon": "icon icon-button",
                    "imgs": ['buttons'],
                    "content": "Large arrow keys and numeric keypad make navigation and inputting data quick and easy."
                },
                "IO": {
                    "type": "normal",
                    "id": "I/O",
                    "imgs": ['io'],
                    "icon": "icon icon-io",
                    "content": "The HI902 comes with a multitude of I/Oâ€™s for connecting probes, external monitors, keyboards, and even a printers. It also has space for an additional analog board to double the number of inputs for electrodes and probes."
                }
            }
        },
        {
            "id": "1",
            "sku": "HI903",
            "title": "Karl Fischer Titrator",
            "manual": "http://www.hannainst.com/manuals/man_HI903_16_05_2012.pdf",
            "pages": {
                "360": {
                    "type": "normal",
                    "id": "360",
                    "icon": "icon icon-360",
                    "imgs": ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
                    "content": "The HI903 Karl Fischer Volumetric Titrator for moisture analysis is an extension of HANNAâ€™s highly successful potentiometric titrator platform. The HI903 combines an ultra-high precision titrant delivery system with optically regulated magnetic stirring, sophisticated endpoint determination, dynamic dosing and background drift correction algorithms.The result is an extremely adaptable titrator capable of titrating with superior accuracy and precision even for samples with low moisture content. The HI903 dispenses the titrant, detects the endpoint and performs all necessary calculations automatically.The HI903 comes equipped with a solvent handling system to reduce cell conditioning time and can be connected directly to your laboratory balance via serial interface.The HI03â€™s powerful software and intuitive menus are easily navigated on the large, color LCD display making it simple to view results. Choose from included methods or develop a custom method for almost any application or sample type. Using a USB flash drive or connecting the titrator to the HI900PC application, methods (standard and user) can be upgraded, stored or deleted."
                },

                "Feature": {
                    "type": "slide",
                    "id": "Feature",
                    "icon": "icon icon-feature",
                    "slides": {
                        "slide1": {
                            "img": "burret",
                            "content": "Durable and enclosed conical beaker assembly with beaker desiccant. This is where the titration reaction takes place The cover is a PTFE cover with low water vapor permeability and high resistivity to Karl Fischer reagents."
                        },

                        "slide2": {
                            "img": "vessel",
                            "content": "The overhead propeller stirrer holds sensors and dosing tip and is repositioned by an adjustable collar. The stirrer speed is controlled through the software."
                        },

                        "slide3": {
                            "img": "screen",
                            "content": "This large backlit LCD provides a configurable interface with real-time graphing of measurements, customizable on-screen reporting, and customizable titration methods. 5.7 (320x240)."
                        }
                    }

                },

                "Data": {
                    "type": "normal",
                    "id": "Data",
                    "icon": "icon icon-data",
                    "imgs": ['usb'],
                    "content": "The built-in USB interface with flash drive allows reports and methods to be downloaded and transerred to a PC. The USB interface also allows for new methods to be uploaded and for software upgrades."
                },


                "Nav": {
                    "type": "normal",
                    "id": "Nav",
                    "icon": "icon icon-button",
                    "imgs": ['buttons'],
                    "content": "Large arrow keys and numeric keypad make navigation and inputting data quick and easy."
                },
                "IO": {
                    "type": "normal",
                    "id": "I/O",
                    "imgs": ['back'],
                    "icon": "icon icon-io",
                    "content": "The HI903 comes with a multitude of I/Os to make various connecting with probes, external monitors, keyboards, as well as a printer to print your results."
                }
            }
        },
        {
            "id": "2",
            "sku": "HI98703",
            "title": "Portable Turbidity Meter",
            "manual": "http://www.hannainst.com/manuals/manHI_98703.pdf",
			"src": "http://hannadev.com/video/98703.mp4",
            "pages": {
                "360": {
                    "type": "normal",
                    "id": "360",
                    "icon": "icon icon-360",
                    "imgs": ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
                    "content": "The HI98703 meets and exceeds the requirements of the USEPA Method 180.1 for wastewater and Standard Method 2130 B for drinking water. The instrument has an EPA compliance reading mode which rounds readings to meet EPA reporting requirements. Users will appreciate the accuracy and sensitivity of this instrument, particularly at very low turbidity levels. This meter features complete GLP (Good Laboratory Practice) functions that allow traceability of the calibration conditions. The last calibration, date and time can be checked at the touch of a button."
                },

                "Feature": {
                    "type": "slide",
                    "id": "Feature",
                    "icon": "icon icon-feature",
                    "slides": {
                        "slide1": {
                            "img": "cuvette",
                            "content": "The HI98703 uses a state of the art optical system that guarantees both high performance and reliable results. This optical system includes a tungsten lament lamp, a scattered light detector and a transmitted light detector. This system meets and exceeds USEPA Method 180.1 and Standard Method 2130 B."
                        },

                        "slide2": {
                            "img": "tag",
                            "content": "The HI98703 come equipped with Hanna's exclusive Fast Tracker technology. This system takes your measurements and logs and labels with the alphanumeric user-entered location ID. Location, date, time and measurements are logged into the meter which can be transferred to a PC."
                        },

                        "slide3": {
                            "img": "glp",
                            "content": "The HI98703 features GLP (Good Laboratory Practice) functions that allow traceability of the calibration conditions. The last calibration, date and time can be checked at the touch of a button."
                        }
                    }

                },

                "Video": {
                    "type": "video",
                    "id": "Video",
                    "icon": "icon icon-video",
                },


                "Nav": {
                    "type": "normal",
                    "id": "Nav",
                    "icon": "icon icon-button",
                    "imgs": ['buttons'],
                    "content": "Water resistant keypad (ON/OFF, GLP, AVG, CAL, LIGHT, RCL, LOG/CFM, READ, SETUp/DEL)."
                },
                "IO": {
                    "type": "normal",
                    "id": "I/O",
                    "imgs": ['io'],
                    "icon": "icon icon-io",
                    "content": "The HI98703 has inputs for an AC adapter for charging the meter as well as a RS 232 and USB connector for connecting to a PC for data logging."
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