scDefine(["scbase/loader!dojo/_base/declare",
	"scbase/loader!extn/home/portlets/OrderPortletExtnUI",
	"scbase/loader!isccs/utils/EventUtils",
    "scbase/loader!sc/plat/dojo/utils/ResourcePermissionUtils",
    "scbase/loader!sc/plat/dojo/utils/BaseUtils",
    "scbase/loader!sc/plat/dojo/utils/ModelUtils",
    "scbase/loader!sc/plat/dojo/utils/PlatformUIFmkImplUtils"	]
,
function(			 
			    _dojodeclare,
			    _extnOrderPortletExtnUI,
			    isccsEventUtils,
			    _scResourcePermissionUtils,
			    _scBaseUtils,
			    _scModelUtils,
			    _scPlatformUIFmkImplUtils
){ 
	return _dojodeclare("extn.home.portlets.OrderPortletExtn", [_extnOrderPortletExtnUI],{
	// custom code here


	LoadEBA: function(event, bEvent, ctrl, args){
			if (isccsEventUtils.isEnterPressed(event)){
		    var targetModel = null;
			targetModel = _scBaseUtils.getTargetModel(this, "getOrderList", null);
			var enterpriseCode=_scModelUtils.getStringValueFromPath("Order.EnterpriseCode",targetModel);
			var emailID = _scModelUtils.getStringValueFromPath("Order.CustomerEMailID",targetModel);
			var phoneNo = _scModelUtils.getStringValueFromPath("Order.CustomerPhoneNo",targetModel);
			console.log(enterpriseCode)
			console.log(emailID)
			var userId = _scPlatformUIFmkImplUtils.getUserId()			
			
			IBM_EBA.send({
					orderSearchMeta: {
					  userId: userId,
					  EnterpriseCode: enterpriseCode,
					  emailID: emailID,
					  phoneNo:phoneNo
						}
				})
			}
			
	}
});

});

