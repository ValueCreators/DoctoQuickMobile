/**
 * 
 */
Ext.define('DoctorQuickMobile.view.doctor.SlideMenu', {
			
	extend: 'Ext.List',
	xtype: 'doctor_slideMenu',
	requires : ['Ext.data.Store'],
	hideOnMaskTap: true,
	modal: true,
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