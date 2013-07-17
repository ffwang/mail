(function($){

	//Banner Model

	var BannerModel = Backbone.Model.extend({
		defaults : {
			url : '',
		},
	});

	//Title Model

	var TitleModel = Backbone.Model.extend({
		defaults : {
			title : '',
			color : '',
		},
	});

	//Image Model

	var ImageModel = Backbone.Model.extend({
		defaults : {
			url : '',
		},
	});

	//Text Model

	var TextModel = Backbone.Model.extend({
		defaults : {
			content : '',
		},
	});

	//EditBannerView

	var EditBannerView = Backbone.View.extend({
		tagName : "dl",
		initialize : function(){

		},
	});

	//TableBannerView

	var TableBannerView = Backbone.View.extend({
		tagName : "tr",
		initialize : function(){

		},
	});
})(jQuery);