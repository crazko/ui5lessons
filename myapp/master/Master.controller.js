jQuery.sap.require("myapp.util.Formatter");

sap.ui.controller('myapp.master.Master', {

	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel('model/inbox.json');
		this.getView().setModel(oModel);
	},

	onExit: function() {

	},

	onAfterRendering: function() {

	},

	onAfterRendering: function() {

	}

});
