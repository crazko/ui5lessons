sap.ui.jsview('myapp.App', {
	createContent: function(oController) {
		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);

		this.app = new sap.m.SplitApp("splitApp", {
			afterDetailNavigate: function(){
				this.hideMaster();
			}
		});

		return this.app;
	}
});