Vue.component('slidercaption',{
    template: '<div class="slider-caption" :class="renderClass" v-html="slider.html"></div>',
    props: ['slider','index'],
    computed: {
    	renderClass: function(){

    		let slider = this.slider;
    		let position;
    		if(typeof slider.position == "undefined" || !slider.position){
        		position = "left";
        	}else{
        		 position = slider.position;
        	}

        	let position_class = "slider-caption-left";
        	
        	switch(position){
        		case "center":
        			position_class = "slider-caption-center";
        		break;
        		case "left":
        			position_class = "slider-caption-left";
        		break;
        		case "right":
        			position_class = "slider-caption-right";
        		break;
        	}

        	return [position_class];
    	}
    }
})

Vue.component('slider', {	
  template: `<div class="swiper-container swiper-parent">
				<div class="swiper-wrapper">
					<div v-for="(slider,index) in sliders" class="swiper-slide dark" :style="{'background-image': 'url(' + slider.image + ')'}">
						<div v-if="typeof slider.overlayStyle === 'object'" class="overlay" :style="slider.overlayStyle"></div>
						<div class="container clearfix">
							<slidercaption v-if="!usefirstcaption" :slider="slider" :index="index"></slidercaption>							
						</div>
					</div>	
					
				</div>
				<div v-if="(totalsliders > 1)" class="slider-arrow-left"><i class="icon-angle-left"></i></div>
				<div v-if="(totalsliders > 1)" class="slider-arrow-right"><i class="icon-angle-right"></i></div>
			</div>`,
  props: ['sliders','usefirstcaption'],
  computed:{
  	totalsliders:function(){
  		// console.log(this.usefirstcaption)
  		// return "AAA";
  		// console.log(this.sliders.length);
  		return this.sliders.length;
  	}
  }
});

Vue.component('whatwedo', {	
  template: `<div class="section nopadding nomargin bg-white" :class="[addonclass]">
					<div class="container-fluid" style="max-width: 1300px;">
						<div class="row"> 

							<div v-for="(info,index) in list" class="col-md-6 col-lg-4 binhong-iconbox">
								<div class="row m-auto">
									<div class="binhong-icon center mb-3 mb-md-0 col-md-3 nopadding d-lg-flex align-items-center justify-content-center">
										<img  :src="info.icon">
									</div>
									<div class="col-md-9">
										<h3 class="text-center text-md-left">{{info.title}}</h3>
										<p class="nomargin text-justify-last-center text-md-justify-last-left text-md-justify font-small">{{info.des}}</p>
									</div>
								</div>	
																
							</div>	

						</div>
						<div class="clear"></div>
					</div>	
				</div>`,
  props: ['addonclass','list'],
});

Vue.component('aboutus', {	
  template: `<div class="section nomargin" style="background: #f8f8f8" >
				<div class="container">
					<div class="row align-items-center">
						
						<div class="col-md-6 mt-3 mt-md-0 order-md-2 mb-5 mb-md-0 pd-on-sm">
							<div class="about-pic binhong-pic-shadow">
								<img :src="image">
							</div>								
						</div>

						<div class="col-md-6">
							<blockquote class="noborder nopadding mb-3">
								<h3 class="nomargin ls0" v-html="blockquote"></h3>									
							</blockquote>
							<h3 class="mb-2 title-big">{{title}}</h3>
							<p class="nomargin text-justify font-bigger ls1">{{description}}</p>
							<div v-if="link" class="mt-3">
								<a :href="link" class="button nomargin">嘹解更多</a>	
							</div>	
						</div>
						
					</div>
				</div>
			</div>`,
  props: ['image','blockquote','title','description','link'],
});

Vue.component('aboutus-two', {	
  template: `<div class="section nomargin" style="background: #f8f8f8" >
				<div class="container">
					<div class="row align-items-center">
						
						<div class="col-md-6 mt-3 mt-md-0 order-md-2 mb-5 mb-md-0 pd-on-sm">
							<div class="about-pic binhong-pic-shadow">
								<img :src="image">
							</div>								
						</div>

						<div class="col-md-6">
							<img :src="logo" class="mb-5" style="width:400px;">
							<h3 class="mb-3 title-big">{{title}}</h3>
							<blockquote class="noborder nopadding mb-3">
								<h3 class="nomargin ls0" v-html="blockquote"></h3>									
							</blockquote>							
							<p class="nomargin text-justify font-bigger ls1">{{description}}</p>
							<div v-if="link" class="mt-3">
								<a :href="link" class="button nomargin">嘹解更多</a>	
							</div>	
						</div>
						
					</div>
				</div>
			</div>`,
  props: ['image','blockquote','title','description','link',"logo"],
});

Vue.component('service', {	
  template: `<div  class="section nomargin bg-white" :style="thestyle()">
					<div class="container">
						<h3 class="mb-5 title-big">{{title}}</h3>
						<div class="row nomargin">
							<div v-for="(service,index) in services" class="col-md-4 bin-icon-box mb-2 mb-md-0" :class="{active: service.isActive}" @click="activeToogle(service,index)" >
								
								<div class="mb-3">
									<div v-html="icon(service.icon)"></div>
								</div>
								<div>
									<h4 class="mb-2 ls1">{{service.title}}</h4>
									<p class="mb-3 text-justify font-big">{{service.description}}</p>
								</div>
								<a class="know-more" :href="service.link">瞭解更多 <i class="icon-angle-right"></i></a>
							</div>
						</div>						
					</div>
				</div>`,
  props: ['title','services'],
  methods:{
  		thestyle:function(){
  			return {
				'background-image':'url(images/world.svg)',
				'background-position':'center',
				'background-size':'cover',
			};
  		},
		activeToogle:function(service,index){
			
			for (let i = 0; i < this.services.length; i++) {
				this.services[i].isActive = false;
			}

			this.services[index].isActive = true;
		},
		icon(type){
			return icon(type);
		}
	}
});

Vue.component('service-iconlist', {	
  template: `<div class="section nomargin" style="background: #f8f8f8" >
					<div class="container">
						<div v-for="(service,index) in services" class="row binhong-service-box mb-5 shadow">
							<div class="col-lg-6 p-lg-0" >
								<div class="overlay d-none d-lg-block" style="background-size: cover;" :style="{'background-image':'url('+service.cover+')'}"></div>
								<img :src="service.cover" class="d-lg-none" style="width:100%;">
							</div>
							<div class="col-lg-6 p-lg-0">
								<div class="binhong-service-icon-box p-3 p-lg-4">
									<div class="icon" v-html="icon(service.icon)"></div>
									<div class="desc pl-3">
										<h3 class="title-big mt-3 mb-4">{{service.title}}</h3>
										<p class="font-bigger mb-2 text-justify" v-html="service.content">{{service.content}}</p>
										<!--<img v-if="service.addon_image" :src="service.addon_image">-->
									</div>	
								</div>	
							</div>	
						</div>	
					</div>	
				</div>`,
  props: ['services'],
  methods:{
		icon(type){
			return icon(type);
		}
	}
});

Vue.component('trigger-box', {	
  template: `<div class="section nomargin dark d-flex align-items-center" :style="thestyle(bgimage,bgposition)">
					<div class="overlay" style="background-color: rgba(26,11,8,.3)" ></div>
					<div class="container">
						<h1 class="text-center mt-4">{{title}}</h1>
						<div class="center">
							<a :href="link" class="button button-100">{{text}}</a>	
						</div>		
					</div>
				</div>	`,
  props: ['title','text','link','bgimage','bgposition'],
  data:function(){
  	return {};
  },
  computed:{
  },
  methods:{
  	thestyle:function(path,bgposition=""){
  		let pos = "center"
  		
  		if(bgposition){
  			pos = bgposition;
  		}

  		return {
	  		'background-image':'url('+path+')',
			'background-position':pos,
			'background-size':'cover',
			'min-height':'400px'
  		}
  	}
  }

});


Vue.component('three-images', {	
  template: `<div  class="section nomargin bg-white" :style="thestyle()">
				<div class="container">
					<div class="row"> 
						
						<div v-for="(image,index) in images" class="col-md-4 mb-5 mb-md-0 px-md-2">
							<img :src="image">	
						</div>	

					</div>
					<div class="clear"></div>
				</div>	
			</div>`,
  props: ['images'],
  data:function(){
  	return {};
  },
  computed:{
  },
  methods:{
  	thestyle:function(){

  		return {
			'background-image':'url(images/world.svg)',
			'background-position':'center',
			'background-size':'cover',
		};
	}
  }

});

Vue.component('proccess', {	
  template: `<div class="section bg-white nomargin" style="background-image:url(images/world-2.svg);background-size: cover;background-position: center">
					<div class="container-fluid binhong-proccess">
						<div class="row m-0">
							<h3 class="col-12 mb-5 title-big p-md-0 text-center">{{title}}</h3>
						</div>	
						<div class="row proccess-flow m-0">
							
							<div v-for="(item,index) in proccess" class="col-12 col-md-6 col-lg-4 col-xxl-1-5 p-md-0 pr-md-3 proccess-box-outside">
								<div class="proccess-box-line"></div>
								<div class="proccess-box dark pt-2 pb-2 pl-0 pr-0 p-md-3 pl-md-0 pr-md-0 mb-md-5">
									<div class="proccess-box-content">
										<div class="row p-2 pt-lg-3 nomargin align-items-center">
											<div class="col-lg-12 col-3 text-center mb-lg-3">
												<img :src="item.icon">
											</div>
											<div class="col-lg-12 col-9">
												<h3 class="text-md-center mt-0 mt-lg-2 mt-md-0 mb-2">{{item.title}}</h3>
												<p class="text-left text-md-justify-last-center mb-2 font-small" v-html="item.description"></p>
											</div>	
										</div>
									</div>
									<div class="proccess-arrow"></div>
								</div>
							</div>	

						</div>	
					</div>
				</div>	`,
  props: ['proccess','title'],
});





Vue.component('footer-component',{
    template: `<!-- Footer
		============================================= -->
		<footer class="dark noborder" style="background-image:rgba(0,0,0,.8);background-size: cover;background-position: center;" :style="{'background-image':'url('+bg_image+')'}">
			<div class="overlay" style="background-color:rgba(0,0,0,.8);"></div>
			<div class="container">

				<!-- Footer Widgets
				============================================= -->
				<div class="footer-widgets-wrap clearfix">
					<div class="row">
						
						<div class="col-md-5 nomargin">						
							<div class="widget clearfix">

								<img :src="logo" alt="" class="footer-logo mb-3">

								<p class="mb-4 pb-md-3" v-html="des"></p>

							</div>
							<ul v-if="nav" id="footer_nav">
								<li v-for="(li , index) in nav">
									<a :href="li.path">{{li.text}}</a>
								</li>
							</ul>						

						</div>

						<div class="col-md-2  mt-5 mt-md-0"></div>

						<div class="col-md-5 nomargin">

							<div class="widget clearfix">
								<div class="mb-3 d-block d-md-none"></div>
								<h4  class="mb-3" style="color:#FFF">聯絡資訊</h4>
								<p v-html="des_2" class="mb-4"></p>
								<div class="d-flex align-items-center mb-2">
									<span class="footer-icon"><img src="images/icons/f-map.svg"></span><p class="nomargin nopadding">{{contact.addressFull}}</p>
								</div>
								<div class="d-flex align-items-center mb-2">
									<span class="footer-icon"><img src="images/icons/f-mail.svg"></span><p class="nomargin nopadding">{{contact.email}}</p>
								</div>
								<div class="d-flex align-items-center">
									<span class="footer-icon"><img src="images/icons/f-tel.svg"></span><p class="nomargin nopadding">{{contact.telfooter}}</p>
								</div>
							</div>	

						</div>

					</div>	

				</div><!-- .footer-widgets-wrap end -->

			</div>

		</footer><!-- #footer end -->`,
    props: ['des','nav','contact','logo','des_2','bg_image','des'],
})


Vue.component('empty-component', {	
  template: "",
});

