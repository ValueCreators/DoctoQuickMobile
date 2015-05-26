/**
 * 
 */
Ext.define('DoctorQuickMobile.view.patient.SlideMenu', {
			
	extend: 'Ext.List',
	xtype: 'patient_slideMenu',
	requires : ['Ext.data.Store'],
	config: {
					cls : 'nav-list',
					itemTpl : '{title}',
					data : [
					        {
								title : 'Item 1'
							},
							{
								title : 'Item 2'
							},
							{
								title : 'Item 3'
							}
					]
	}
});