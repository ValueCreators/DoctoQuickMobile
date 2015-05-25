Ext.define('DoctorQuickMobile.data.DataService', {

	singleton: true,

	doDoctorLogin : function(mobile, password, successCallback, failureCallback, scope){
		
		var node_route = "loginDoctor";
		var reqObj = {
				mobile : mobile,
				password : password 
		};
		DoctorQuickMobile.data.Service.makeServerReqest(node_route, reqObj, successCallback, failureCallback, scope);
	},
	
	doDoctorRegistration : function(firstName, middleName, lastName, email, mobile, successCallback, failureCallback, scope){
	
		var node_route = "registerDoctor";
		var reqObj = {
				firstName : firstName,
				middleName : middleName,
				lastName : lastName,
				email : email,
				mobile : mobile 
		};
		DoctorQuickMobile.data.Service.makeServerReqest(node_route, reqObj, successCallback, failureCallback, scope);
	}
});