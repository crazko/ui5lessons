jQuery.sap.declare("myapp.Component");

sap.ui.core.UIComponent.extend('myapp.Component', {

	metadata: {
		routing : {
			config : {
				viewType : "JS",
				viewPath : "myapp",
				targetControl : "splitApp",
				// clearTarget : false,
				// transition: "slide"
			},
			routes : [
				{
					pattern : "inbox/:inboxType:",
					name : "inbox",
					view : "App",
					viewPath : "",
					viewLevel : 1,
					targetAggregation : "masterPages"
				},
				{
					pattern : "",
					name : "home",
					viewPath : "myapp.master",
					viewType : "XML",
					view : "Navigation",
					viewLevel : 0,
					preservePageInSplitContainer : true,
					targetAggregation : "masterPages",
					subroutes : [
						{
							pattern : "mail/{viewId}",
							name : "mail",
							viewPath : "myapp.detail",
							view : "Empty",
							viewLevel : 2,
							targetAggregation : "detailPages"
						}
					]
				},
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
			viewName: 'myapp.App',
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