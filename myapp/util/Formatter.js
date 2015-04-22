jQuery.sap.declare("myapp.util.Formatter");

myapp.util.Formatter = {
	status: function(sType) {
		return (sType === 'New') ? 'Success' : 'Warning';
	}
}