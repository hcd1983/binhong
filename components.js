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
										<p class="nomargin text-justify">{{info.des}}</p>
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
								<h3 class="nomargin" v-html="blockquote"></h3>									
							</blockquote>
							<h3 class="mb-2">{{title}}</h3>
							<p class="nomargin text-justify">{{description}}</p>
							<div class="mt-3">
								<a :href="link" class="button nomargin">嘹解更多</a>	
							</div>	
						</div>
						
					</div>
				</div>
			</div>`,
  props: ['image','blockquote','title','description','link'],
});

