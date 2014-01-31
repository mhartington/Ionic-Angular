$(document).on('deviceready', function () {

console.log("device ready");


var networkState = navigator.connection.type;
if (networkState == "none") {
    console.log ("No Connection");
    //NOTHING...

} else {
    /*registerPushwoosh();
        app.initialize();*/

    console.log("Connected, Lets get pushing");
}

});