$(function() {
		$.widget("custom.extHorizontalSocial", {
			// default options
			options : {
				shareUrl : '',
				shareDesc : '',
				shareTitle : '',
				shareImage : '',
				isFB:true,
				isTW:false,
				isGP:false,
			},
			
			setOptions:function(options){
				this.options=options;
			},
			
			// the constructor
			_create : function() {
				this.element.addClass(this.options.cssClass);
				if(this.options.isFB){
					$('<li>').html(
							$('<div class="iconPortion">').html(
							$('<a>').bind("click",function(){
								javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');return false;
							}).attr({
			                    'href' : 'https://www.facebook.com/sharer/sharer.php?u='+this.options.shareUrl			                    
			                }).html(
			                		$('<img>').attr({
			                			'src':'./images/facebook.png'})).append(
			                					$('<span class="SocialTitle">Facebook</span>')
			                ))).appendTo(this.element);
				}
				if(this.options.isTW){
					$('<li>').html(
					$('<div class="iconPortion">').html(
					$('<a>').bind("click",function(){
						javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');return false;
					}).attr({
	                    'href' : 'https://twitter.com/share?url='+this.options.shareUrl,
	                    'data-size':'large'
	                }).html(
	                		$('<img>').attr({
	                			'src':'./images/twitter.jpeg'})).append(
	                					$('<span class="SocialTitle">Twitter</span>')
	                ))).appendTo(this.element);
				}
				if(this.options.isGP){
					$('<li>').html(
					$('<div class="iconPortion">').html(
					$('<a>').bind("click",function(){
						javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');return false;
					}).attr({
						'href': 'https://plus.google.com/share?url='+this.options.shareUrl	                    
	                }).html(
	                		$('<img>').attr({
	                			'src':'https://www.gstatic.com/images/icons/gplus-64.png'})).append(
	                					$('<span class="SocialTitle">Google Plus</span>')
	                ))).appendTo(this.element);
				}
			},

						
			//Destroys the Social plugin.
			_destroy : function() {

			},
			
			
		});
	});
		