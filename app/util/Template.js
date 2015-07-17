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