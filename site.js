"use strict";
function sizecount(size){

	return size / 12 * 0.75;

}

var siteTite = "秉宏精密科技實業有限公司";
var contact = {
	address:"正南一街129巷38弄26號",
	addressTwo:"永康區,台南市" ,
	addressFull:"台南市永康區正南一街129巷38弄26號",
	tel : "06-2541688",
	telfooter:"06 254 1688 / 06 254 5166", 
	email: "binhong.sales@gmail.com",
	time: "8:00-17:00 Mon-Sat",
	barcode: "64915368",
}

var footer_bg = "images/footer-bg.jpg";

var logo = "images/logo.svg";
var logo_bw = "images/logo_bw.svg";


var site = {
	logo:logo,
	logo_bw:logo_bw,
	base:"index.html",
	title:siteTite,

};

var nav = [
			{text:"首頁",icon:``,path:"index.html",current:"index"},
			{text:`關於秉宏`,icon:`<i class="icon-angle-down"></i>`,path:"about.html",current:"about"},
			{text:`服務項目`,icon:`<i class="icon-angle-down"></i>`,path:"service.html",current:"service"},
			{text:`聯絡我們`,icon:`<i class="icon-angle-down"></i>`,path:"contact.html",current:"contact"},
		];

var whatWeDo = [
	{
		title: "合理交期與價錢",
		des: "模組模具可快速更換產品，追求高效率的生產出貨，秉持合乎客戶成本的合理價錢，以「客戶最大效益」為首要目標。",
		icon:"images/icons/money.svg",

	},
	{
		title: "全檢服務",
		des: "模組模具可快速更換產品，追求高效率的生產出貨，秉持合乎客戶成本的合理價錢，以「客戶最大效益」為首要目標。",
		icon:"images/icons/money.svg",

	},
	{
		title: "專業技術/豐富經驗",
		des: "模組模具可快速更換產品，追求高效率的生產出貨，秉持合乎客戶成本的合理價錢，以「客戶最大效益」為首要目標。",
		icon:"images/icons/money.svg",

	},
	{
		title: "即時服務/資訊更新",
		des: "模組模具可快速更換產品，追求高效率的生產出貨，秉持合乎客戶成本的合理價錢，以「客戶最大效益」為首要目標。",
		icon:"images/icons/money.svg",

	},
	{
		title: "品質保證",
		des: "模組模具可快速更換產品，追求高效率的生產出貨，秉持合乎客戶成本的合理價錢，以「客戶最大效益」為首要目標。",
		icon:"images/icons/money.svg",

	},
	{
		title: "設備完善/快速打樣",
		des: "模組模具可快速更換產品，追求高效率的生產出貨，秉持合乎客戶成本的合理價錢，以「客戶最大效益」為首要目標。",
		icon:"images/icons/money.svg",

	}

];

// title =======================================================

let title = new Vue({
	 el:'#title',
	 data:{
	 	title: site.tite,
	 }
})


// top bar ===========================================================
let topBar = new Vue({
    el:'#top-bar',
    data: {
    	"isdark":true,
    	"topbartext":"Welcome to our website!",
	}
})

// header =================================================================

let header = new Vue({
	el:"#header",
	data:{
		image: site.logo,
    	image2x: site.logo,
    	path: site.base,
		nav:nav,
		contact:contact,
		logoStyle:{
			"width":"210px",
		}
	},
	methods:{
		currentPage: function(_current){

			return _current == config._current;	

		},
	}
})




// footer =====================================================================
let footer = new Vue({
	
	el:"#footer",
	data:{
		logo:site.logo_bw,
		nav:nav,
		des:"穩定的產品，讓客戶信任我們的優質服務。合理的價格，讓我們確保客戶的最大利益，我們對自己工廠的實力感到自豪和信心。",
		contact:contact,
		des_2:"我們的上班週一至週五,8:30-17:30<br>歡迎聯絡，我們會儘快回覆您的訊息。",
		bg_image:footer_bg,
	}

})


// slider ====================================================
let sliderData = [
	{
		image:"images/slider01.png",
		overlayStyle:{
			"background-color":"rgba(26,11,8,.5)",
		},
		position:"center",
		html:`<h2 data-animate="fadeInUp" class="mb-2">THE PUSHER <br>OF YOUR SUCCESS</h2>
			  <h3 data-animate="fadeInUp" data-delay="200">我們幫助您實現願景</h3>`,

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
		style:{height:"450px"},
		sliders:sliderData,
	}
})


let _whatWeDo = new Vue({
	el:"#whatwedo",
	data:{
		list:whatWeDo,
		addonClass:"shadowBottom",
	}
})

let about_us = new Vue({
	el:"#about_us",
	data:{
		blockquote:`We save your time,<br>We save your money,<br>and we save you from your troubles.`,
		title: "關於秉宏精密科技",
		link:"#",
		description:"秉宏精密位於台南市永康區，鄰近台南科學園區。擁有1988年至今的加工經驗，優秀的經營團隊，秉持著『人性化管理』，追求企業永續經營及成長。主要從事電子相關製造業，以射頻連接器SMA.SMB.MCX.MMCX.TNC...等系列為主軸，提供專業代工協助開發製造，同時也承接各類五金加工。",
		image:"images/about.png",
	}
})

let service = new Vue({
	el:"#service",
	data:{
		style:{
			'background-image':'url(images/world.svg)',
			'background-position':'center',
			'background-size':'cover',

		},
		title: "服務項目",
		services:[
			{
				"icon":"gear",
				"title":"各類五金車铣加工",
				"description":"我們是全台灣最大的汽車零件製造商之一，並且是公認的領導者……",
				"link":"#",
				isActive: false,
			},
			{
				"icon":"gearman",
				"title":"產品OEM代工/跨產業CNC代工",
				"description":"我們是全台灣最大的汽車零件製造商之一，並且是公認的領導者……",
				"link":"#",
				isActive: false,
			},
			{
				"icon":"note",
				"title":"品質檢測設備",
				"description":"我們是全台灣最大的汽車零件製造商之一，並且是公認的領導者……",
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
		},
		icon(type){
			return icon(type);
		}
	}
})


let trigger_box = new Vue({
	el:"#trigger_box",
	data:{
		style:{
			'background-image':'url(images/trigger-1.png)',
			'background-position':'center',
			'background-size':'cover',
			'min-height':'400px',
		},
		title: "專業客製化服務",
		link:"#",
		text:"聯絡我們"

	}
})




