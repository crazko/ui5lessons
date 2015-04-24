jQuery.sap.declare("myapp.util.Formatter");

myapp.util.Formatter = {
	status: function(sType) {
		return (sType === 'New') ? 'Success' : 'Warning';
	},

	statusIcon: function(sType) {
		return (sType === 'New') ? 'sap-icon://alert' : 'sap-icon://collapse-group';
	},

	statusColor: function(sType) {
		return (sType === 'New') ? 'green' : 'red';
	},

	hasAttachments: function(oAttachments) {
		return (oAttachments) ? true : false;
	}
}