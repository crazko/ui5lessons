var oShell = new sap.m.Shell('mainShell', {
	app: new sap.ui.core.ComponentContainer({
		name: 'myapp'
	}),
	logo: 'assets/img/logo.png',
	homeIcon: {
		'favicon': 'assets/img/favicon.ico'
	}
});

oShell.placeAt('content');
