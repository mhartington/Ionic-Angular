function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;
    pushNotification.onDeviceReady();

    pushNotification.registerDevice({
            alert: true,
            badge: true,
            sound: true,
            pw_appid: "2A0A5-F4D2A",
            appname: "testing"
        },
        function (status) {
            var deviceToken = status.deviceToken;
            //console.warn('registerDevice: ' + deviceToken);
        },
        function (status) {
            //console.warn('failed to register : ' + JSON.stringify(status));
            navigator.notification.alert(JSON.stringify(['failed to register ', status]));
        });

    pushNotification.setApplicationIconBadgeNumber(0);

    pushNotification.getTags(function (tags) {
            //console.warn('tags for the device: ' + JSON.stringify(tags));
        },
        function (error) {
            //console.warn('get tags error: ' + JSON.stringify(error));
        });

    //start geo tracking. PWTrackSignificantLocationChanges - Uses GPS in foreground, Cell Triangulation in background. 
    /* Uncomment for Geolocation     */
//    pushNotification.startLocationTracking('PWTrackSignificantLocationChanges',
//        function () {
//            console.warn('Location Tracking Started');
//        });


    document.addEventListener('push-notification', function (event) {
        var notification = event.notification;

        navigator.notification.alert(notification.aps.alert);

        //to view full push payload
        //navigator.notification.alert(JSON.stringify(notification));

        pushNotification.setApplicationIconBadgeNumber(0);
    });
}

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        initPushwoosh();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};