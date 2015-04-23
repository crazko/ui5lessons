jQuery.sap.declare("myapp.Component");

sap.ui.core.UIComponent.extend('myapp.Component', {

	metadata: {
		routing : {
			config : {},
			routes : []
		}
	},

	init: function() {
		// 1. some very generic requires
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("myapp.MyRouter");

		// 2. call overridden init (calls createContent)
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		// 3a. monkey patch the router
		var router = this.getRouter();
		router.myNavBack = myapp.MyRouter.myNavBack;
		router.myNavToWithoutHash = myapp.MyRouter.myNavToWithoutHash;

		// if (!sap.ui.Device.system.phone) {
		// 	router.myNavToWithoutHash("mayapp.detail.Empty", "XML", false);
		// }

		// 4. initialize the router
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
		router.initialize();
	},
	
	createContent: function() {
		var oView = sap.ui.view({
			id: 'app',
			viewName: 'view.App',
			type: sap.ui.core.mvc.ViewType.JS,
			viewData: {
				component: this
			}
		});

		var oTranslationModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: 'i18n/titles.properties'
		});

		oView.setModel(oTranslationModel, 'i18n');

		return oView;
	}

});