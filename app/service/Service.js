Ext.define('DoctoApp.data.Service', {

	singleton: true,
	
	serviceUrl : 'http://192.168.1.3:8000/',
//	serviceUrl : 'http://52.25.74.102/',

	makeServerReqest : function(node_route, reqObj, successCallback, errorCallback, scope) {

		Ext.Ajax.request({
		    
		    url : this.serviceUrl + node_route,
		    method : 'POST',
		    params : reqObj,
			useDefaultXhrHeader : false,
		    
		    success : function (response) {
		    	
		    	//If the server is sending non JSON, string call error callback with invalid response
		    	try{
		    		var responseObj = JSON.parse(response.responseText);
		    	}catch(e){
		    		errorCallback.apply(this, ['Invalid Response']);
		    		return;
		    	}

		    	successCallback.apply(this, [responseObj]);
		    },
		    failure: function(response) {
		    	
		    	//If the server is sending non JSON, string call error callback with invalid response
		    	try{
		    		var responseObj = JSON.parse(response.responseText);
		    	}catch(e){
		    		errorCallback.apply(this, ['Invalid Response']);
		    		return;
		    	}
		    	
		    	errorCallback.apply(this, [responseObj]);
		    }
		});
	}
});