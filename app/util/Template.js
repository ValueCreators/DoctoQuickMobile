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

var patient_templates = {
		
		profileContainerTpl : new Ext.XTemplate('{[this.setDetailsData(values)]}', {

			            	setDetailsData : function(data) {

			            		console.log(data);
			            		//alert("docData data :: "+JSON.stringify(docData));
								var _util = DoctorQuickMobile.util.Utility;

			            		var fName = _util.getValidFieldValue(data['fName']);
			            		var lName = _util.getValidFieldValue(data['lName'])
			            		var mName = _util.getValidFieldValue(data['mName'])
								var html = '<div><div class="profileScreenPicContainerCls">';
								  /*
								  * HardCoded Profile Pic. It has to be changed.
								  */
								  var profilePicContainer = '<div class="profilePicDiv"></div>';

								  if(data['profilePicData'] != "") {
        								profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+docData['profilePicData']+'\')"></div>';
        
							      } 

								  html += profilePicContainer+
								  //'<div class="nameContainerCls">Dr. Jaganath Reddy bdnsfdfh sdjd fh</div>'+
								  '<div class="nameContainerCls" style="margin-top : 4%;">Dr '+fName+' '+mName+' '+lName+'</div></div>';
								  
								  
								html += '<div class="dataContainer">';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div field="age" class="field">Age</div>'+
													'<div class="value">' +  data['age'] + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div field="sex" class="field">Gender</div>'+
													'<div class="value">' + data['sex'] + '</div>'+
											'</div>'+
										'</div>';		

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div field="email" class="field">Email</div>'+
													'<div class="value">' +  _util.getValidFieldValue(data['email']) + '</div>'+
											'</div>'+
										'</div>';	

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div field="launguageKnown" class="field">Known Languages</div>'+
													'<div class="value">' + _util.getValidFieldValue(data['knowLaunguages']) + '</div>'+
											'</div>'+
										'</div>';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div field="mobile" class="field">Mobile Number</div>'+
													'<div class="value">' +  _util.getValidFieldValue(data['mobile']) + '</div>'+
											'</div>'+
										'</div>';

								/*html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div field="mobile" class="field">Mobile Number</div>'+
													'<div class="value">' + _util.getValidFieldValue(docData['mobileNum']) + '</div>'+
											'</div>'+
										'</div>';*/

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

var doctor_templates = {
		profileContainerTpl : new Ext.XTemplate('{[this.setDetailsData(values)]}', {

    	setDetailsData : function(docData) {

    		console.log(docData);
    		//alert("docData data :: "+JSON.stringify(docData));
			var _util = DoctorQuickMobile.util.Utility;

    		var fName = _util.getValidFieldValue(docData['fName']);
    		var lName = _util.getValidFieldValue(docData['lName'])
    		var mName = _util.getValidFieldValue(docData['mName'])
			var html = 

			'<div class="profileScreenPicContainerCls">';
			  /*
			  * HardCoded Profile Pic. It has to be changed.
			  */
			  var profilePicContainer = '<div class="profilePicDiv"></div>';

			  if(docData['profilePicData'] != "") {
					profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+docData['profilePicData']+'\')"></div>';

		      } 

			  html += profilePicContainer+
			  //'<div class="nameContainerCls">Dr. Jaganath Reddy bdnsfdfh sdjd fh</div>'+
			  '<div class="nameContainerCls" style="margin-top : 4%;">Dr '+fName+' '+mName+' '+lName+'</div>';
			  
			  var rating = docData['rating'];

			  var ratingRoundedOff = Math.round(rating);

			  var ratingStarsContainer = '<div style="margin-left: 7%;width: calc(100% - 72px - 10%);float: left;">'+
											'<div style="float: left;">';
			  for(var i=0; i<ratingRoundedOff; i++) {

			  	if(rating - i == 0.5) {
			  		ratingStarsContainer += '<img src="resources/images/dq_star_small_half_320x480.png" />';
			  	} else {
			  		ratingStarsContainer += '<img src="resources/images/dq_star_small_full_320x480.png" />';
			  	}
			  }

			  for(var j=0; j< (5-ratingRoundedOff); j++) {
			  	ratingStarsContainer += '<img src="resources/images/dq_star_small_empty_320x480.png" />';
			  }

			  ratingStarsContainer += '</div>'+
										  '<div style="margin-top: 0%;display: inline-block;font-size: 0.7em;">(27 reviews)</div>'+
										'</div>'+

									'</div>';
			html += ratingStarsContainer; 

			html += '<div class="dataContainer">';

			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="firstName" class="field">First Name</div>'+
								'<div class="value">' +  fName + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="middleName" class="field">Middle Name</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['mName']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="lastName" class="field">Last Name</div>'+
								'<div class="value">' + lName + '</div>'+
						'</div>'+
					'</div>';	

			var practiseYear = _util.getValidFieldValue(docData['practiceSinceYear']);
			
			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="degrees" class="field">Degrees</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['degrees']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="practiseSinceYear" class="field">Practicing Since</div>'+
								'<div class="value">' + practiseYear + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="dob" class="field">DOB</div>'+
								'<div class="value">' + _util.formatDate(_util.getValidFieldValue(docData['dob'])) + '</div>'+
						'</div>'+
					'</div>';	

			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="address1" class="field">Address 1</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['addr1']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="address2" class="field">Address 2</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['addr2']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="city" class="field">City</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['city']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="state" class="field">State</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['state']) + '</div>'+
						'</div>'+
					'</div>';	

			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="email" class="field">Email</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['emailId']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="mobile" class="field">Mobile Number</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['mobileNum']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="launguageKnown" class="field">Known Languages</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['knowLaunguages']) + '</div>'+
						'</div>'+
					'</div>';	

			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="bankName" class="field">Bank Name</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['bankName']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="ifscCode" class="field">IFSC Code</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['ifscCode']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="accountNumber" class="field">Account Number</div>'+
								'<div class="value">' + _util.getValidFieldValue(docData['acctNum']) + '</div>'+
						'</div>'+
					'</div>';

			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="fees" class="field">Consulting Fees</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['feesDesired']) + '</div>'+
						'</div>'+
					'</div>';

			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="specialist" class="field">Specialities</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['specialist']) + '</div>'+
						'</div>'+
					'</div>';

			html += '<div class="groupFieldsContainer">'+
						'<div class="dataRow">' +
								'<div field="medicalCouncilMembership" class="field">Medical Council Membership</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['membership']) + '</div>'+
						'</div>'+
						'<div class="dataRow">' +
								'<div field="memberShipNumber" class="field">Medical Council number</div>'+
								'<div class="value">' +  _util.getValidFieldValue(docData['membershipNo']) + '</div>'+
						'</div>'+
					'</div>';		

			html += '</div>';
			return html;
    	}
    }),

	notesContainerTpl : new Ext.XTemplate('{[this.setDetailsData(values)]}', {

    	setDetailsData : function(data) {

    		console.log(data);
    		//alert("docData data :: "+JSON.stringify(docData));
			var _util = DoctorQuickMobile.util.Utility;

    		var fName = _util.getValidFieldValue(data['fName']);
    		var lName = _util.getValidFieldValue(data['lName'])
    		var mName = _util.getValidFieldValue(data['mName'])
			var html = '<div><div class="profileScreenPicContainerCls">';
			  
			var profilePicContainer = '<div class="profilePicDiv"></div>';
			    if(data['profilePicData'] != "") {
				profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+docData['profilePicData']+'\')"></div>';
		    } 

		    var timeAndDateContainer = '<div style="margin-left: 7%;width: calc(100% - 72px - 10%);float: left;">'+
											'<div style="float: left; font-size : 0.65em; padding-top : 2%;">'+
												data["time"] + ' on ' + data["date"] +
			  								'</div>'+
										'</div>';
			html += profilePicContainer+'<div class="nameContainerCls" style="margin-top : 4%;">Dr '+fName+' '+mName+' '+lName+'</div>'+timeAndDateContainer+'</div>';


			html +=					'</div>';

			html += '<div class="notesInfoText">After completing the diagnosis, tests recommended and medication sections the results will be sent to your patient as an attachment in the messages</div>'

			html += '<div class="notesSection">	'+
						'<div class="section">'+
							'<div class="floatLeft sectionName">Diagnosis</div>'+
							'<div class="floatLeft"><img id="diagnosisTick" src="resources/images/480x854/dq_tick_incircle_off_480x854.png"></div>	'+
							'<div style="overflow: hidden;" onclick="DoctorQuickMobile.app.getController(\'doctor.NotesController\').showNotesSubView(1);"><img class="floatRight" src="resources/images/480x854/dq_arrow_grey_forward_480x854.png"></div>'+
						'</div>'+
						'<div class="section">'+
							'<div class="floatLeft sectionName">Tests Recommended</div>'+
							'<div class="floatLeft"><img id="testsTick" src="resources/images/480x854/dq_tick_incircle_off_480x854.png"></div>	'+
							'<div style="overflow: hidden;" onclick="DoctorQuickMobile.app.getController(\'doctor.NotesController\').showNotesSubView(2);"><img class="floatRight" src="resources/images/480x854/dq_arrow_grey_forward_480x854.png"></div>'+
						'</div>'+
						'<div class="section">'+
							'<div class="floatLeft sectionName">Medication</div>'+
							'<div class="floatLeft"><img id="medicationTick" src="resources/images/480x854/dq_tick_incircle_off_480x854.png"></div>	'+
							'<div style="overflow: hidden;" onclick="DoctorQuickMobile.app.getController(\'doctor.NotesController\').showNotesSubView(3);"><img class="floatRight" src="resources/images/480x854/dq_arrow_grey_forward_480x854.png"></div>'+
						'</div>'+
					'</div>';

			var buttonsContainer =  '<div class="notesBtnContainerCls">'+
										'<div class="width70 chargeBtnDivCls"><input type="button" class="notesBtnCls chargeBtnCls" value="Complete & charge"></div>'+
										'<div class="width70 noChargeBtnDivCls"><input type="button" class="notesBtnCls noChargeBtnCls" value="Complete without charge"></div>'+
									'</div>';

			html += buttonsContainer + '</div>';
			return html;
    	}
    }),

	notesOtherContainersTpl : new Ext.XTemplate('{[this.setDetailsData(values)]}', {

    	setDetailsData : function(data) {

    		console.log(data);
    		//alert("docData data :: "+JSON.stringify(docData));
			var _util = DoctorQuickMobile.util.Utility;

    		var fName = _util.getValidFieldValue(data['fName']);
    		var lName = _util.getValidFieldValue(data['lName'])
    		var mName = _util.getValidFieldValue(data['mName'])
			var html = '<div class="notesSubContainerDataCls"><div class="profileScreenPicContainerCls">';
			  
			var profilePicContainer = '<div class="profilePicDiv"></div>';
			    if(data['profilePicData'] != "") {
				profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+docData['profilePicData']+'\')"></div>';
		    } 

		    var timeAndDateContainer = '<div style="margin-left: 7%;width: calc(100% - 72px - 10%);float: left;">'+
											'<div style="float: left; font-size : 0.65em; padding-top : 2%;">'+
												data["time"] + ' on ' + data["date"] +
			  								'</div>'+
										'</div>';
			html += profilePicContainer+'<div class="nameContainerCls" style="margin-top : 4%;">Dr '+fName+' '+mName+' '+lName+'</div>'+timeAndDateContainer+'</div>';


			var btnsContainer = '<div class="buttonsParentDiv">'+
								    '<div class="floatLeft" style="padding: 0% 6%;""><input class="noteSubContBtnCls" type="button" value="Clear"></div>'+
								    '<div class="floatRight" style="padding: 0% 6%;"><input class="noteSubContBtnCls" style="color : black;" type="button" value="Done"></div>'+
								'</div>';

			html +=		btnsContainer +	'</div>';


			html +=   '</div>';

			html += '<div class="notesEditableDivCls"></div>';
			return html;
    	}
    }),
}