jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller('view.detail.Empty', {

	handleShowPopup: function() {
		sap.m.MessageBox.confirm('Some message text', {
			icon: sap.m.MessageBox.Icon.SUCCESS,
			onClose: this.ofnCallback
		});
	},

	ofnCallback: function(r) {
		jQuery.sap.log.info('Result is', r);
	}

});