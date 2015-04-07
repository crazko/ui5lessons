sap.ui.controller('myapp.detail.Empty', {

	handleShowPopup: function() {
		sap.ui.commons.MessageBox.confirm('Some message text', this.ofnCallback, 'Alert title');
	},

	ofnCallback: function(r) {
		jQuery.sap.log.info('Result is', r);
	}

});