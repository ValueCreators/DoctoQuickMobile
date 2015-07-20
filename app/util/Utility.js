Ext.define('DoctorQuickMobile.util.Utility', {

	singleton: true,

	getValidFieldValue : function(input) {

		if(input == undefined || input == 'undefined' || input == null || input == 'null' || input == "" || input == "0") {
			return "--"
		} else {
			return input;
		}
	},

	formatDate : function(date) {
		
	    return Ext.Date.format(new Date(date), 'd/M/Y');
	}
});