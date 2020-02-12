scDefine(["scbase/loader!dojo/_base/declare","scbase/loader!extn/order/details/OrderSummaryExtnUI","scbase/loader!sc/plat/dojo/utils/ModelUtils","scbase/loader!sc/plat/dojo/utils/ScreenUtils",
"scbase/loader!sc/plat/dojo/utils/PlatformUIFmkImplUtils"]
,
function(			 
			    _dojodeclare
			 ,
			    _extnOrderSummaryExtnUI,
				_scModelUtils,
				_scScreenUtils,
				_scPlatformUIFmkImplUtils
){ 
	return _dojodeclare("extn.order.details.OrderSummaryExtn", [_extnOrderSummaryExtnUI],{
	test: function(event, bEvent, ctrl, args) {
		var orderObject = _scScreenUtils.getModel(this, "getCompleteOrderDetails_output");
		screenInput = _scScreenUtils.getInitialInputData(this);
		var enterpriseCode=_scModelUtils.getStringValueFromPath("Order.EnterpriseCode",screenInput);
		console.log(enterpriseCode)
	},
	try: function(event, bEvent, ctrl, args) {
		var orderObject = _scScreenUtils.getModel(this, "getCompleteOrderDetails_output");
		screenInput = _scScreenUtils.getInitialInputData(this);
		var enterpriseCode=_scModelUtils.getStringValueFromPath("Order.EnterpriseCode",screenInput);
		alert(enterpriseCode)
	},
	OrderSummaryExtn: function(event, bEvent, ctrl, args) { 
		var screenInput = null;
			screenInput = _scScreenUtils.getInitialInputData(
				this);
			var orderNo = _scModelUtils.getStringValueFromPath("Order.OrderNo", screenInput);
			var customerID = _scModelUtils.getStringValueFromPath("Order.BillToID", screenInput);
			var enterpriseCode=_scModelUtils.getStringValueFromPath("Order.EnterpriseCode",screenInput);
			var emailID = _scModelUtils.getStringValueFromPath("Order.CustomerEMailID",screenInput);
			var phoneNo = _scModelUtils.getStringValueFromPath("Order.CustomerPhoneNo",screenInput);
			var userId = _scPlatformUIFmkImplUtils.getUserId()
		//Post the event
		IBM_EBA.send({
			  orderMeta: {
				  orderID: orderNo,
				  emailID:emailID,
				  phoneNo:phoneNo,
				  EnterpriseCode: enterpriseCode,
				  userId: userId
			 }}) 

	}
});
});

