sap.ui.jsview('myapp.view.My', {
	createContent: function(oController) {
		var settings = {
			text: 'My Button',
			icon: 'sap-icon://popup-window'
		};

		var oButton = new sap.ui.commons.Button('myButton', settings);

		oButton.attachPress(this.openConfirm);

		return oButton;
	},

	openConfirm: function() {
		var oView = this.getParent();
		sap.ui.commons.MessageBox.confirm('Some message text', oView.ofnCallback, 'Alert title');
	},

	ofnCallback: function(r) {
		jQuery.sap.log.info('Result is', r);
	}
});