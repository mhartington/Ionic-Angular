$(document).on('deviceready', function () {

	console.log("device ready");

	$(document).on('online', function () {

		console.log("Connected, Lets get pushing");
	});

	$(document).on('offline', function () {
		console.log("No Connection");
	});

	var networkState = navigator.connection.type;
	if (networkState == "NONE") {
		console.log("No Connection");
		//NOTHING...
		alert('no connection');

	} else {

		//		app.initialize();
		//		registerPushwoosh();

		console.log("Connected, Lets get pushing");
	}


});