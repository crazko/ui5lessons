var myView = sap.ui.view({
	viewName: 'myapp.view.My',
	type: sap.ui.core.mvc.ViewType.JS
});

var oShell = new sap.m.Shell('mainShell', {
	app: myView,
	logo: 'assets/img/logo.png'
});

oShell.placeAt('content');