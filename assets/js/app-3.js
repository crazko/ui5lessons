var settings = {
	text: 'My Button',
	icon: 'sap-icon://popup-window',
	press: function() {
		alert('Alert message');
	}
}

var oButton = new sap.ui.commons.Button('myButton', settings);

oButton.placeAt('content');
