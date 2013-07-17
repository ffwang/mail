(function($){

///////////  Banner Start  //////////

	//Banner Model

	var BannerModel = Backbone.Model.extend({
		defaults : {
			url : 'http://url.go4u.cn:9527/201351title',
		},
	});

	//EditBannerView

	var EditBannerView = Backbone.View.extend({
		tagName : "dl",
		box : '',
		template : $("#edit_banner_template").html(),
		events : {
			"blur input" : "setURL",
		},
		initialize : function(options){
			this.model = options.model;
			this.box = options.box;
			this.render();
		},
		render : function(){
			this.$el.html(Mustache.to_html(this.template));
			this.box.append(this.el);
		},
		setURL : function(){
			this.model.set({"url" : this.$el.find("input").val()});
		}
	});

	//TableBannerView

	var TableBannerView = Backbone.View.extend({
		el : $("#table_banner"),
		template : $("#table_banner_template").html(),
		initialize : function(options){
			this.model = options.model;
			this.listenTo(this.model, "change", this.render);
			this.render();
		},
		render : function(){
			if(!this.model.get("url"))
				this.model.set({"url" : "http://url.go4u.cn:9527/201351title"});
			this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
		},
	});

///////////  Banner End  //////////

///////////  Title Start  //////////

	//Title Model

	var TitleModel = Backbone.Model.extend({
		defaults : {
			title : '标题',
			color : '99cc66',
		},
	});

	//EditTitleView

	var EditTitleView = Backbone.View.extend({
		tagName : "dl",
		box : '',
		template : $("#edit_title_template").html(),
		events : {
			"keyup .span2" : "setTitle",
			"change .span1" : "setColor",
		},
		initialize : function(options){
			this.model = options.model;
			this.box = options.box;
			this.render();
		},
		render : function(){
			this.$el.html(Mustache.to_html(this.template));
			this.box.append(this.el);
		},
		setTitle : function(){
			this.model.set({"title" : this.$el.find(".span2").val()});
		},
		setColor : function(){
			this.model.set({"color" : this.$el.find(".span1").val()});
		},
	});

	//TableTitleView

	var TableTitleView = Backbone.View.extend({
		el : $("#table_title"),
		template : $("#table_title_template").html(),
		initialize : function(options){
			this.model = options.model;
			this.listenTo(this.model, "change", this.render);
			this.render();
		},
		render : function(){
			if(!this.model.get("title"))
				this.model.set({"title" : "标题"});
			this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
		},
	});

///////////  Title End  //////////

///////////  Image Start  //////////

	//Image Model

	var ImageModel = Backbone.Model.extend({
		defaults : {
			url : 'http://blog.dnspod.cn/wp-content/uploads/2013/07/nonotice.jpg',
		},
	});

	//EditImageView

	var EditImageView = Backbone.View.extend({
		tagName : "dl",
		box : '',
		template : $("#edit_image_template").html(),
		events : {
			"blur input" : "setURL",
		},
		initialize : function(options){
			this.model = options.model;
			this.box = options.box;
			this.render();
		},
		render : function(){
			this.$el.html(Mustache.to_html(this.template));
			this.box.append(this.el);
		},
		setURL : function(){
			this.model.set({"url" : this.$el.find("input").val()});
		}
	});

	//TableImageView

	var TableImageView = Backbone.View.extend({
		tagName : "tr",
		template : $("#table_image_template").html(),
		initialize : function(options){
			this.model = options.model;
			this.box = options.box;
			this.listenTo(this.model, "change", this.render);
			this.box.append(this.$el.html(Mustache.to_html(this.template, this.model.toJSON())));
		},
		render : function(){
			if(!this.model.get("url"))
				this.model.set({"url" : "http://blog.dnspod.cn/wp-content/uploads/2013/07/nonotice.jpg"});
			this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
		},
	});

///////////  Image End  //////////

///////////  Text Start  //////////

	//Text Model

	var TextModel = Backbone.Model.extend({
		defaults : {
			content : '文字内容',
		},
	});

	//EditTextView

	var EditTextView = Backbone.View.extend({
		tagName : "dl",
		box : '',
		template : $("#edit_text_template").html(),
		events : {
			"keyup textarea" : "setContent",
		},
		initialize : function(options){
			this.model = options.model;
			this.box = options.box;
			this.render();
		},
		render : function(){
			this.$el.html(Mustache.to_html(this.template));
			this.box.append(this.el);
		},
		setContent : function(){
			this.model.set({"content" : this.$el.find("textarea").val()});
		},
	});

	//TableTextView

	var TableTextView = Backbone.View.extend({
		tagName : "tr",
		template : $("#table_text_template").html(),
		initialize : function(options){
			this.model = options.model;
			this.box = options.box;
			this.listenTo(this.model, "change", this.render);
			this.box.append(this.$el.html(Mustache.to_html(this.template, this.model.toJSON())));
		},
		render : function(){
			if(!this.model.get("content"))
				this.model.set({"content" : "文字内容"});
			this.$el.html(Mustache.to_html(this.template, this.model.toJSON()));
		},
	});
	
///////////  Text End  //////////

	 var bannermodel = new BannerModel();
	 new EditBannerView({"model" : bannermodel, "box" : $('#edit_box')});
	 new TableBannerView({"model" : bannermodel});
	 var titlemodel = new TitleModel();
	 new EditTitleView({"model" : titlemodel, "box" : $('#edit_box')});
	 new TableTitleView({"model" : titlemodel});
	 var textmodel = new TextModel();
	 new EditTextView({"model" : textmodel, "box" : $('#edit_box')});
	 new TableTextView({"model" : textmodel, "box" : $('#table_box')});
	 var imagemodel = new ImageModel();
	 new EditImageView({"model" : imagemodel, "box" : $('#edit_box')});
	 new TableImageView({"model" : imagemodel, "box" : $('#table_box')});
	 var textmodel2 = new TextModel();
	 new EditTextView({"model" : textmodel2, "box" : $('#edit_box')});
	 new TableTextView({"model" : textmodel2, "box" : $('#table_box')});

})(jQuery);
