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
							<slidercaption :slider="slider" :index="index" ></slidercaption>							
						</div>
					</div>	
					
				</div>
				<div class="slider-arrow-left"><i class="icon-angle-left"></i></div>
				<div class="slider-arrow-right"><i class="icon-angle-right"></i></div>
			</div>`,
  props: ['sliders'],
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
										<p class="nomargin text-center text-md-justify">{{info.des}}</p>
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
							<h3 class="mb-2">{{title}}</h3>
							<p class="nomargin text-justify">{{description}}</p>
							<div v-if="link" class="mt-3">
								<a :href="link" class="button nomargin">嘹解更多</a>	
							</div>	
						</div>
						
					</div>
				</div>
			</div>`,
  props: ['image','blockquote','title','description','link'],
});

Vue.component('service', {	
  template: `<div  class="section nomargin bg-white" :style="thestyle()">
					<div class="container">
						<h3 class="mb-5">{{title}}</h3>
						<div class="row nomargin">
							<div v-for="(service,index) in services" class="col-md-4 bin-icon-box mb-2 mb-md-0" :class="{active: service.isActive}" @click="activeToogle(service,index)" >
								
								<div class="mb-3">
									<div v-html="icon(service.icon)"></div>
								</div>
								<div>
									<h4 class="mb-2 ls1">{{service.title}}</h4>
									<p class="mb-3 text-justify">{{service.description}}</p>
								</div>
								<!-- <a class="know-more" :href="service.link">瞭解更多 <i class="icon-angle-right"></i></a> -->
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






	

