var settings = {
	text: 'My Button',
	icon: 'sap-icon://popup-window'
}

var oButton = new sap.ui.commons.Button('myButton', settings);

oButton.attachPress(openConfirm);

oButton.placeAt('content');

function openConfirm() {
	sap.ui.commons.MessageBox.confirm('Some message text', fnCallback, 'Alert title');
}

function fnCallback(result) {
	alert('Result is ' + result);
}
