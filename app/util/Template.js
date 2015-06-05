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
		
};

var patient_templates = {
		
}