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
        LoadEBA: function() {
			currentPopupScreen = this;
            IBM_EBA.setup({
					access_token:'',
					agent_name: 'Expert Assistant',
					disable_button: false,
					disable_shadow: true,
					loading_delay: 1000,
					user_first_name: '',
					user_last_name: '',
					user_full_name: ''})
			
      
}
});
});

