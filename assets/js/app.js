var settings = {
	text: 'My Button',
	icon: 'sap-icon://popup-window'
}

var oButton = new sap.ui.commons.Button('myButton', settings);

oButton.attachPress(openConfirm);

function openConfirm() {
	sap.ui.commons.MessageBox.confirm('Some message text', fnCallback, 'Alert title');
}

function fnCallback(result) {
	alert('Result is ' + result);
}


var oShell = new sap.m.Shell("mainShell", {
	app: oButton
});

oShell.placeAt('content');