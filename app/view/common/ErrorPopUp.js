Ext.define('DoctorQuickMobile.view.common.ErrorPopUp', {
    extend: 'Ext.Panel',
    xtype: 'errorPopup',
    config: {
    	
        left : 0,
        right : 0,
        bottom : 0,
        modal: true,
        hideOnMaskTap: true,
    	itemId : 'errorPopupId',
    	cls : 'errorPopClass',
        hidden : true,
        docked : 'bottom',
        html : '<div class="errorPopUpContainerCls"><div class="closeBtnCls" onclick="DoctorQuickMobile.app.getController(\'CommonController\').closeErrorPopUp();"></div><div class="errorMsgCls" ><div><img src="resources/images/warning.png" /></div><div class="error1" id="errorMsgDivId">Invalid Mobile Number</div></div><div id="instructionMsgId" class="message">Please try again later and if problem persists call us directly.</div></div>',    
    }
});
