Ext.define('DoctorQuickMobile.view.patient.other.SearchDoctors', {
				
	extend: 'Ext.Container',
	xtype: 'searchDoctorsView',

	config: {
				cls : 'searchDoctorsViewCls',
				itemId : 'searchDoctorsViewId',
				layout: 'card',
				items : [
				         
				         		{
				         			xtype : 'container',
				         			itemId : 'searchForm',
				         			cls : 'searchFormCls',
				         			layout : 'vbox',
				         			items : [
				         			         	{
				         			         		xtype : 'button',
				         			         		itemId : 'nameSearchBtn',
								         			cls : 'nameSearchBtnCls',
								         			html : '<span>4</span> <span>Search By Name</span>'
				         			         	},
				         			         	{
				         			         		xtype : 'button',
				         			         		itemId : 'categorySearchBtn',
								         			cls : 'categorySearchBtnCls revealCls',
								         			html : '<span>4</span> <span>Search By,</span>'
				         			         	},
				         			         	{
				         			         		xtype : 'container',
				         			         		itemId : 'categorySearchForm',
								         			cls : 'categorySearchFormCls',
								         			hidden : false,
								         			items : [
																{
																	 xtype : 'list',
																	 itemId : 'searchCategoryList',
																	 cls: 'searchCategoryListCls',
																	 selectedCls : '',
																	 itemTpl : '{title}',
																	 docked : 'top',
																	 scrollable: false,
																	 data : [
																	         {
																	        	 id : 'speciality',
																	        	 title : 'Speciality'
																	         },
																	         {
																	        	 id : 'language',
																	        	 title : 'Language'
																	         },
																	         {
																	        	 id : 'gender',
																	        	 title : 'Gender'
																	         }
																	        ]
																},
																{
																	xtype : 'toolbar',
																	cls : 'searchFormActionBtnsBarCls',
																	items : [
																	          {
																	        	  itemId : 'clearBtn',
																	        	  cls: 'clearBtnCls',
																	        	  text : 'Clear'
																	          },
																	          {
																	        	  xtype: 'spacer'
																	          },
																	          {
																	        	  itemId : 'searchBtn',
																	        	  cls: 'searchBtnCls',
																	        	  text : 'Search'
																	          }
																	        ]
																	
																}
								         			        ]
				         			         	}
				         			        ]
				         		},
				         		{
				         			xtyep : 'container',
				         			itemId : 'searchResultsView',
				         			cls : 'searchResultsViewCls',
				         			items : [
				         			         {
				         			        	xtype: 'searchfield',
				         			        	itemId : 'docName_searchField',
				         			        	cls : 'docName_searchFieldCls',
				         			        	placeHolder : 'Search'
				         			         },
				         			         {  
				         			        	xtype : 'component',
				         			        	itemId : 'filterDisplayCmp',
				         			        	cls : 'filterDisplayCmpCls',
				         			        	html : 'Cardiologist, Male,  Kannada',
				         			        	hidden : true
				         			         },
				         			         {
												 xtype : 'list',
												 itemId : 'docSearchList',
												 cls: 'docSearchListCls',
												 store : 'DoctorSearchResultStore',
												 selectedCls : '',
												 itemTpl : patient_templates.doctorItemTpl,
				         			         }
				         			        ]
				         		}
						]
			}
});