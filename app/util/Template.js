var common_templates = {
		

		menuItemTpl : new Ext.XTemplate(
				'<div class="menuItemWrapCls">'+
				'	<div class="menuIconCls {iconCls}">'+     
				'	</div>'+
				'	<div class="menuTitleCls">'+
				'		{title}'+
				'	</div>'+
				'	<tpl if="showNotifToggle == \'true\'">'+
				'		<div class="notifToggleCls">'+
				'		</div>'+
				'	</tpl>'+
				'</div>'
			)
};

var doctor_templates = {
		
		profileContainerTpl : new Ext.XTemplate('{[this.setDetailsData(values)]}', {

			            	setDetailsData : function(docData) {

			            		console.log(docData);
			            		//alert("docData data :: "+JSON.stringify(docData));
								var _util = DoctorQuickMobile.util.Utility;

			            		var fName = _util.getValidFieldValue(docData['fName']);
			            		var lName = _util.getValidFieldValue(docData['lName'])

								var html = 

								'<div class="profileScreenPicContainerCls">';
								  /*
								  * HardCoded Profile Pic. It has to be changed.
								  */
								  var profilePicContainer = '<div class="profilePicDiv"></div>';

								  if(docData['profilePicData'] != "") {
        								profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+profilePicData+'\')"></div>';
        
							      } 

								  html += profilePicContainer+
								  //'<div class="nameContainerCls">Dr. Jaganath Reddy bdnsfdfh sdjd fh</div>'+
								  '<div class="nameContainerCls" style="margin-top : 4%;">Dr '+fName+' '+lName+'</div>'+
								  
								  var rating = doctData['rating'];

								  var ratingRoundedOff = Math.round(rating);

								  var ratingStarsContainer = '<div style="margin-left: 7%;width: calc(100% - 72px - 10%);float: left;">'+
																'<div style="float: left;">';
								  for(var i=0; i<ratingRoundedOff; i++) {

								  	if(ratingRoundedOff - rating == 0.5) {
								  		ratingStarsContainer += '<img src="resources/images/half_star_small.png" />'+
								  	} else {
								  		ratingStarsContainer += '<img src="resources/images/star_small.png" />'+
								  	}
								  }

								  ratingStarsContainer += '</div>'+
															  '<div style="margin-top: 0%;display: inline-block;font-size: 0.7em;">(27 reviews)</div>'+
															'</div>'+

														'</div>';
								html += ratingStarsContainer; 

								html += '<div class="dataContainer">';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">First Name</div>'+
													'<div class="value">' +  fName + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Middle Name</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form1Fields['mName']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Last Name</div>'+
													'<div class="value">' + lName + '</div>'+
											'</div>'+
										'</div>';	

								var practiseYear = _util.getValidFieldValue(docData['practiceSinceYear']);
								
								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Degrees</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['degrees']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Practicing Since</div>'+
													'<div class="value">' + practiseYear + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">DOB</div>'+
													'<div class="value">' + _util.formatDate(_util.getValidFieldValue(docData['dob'])) + '</div>'+
											'</div>'+
										'</div>';	

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Address 1</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['addr1']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Address 2</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['addr2']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">City</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['city']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">State</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['state']) + '</div>'+
											'</div>'+
										'</div>';	

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Email</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['emailId']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Mobile Number</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['mobileNum']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Known Languages</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['knowLaunguages']) + '</div>'+
											'</div>'+
										'</div>';	

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Bank Name</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['bankName']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">IFSC Code</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['ifscCode']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Account Number</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['acctNum']) + '</div>'+
											'</div>'+
										'</div>';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Consulting Fees</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['feesDesired']) + '</div>'+
											'</div>'+
										'</div>';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Specialities</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['specialist']) + '</div>'+
											'</div>'+
										'</div>';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Medical Council Membership</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['membership']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Medical Council number</div>'+
													'<div class="value">' +  _util.getValidFieldValue(docData['membershipNo']) + '</div>'+
											'</div>'+
										'</div>';		

								html += '</div>';
								return html;
			            	}
			            }),

		requestPendingItemTpl : new Ext.XTemplate(
				'<div class="menuItemWrapCls clearfix">'+
				'	<div class="profileImgCls">'+ 
				'		<img src="./resources/images/dq_icon_small_mydoctors.png">'+    
				'	</div>'+
				'	<div class="descriptionCls">'+
				'		<div class="menuTitleCls">'+
				'			<label>FirstName</label> <label>last nsmr</label>'+
				'		</div>'+
				'		<div class="ageGenderCls">'+
				'     		<label>Male,</label><label> Age 36</label>'+
				'   	</div>'+
				'   	<div class="locationCls">'+
				'			<label>Region or Location </label>'+
				'   	</div>'+
				'	</div>'+
				'   <img class="nextArrowIconCls" src="./resources/images/arrow_grey.png">'+
				'</div>'
			)
};

var patient_templates = {
		
}