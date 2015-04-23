jQuery.sap.require("myapp.util.Formatter");

sap.ui.controller('view.master.Master', {

	onInit: function() {
		this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	},

	onExit: function() {

	},

	onAfterRendering: function() {

	},

	onAfterRendering: function() {

	},

	handleSelectItem: function(e) {
		var oItem = e.getSource();
		var sPath = oItem.getBindingContextPath();
		var sRequestId = sPath.substring(sPath.lastIndexOf("/") + 1);
		
		oItem.setUnread(false);

		this._oRouter.navTo("request", {requestId: sRequestId});
	}

});
