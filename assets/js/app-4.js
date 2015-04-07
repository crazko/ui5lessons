var masterView = sap.ui.xmlview('myapp.master.Navigation');
var detailView = sap.ui.xmlview('myapp.detail.Empty');

var app = new sap.m.App({
	pages: [masterView, detailView]
});

var splitApp = new sap.m.SplitApp({
	masterPages: masterView,
	detailPages: detailView
});

var translation = new sap.ui.model.resource.ResourceModel({
	bundleUrl: 'i18n/titles.properties'
})

var oShell = new sap.m.Shell('mainShell', {
	app: splitApp,
	logo: 'assets/img/logo.png'
});

oShell.setModel(translation, 'i18n');

oShell.placeAt('content');
