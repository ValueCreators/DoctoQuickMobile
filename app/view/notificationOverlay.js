Ext.define('DoctoApp.view.notificationOverlay', {
    extend: 'Ext.Panel',
    xtype: 'notificationOverlay',
    cls : 'notificationOverlayCls',

    // We give it a left and top property to make it floating by default
    left: 0,
    top: 0,

    // Make it modal so you can click the mask to hide the overlay
    modal: true,
    hideOnMaskTap: true,

    // Make it hidden by default
    hidden: true,

    // Here we specify the #id of the element we created in `index.html`
    contentEl: 'content',

    config: {
    	
        items : [
            {
            	itemId : 'registerNameScreenId1',
            	cls : 'registerNameContainerCls bg1',
            	html : '<div class="headerCls"><h2>Thank you</h2></div>'+
                      '<div class="descCls1">Thank you registering Dr.</div>'+
                      '<div class="descCls2">Someone from DoctorQuick will call you back shortlyto help you signup</div>'
            },
            {
                xtype : 'button',
                cls : 'closeBtnCls',
                text : 'Close'
            }

        ]
    }
});
