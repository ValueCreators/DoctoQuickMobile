Ext.define('DoctorQuickMobile.controller.patient.SearchDocController',{
				
	extend: 'Ext.app.Controller',    
	config:{
				refs:{
						slideMenu : 'patient_slideMenu',
						searchDoctorsView :'searchDoctorsView',
							
						searchByNameBtn : 'searchDoctorsView #searchForm #nameSearchBtn',
						categoryList : 'searchDoctorsView #searchForm #searchCategoryList',
						clearBtn : 'searchDoctorsView #searchForm #clearBtn',
						searchBtn : 'searchDoctorsView #searchForm #searchBtn',
						
						mainPanelContainer : 'patient_mainPanel panel#_mainPanelContainer',
						mainPanelToolbarId : 'patient_mainPanel toolbar#mainPanelToolbarId',
						docProfileContainer : 'doctorProfileView container#_doctorProfileViewContainer',
				},
				control : {
					searchByNameBtn : { tap : 'doSearchByName', scope : this},
					categoryList : { itemtap : 'categoryListTapHandler', scope : this},
					clearBtn : { tap : 'doClear', scope : this},
					searchBtn : { tap : 'doSearchByCategory', scope : this},
					'searchDoctorsView #searchResultsView #docSearchList' : { itemtap : "onDoctorSelect", scope : this },
				}
	},
	
	init : function(){
		this.slideMenuController = DoctorQuickMobile.app.getController("patient.SlideMenuController");
	},
	showSearchDocView : function(){
		
		this.getMainPanelContainer().setActiveItem('searchDoctorsView');
       	this.getMainPanelToolbarId().setTitle("Search All Doctors");
	},
	categoryListTapHandler : function(me, index, target, record, e, eOpts ){
		
		console.log('inside list tap handler');
		var category = this.getCategoryList().getData()[index].id;
		
		this.slideMenuController.slideMenuOpen(category);
	},
	onDoctorSelect : function(me, index, target, record, e, eOpts ) {

		console.log(record.getData());

	   	this.getMainPanelContainer().setActiveItem('doctorProfileView');
       	this.getMainPanelToolbarId().setTitle("Doctor Profile");
       	this.getDocProfileContainer().setData(record.getData());
	},
	doSearchByName : function(){
		this.getSearchDoctorsView().setActiveItem(1);
		this.getSearchDoctorsView().down('#docName_searchField').focus();
	},
	doClear : function(){
		
	},
	doSearchByCategory : function(){
		this.getSearchDoctorsView().setActiveItem(1);
	}
});