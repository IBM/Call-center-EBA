scDefine(["scbase/loader!dojo/_base/declare",
"scbase/loader!extn/home/HomeExtnUI",
"scbase/loader!dojo/_base/lang",
"scbase/loader!dojo/on",
"scbase/loader!sc/plat/dojo/utils/BaseUtils",
"scbase/loader!isccs/utils/UIUtils",
"scbase/loader!sc/plat/dojo/utils/ModelUtils",
"scbase/loader!sc/plat/dojo/utils/ScreenUtils",
"scbase/loader!isccs/utils/OrderUtils"
]
,
function(			 
			    _dojodeclare
			 ,
			    _extnHomeExtnUI,
				dLang,
							_on,
							_scBaseUtils,
							_isccsUIUtils,
							_scModelUtils,
							_scScreenUtils,
							_isccsOrderUtils 
){ 
	return _dojodeclare("extn.home.HomeExtn", [_extnHomeExtnUI],{
		ebaSetup: function() {		
				var Code = _scScreenUtils.getModel(this,"extn_AccessKey");
				IBM_EBA.setup({
				    access_token: Code.GetProperty.PropertyValue)
				    agent_name: 'Expert Assistant',
					disable_button: false,
					disable_shadow: true
				})
		},
		handleMashupOutput: function (
		mashupRefId, modelOutput, mashupInput, mashupContext, applySetModel) {
        if (
                _scBaseUtils.equals(
                mashupRefId, "getEnvPropertyID")) {                        /* Mashup to get code */
                    if(modelOutput && modelOutput.GetProperty && modelOutput.GetProperty.PropertyValue){
                        _scModelUtils.getStringValueFromPath("GetProperty.PropertyValue", modelOutput);
						_scScreenUtils.setModel(currentPopupScreen, "extn_AccessKey", modelOutput,null);
						currentPopupScreen.ebaSetup()

                    }
                }		
	},
	getCode: function(){
				var propertyName="accessKey";
				var getPropertyInput = _scModelUtils.createNewModelObjectWithRootKey("GetProperty");
				_scModelUtils.setStringValueAtModelPath("GetProperty.PropertyName", propertyName, getPropertyInput);
				_isccsUIUtils.callApi(currentPopupScreen, getPropertyInput, "getEnvPropertyID");
			},
	openOrderDetailsPopup: function (screen,targetModel) {
			_scBaseUtils.removeBlankAttributes(targetModel);
			currentPopupScreen.openOrderSummaryPopup(event, targetModel,screen);
		},
	openOrderSummaryPopup: function(event, orderArgs,screen) {
		var isPopup = true;
		var item = orderArgs;
		isPopup = _scScreenUtils.isPopup(screen);
		if (!(_scBaseUtils.equals(true, isPopup))) {
			var detailsScreen = "isccs.order.wizards.orderSummary.OrderSummaryWizard";
			if (!(_scBaseUtils.isVoid(detailsScreen))) {
				var order = null;
				order = _scModelUtils.createNewModelObjectWithRootKey("Order");
				_scModelUtils.addModelObjectAsChildToModelObject("Order", item, order);
				order = _isccsOrderUtils.getEditorInputForOrder(order);
				_isccsOrderUtils.openOrder(screen, orderArgs);
			}
		}
	},
        LoadEBA: function() {
			currentPopupScreen = this;
			currentPopupScreen.getCode();   
}
});
});

