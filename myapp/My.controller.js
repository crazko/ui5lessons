sap.ui.controller('myapp.My', {

	handleShowPopup: function () {
		sap.ui.commons.MessageBox.confirm('Some message text', this.ofnCallback, 'Alert title');
	},

	ofnCallback: function(r) {
		jQuery.sap.log.info('Result is', r);
	}

});