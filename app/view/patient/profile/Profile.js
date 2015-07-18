Ext.define('DoctorQuickMobile.view.patient.profile.Profile', {
    extend: 'Ext.Panel',
    xtype: 'reviewScreen',
    fullscreen: true,
    config: {
    	itemId : 'patientProfile',
    	cls : 'doctorLoginCls reviewPanelCls',
    	items : [
    				{   
    				    xtype : 'container',
    				    scrollable : true,
    				    itemId : '_patientProfileContainer',
    				    cls : 'reviewPanelContainerCls',
			            tpl : new Ext.XTemplate('{[this.setDetailsData(values)]}', {

			            	setDetailsData : function(docData) {

			            		console.log(docData);
			            		//alert("docData data :: "+JSON.stringify(docData));
								
			            		var fName = DoctorRegister.util.regUtils.getValidField(docData.form1Fields['fName']);
			            		var lName = DoctorRegister.util.regUtils.getValidField(docData.form1Fields['lName'])

								var html = 

								'<div class="profileScreenPicContainerCls">';
								  /*
								  * HardCoded Profile Pic. It has to be changed.
								  */
								  var profilePicContainer = '<div class="profilePicDiv"></div>';

								  if(DoctorRegister.app.getController('MainController').picBase64Data1 != "") {
        								profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+DoctorRegister.app.getController('MainController').picBase64Data1+'\')"></div>';
        
							      } else if(DoctorRegister.app.getController('MainController').picBase64Data2 != "") {
							        profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+DoctorRegister.app.getController('MainController').picBase64Data2+'\')"></div>';
							        
							        
							      } else if(DoctorRegister.app.getController('MainController').picBase64Data3 != "") {
							        profilePicContainer = '<div class="profilePicDiv" style="background-image : url(\'data:image/jpeg;base64,'+DoctorRegister.app.getController('MainController').picBase64Data3+'\')"></div>';
							      }


								  html += profilePicContainer+
								  //'<div class="nameContainerCls">Dr. Jaganath Reddy bdnsfdfh sdjd fh</div>'+
								  '<div class="nameContainerCls" style="margin-top : 4%;">Dr '+fName+' '+lName+'</div>'+
								  /*
								  *  HardCoded starts and review count. It has to be changed.
								  */
								  /*'<div style="margin-left: 7%;width: calc(100% - 72px - 10%);float: left;">'+
										'<div style="float: left;">'+
											'<img src="resources/images/star_small.png" />'+
											'<img src="resources/images/star_small.png" />'+
											'<img src="resources/images/star_small.png" />'+
											'<img src="resources/images/star_small.png" />'+
											'<img src="resources/images/star_small.png" />'+
									  '</div>'+
									  '<div style="margin-top: 0%;display: inline-block;font-size: 0.7em;">(27 reviews)</div>'+
									'</div>'+*/

								'</div>'+
								'<div class="dataContainer">';

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

								var practiseYear = DoctorRegister.util.regUtils.getValidField(docData.form2Fields['practiceSinceYear']);
								try {

									if(practiseYear) {
										practiseYear = practiseYear.getFullYear();
									}
								} catch(e) {
									console.log("Error while formatting the practise year");
								}
								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Degrees</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form1Fields['degrees']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Practicing Since</div>'+
													'<div class="value">' + practiseYear + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">DOB</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.formatDate(DoctorRegister.util.regUtils.getValidField(docData.form1Fields['dob'])) + '</div>'+
											'</div>'+
										'</div>';	

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Address 1</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form2Fields['addr1']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Address 2</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form2Fields['addr2']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">City</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form2Fields['city']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">State</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form2Fields['state']) + '</div>'+
											'</div>'+
										'</div>';	

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Email</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form2Fields['emailId']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Mobile Number</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form2Fields['mobileNum']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Known Languages</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form2Fields['knowLaunguages']) + '</div>'+
											'</div>'+
										'</div>';	

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Bank Name</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form2Fields['bankName']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">IFSC Code</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form2Fields['ifscCode']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Account Number</div>'+
													'<div class="value">' + DoctorRegister.util.regUtils.getValidField(docData.form2Fields['acctNum']) + '</div>'+
											'</div>'+
										'</div>';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Consulting Fees</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form2Fields['feesDesired']) + '</div>'+
											'</div>'+
										'</div>';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Specialities</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form2Fields['specialist']) + '</div>'+
											'</div>'+
										'</div>';

								html += '<div class="groupFieldsContainer">'+
											'<div class="dataRow">' +
													'<div class="field">Medical Council Membership</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form2Fields['membership']) + '</div>'+
											'</div>'+
											'<div class="dataRow">' +
													'<div class="field">Medical Council number</div>'+
													'<div class="value">' +  DoctorRegister.util.regUtils.getValidField(docData.form2Fields['membershipNo']) + '</div>'+
											'</div>'+
										'</div>';
								/*for (var item in docData.form1Fields){

									console.log('items---',item);
									html += '<div class="dataRow">' +
													'<div class="field">' + item + '</div>'+
													'<div class="value">' + docData.form1Fields[item] + '</div>'+
											'</div>';
								}
								for (var item2 in docData.form2Fields) {
									html += '<div class="dataRow">'+
													'<div class="field">' + item2 + '</div>'+
													'<div class="value">' + docData.form2Fields[item2]+ ' </div>' +
												'</div>';
								} */  		

								html += '</div>';
								return html;
			            	}
			            })
			        }
			    ]
    		}
});

