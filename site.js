"use strict";

var site = {

	base:"index.html",
	title:"秉宏精密科技實業有限公司",
	tel:"06-2541688",
	address:"台南市永康區正南一街129巷38弄26號",
	email: "binhong.sales@gmail.com",
	barcode: "64915368",
	line:"",

};

let title = new Vue({
	 el:'#title',
	 data:{
	 	title: site.title,
	 }
})


let topBar = new Vue({
    el:'#top-bar',
    data: {
    	"isdark":true,
    	"topbartext":"Welcome to our website!",
	}
})


let Logo = new Vue({
    el:'#logo',
    data: {
    	image: "images/logo.jpg",
    	image2x: "images/logo.jpg",
    	path : site.base,
    }
})

let primaryMenu = new Vue({
	el:"#primary-menu",
	data:{
		navigtaor:[
			{text:"首頁",path:""},
			{text:`關於秉宏 <i class="icon-angle-down"></i>`,path:""},
			{text:`服務項目 <i class="icon-angle-down"></i>`,path:""},
			{text:`聯絡我們 <i class="icon-angle-down"></i>`,path:""},
		],
	}
})


let sliderData = [
	{
		image:"images/slider_01.jfif",
		position:"center",
		html:`<h2 data-animate="fadeInUp">我們幫助你實現願景</h2>
			<p class="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on our Canvas.</p>`,

	},
	{
		image:"images/slider_02.jfif",
		position:"",
		html:`<h2 data-animate="fadeInUp">我們幫助你實現願景2</h2>
			<p class="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on our Canvas.</p>`,
		
	},
	
];


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




let slider = new Vue({
	el:"#slider",
	data:{
		sliders:sliderData,
	}
})


let about_us = new Vue({
	el:"#about_us",
	data:{
		blockquote:`"We offer you advanced products available today form some of the best brands in industrial automation."`,
		title: "關於秉宏精密科技",
		link:"#",
		description:"秉宏精密位於台南市永康區，鄰近台南科學園區。擁有1988年至今的加工經驗，優秀的經營團隊，秉持著『人性化管理』，追求企業永續經營及成長。主要從事電子相關製造業，以射頻連接器SMA.SMB.MCX.MMCX.TNC...等系列為主軸，提供專業代工協助開發製造，同時也承接各類五金加工。",
		image:"images/slider_01.jfif"
	}
})

let service = new Vue({
	el:"#service",
	data:{
		style:{
			'background-image':'url(images/slider_01.jfif)',
			'background-position':'center',
			'background-size':'cover',

		},
		title: "服務項目",
		services:[
			{
				"icon":"images/icon.png",
				"title":"各類五金車铣加工",
				"description":"各類五金車铣加工各類五金車铣加工各類五金車铣加工，各類五金車铣加工各類五金車铣加工各類五金車铣加工，各類五金車铣加工各類五金車铣加工",
				"link":"#",
				isActive: true,
			},
			{
				"icon":"images/icon.png",
				"title":"各類五金車铣加工",
				"description":"各類五金車铣加工各類五金車铣加工各類五金車铣加工，各類五金車铣加工各類五金車铣加工各類五金車铣加工，各類五金車铣加工各類五金車铣加工",
				"link":"#",
				isActive: false,
			},
			{
				"icon":"images/icon.png",
				"title":"各類五金車铣加工",
				"description":"各類五金車铣加工各類五金車铣加工各類五金車铣加工，各類五金車铣加工各類五金車铣加工各類五金車铣加工，各類五金車铣加工各類五金車铣加工",
				"link":"#",
				isActive: false,
			},
		],

	},
	methods:{
		activeToogle:function(service,index){
			
			for (let i = 0; i < this.services.length; i++) {
				this.services[i].isActive = false;
			}

			this.services[index].isActive = true;
		}
	}
})


let pro = new Vue({
	el:"#pro",
	data:{
		style:{
			'background-image':'url(images/slider_02.jfif)',
			'background-position':'center',
			'background-size':'cover',

		},
		title: "服務項目",
		link:"#",

	}
})


