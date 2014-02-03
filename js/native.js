$(document).on('deviceready', function () {

    console.log("device ready");

    //    $(document).on('online', function () {
    ////      registerPushwoosh();
    ////            app.initialize();   
    //        console.log("Connected, Lets get pushing");
    //    });
    //
    //    $(document).on('offline', function () {
    //        console.log("No Connection");
    //    });

});

(function () {
    var networkState = navigator.connection.type;
    if (networkState == "none") {
        console.log("No Connection");
        //NOTHING...

    } else {
        //        registerPushwoosh();
        app.initialize();
        registerPushwoosh();

        console.log("Connected, Lets get pushing");
    }
});