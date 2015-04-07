var myView = sap.ui.xmlview('myapp.My');

var oShell = new sap.m.Shell('mainShell', {
	app: myView,
	logo: 'assets/img/logo.png'
});

oShell.placeAt('content');