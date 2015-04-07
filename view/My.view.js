sap.ui.jsview('myapp.view.My', {
	createContent: function(oController) {
		var settings = {
			text: 'My Button',
			icon: 'sap-icon://popup-window'
		}

		var oButton = new sap.ui.commons.Button('myButton', settings);

		oButton.attachPress(this.openConfirm);

		return oButton;
	},

	openConfirm: function() {
		sap.ui.commons.MessageBox.confirm('Some message text', fnCallback, 'Alert title');

		function fnCallback(result) {
			jQuery.sap.log.info('Result is', result);
		}
	}
});