scDefine(["scbase/loader!dojo/_base/declare","scbase/loader!extn/home/portlets/ProductPortletExtnUI"]
,
function(			 
			    _dojodeclare
			 ,
			    _extnProductPortletExtnUI
){ 
	return _dojodeclare("extn.home.portlets.ProductPortletExtn", [_extnProductPortletExtnUI],{
	// custom code here
	load: function(){
	var targetModel = scScreenUtils.getTargetModel(this, "getProductList", null);

	
		alert("Yes!!"+targetModel.Order.Enterprise)
	}
});
});

