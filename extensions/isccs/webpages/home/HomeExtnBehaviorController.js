


scDefine(["scbase/loader!dojo/_base/declare","scbase/loader!dojo/_base/kernel","scbase/loader!dojo/text","scbase/loader!extn/home/HomeExtn","scbase/loader!sc/plat/dojo/controller/ExtnServerDataController"]
 , function(			 
			    _dojodeclare
			 ,
			    _dojokernel
			 ,
			    _dojotext
			 ,
			    _extnHomeExtn
			 ,
			    _scExtnServerDataController
){

return _dojodeclare("extn.home.HomeExtnBehaviorController", 
				[_scExtnServerDataController], {

			
			 screenId : 			'extn.home.HomeExtn',
			 	mashupRefs : 	[
		{
		 mashupRefId : 			'extn_eba_getOrderDetails'
,
		 mashupId : 			'extn_eba_getOrderDetails'
,
		 extnType : 			'ADD'

	}
,
	 		{
		 mashupRefId : 			'extn_eba_getSessionDetails'
,
		 mashupId : 			'extn_eba_getSessionDetails'
,
		 extnType : 			'ADD'

	}
,
	 		{
		 mashupRefId : 			'extn_getCompleteOrderDetails'
,
		 mashupId : 			'extn_getCompleteOrderDetails'
,
		 extnType : 			'ADD'

	}
,
	 		{
		 mashupRefId : 			'getEnvPropertyID'
,
		 mashupId : 			'getEnvPropertyID'
,
		 extnType : 			'ADD'

	}

	]

			
			
			
}
);
});

