jQuery.sap.require('sap.m.MessageBox');
jQuery.sap.require('sap.m.MessageToast');
jQuery.sap.require('myapp.util.Formatter');

sap.ui.controller('view.detail.Request', {

	onInit: function() {
		this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		this.oRouter.attachRouteMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched: function(e) {
		if (e.getParameter('name') !== 'request') {
			return;
		}

		this._requestId = e.getParameter('arguments').requestId;

		this.getView().bindElement('/Data/' + this._requestId);
	},

	handleNavBack: function() {
		this.oRouter.myNavBack('empty', {});
	},

	handleRequestApprove: function(e) {
		sap.m.MessageToast.show('Request was approved');
	},

	handleRequestReject: function(e) {
		sap.m.MessageToast.show('Request was rejected');
	},

	handleRequestForward: function(e) {
		sap.m.MessageToast.show('Request was forwarded');
	}

});