jQuery.sap.declare("myapp.Component");

sap.ui.core.UIComponent.extend('myapp.Component', {

	metadata: {
		routing : {
			config : {
				viewType: "XML",
				viewPath: "view",
				targetControl: "splitApp",
				clearTarget: false,
				// transition: "flip"
			},
			routes : [
				{
					pattern: "",
					name: "master",
					view: "Navigation",
					viewPath: "view.master",
					viewLevel: 0,
					targetAggregation: "masterPages",
					subroutes: [
						{
							pattern: "request/{requestId}",
							name: "request",
							view: "Request",
							viewPath: "view.detail",
							viewLevel: 1,
							targetAggregation: "detailPages"
						},
						{
							pattern: "",
							name: "empty",
							view: "Empty",
							viewPath: "view.detail",
							viewLevel: 1,
							targetAggregation: "detailPages"
						},
					]
				}
			]
		}
	},

	init: function() {
		// 1. some very generic requires
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("myapp.MyRouter");

		// 2. call overridden init (calls createContent)
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		// 3a. monkey patch the router
		var oRouter = this.getRouter();
		oRouter.myNavBack = myapp.MyRouter.myNavBack;
		oRouter.myNavToWithoutHash = myapp.MyRouter.myNavToWithoutHash;

		if (!sap.ui.Device.system.phone) {
			oRouter.myNavToWithoutHash("view.detail.Empty", "XML", false);
		}

		// 4. initialize the router
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(oRouter);
		oRouter.initialize();
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

		var oModel = new sap.ui.model.json.JSONModel('model/inbox.json');

		oView.setModel(oModel);

		var oTranslationModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: 'i18n/titles.properties'
		});

		oView.setModel(oTranslationModel, 'i18n');

		return oView;
	}

});