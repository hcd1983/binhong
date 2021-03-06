"use strict";

var PageID = config._current;

function sizecount(size){

	return size / 12 * 0.75;

}

function bsOrderClass(n){
	if(!n){ return "order-1";}else{
		return "order-" + n;
	}
}

function GetHash(){
  return location.hash.replace(/^#/, '');
}

// window.onhashchange = function(){initPage(GetHash())};
window.onload = function(){initPage(PageID)};

function initPage(PageID){
	switch(PageID){
		case("index"):
			titleSectionData.isActive = false;
		break;
		case("about"):
			sliderData.isActive = false;
			aboutUsData.order = bsOrderClass(1);
			whatWeDoData.order = bsOrderClass(2);
			serviceData.order = bsOrderClass(3);
			triggerData.style["background-image"] = "url(images/trigger-2.png)";
		break;
		case("service"):
			sliderData.isActive = false;
			titleSectionData.text = "Services";
			aboutUsData.isActive = false;
			whatWeDoData.isActive = false;
			serviceData.isActive = false;
			triggerData.style["background-image"] = "url(images/trigger-3.png)";
		break;
		case("contact"):
			sliderData.isActive = false;
			titleSectionData.isActive = false;
			aboutUsData.isActive = false;
			whatWeDoData.isActive = false;
			serviceData.isActive = false;
			triggerData.style["background-image"] = "url(images/trigger-3.png)";
		break;
		default:
		break;
	}
}


var siteTite = "秉宏精密科技實業有限公司";
var contact = {
	address:"正南一街129巷38弄26號",
	addressTwo:"永康區,台南市" ,
	addressFull:"台南市永康區正南一街129巷38弄26號",
	tel : "翁先生 0988 018 872",
	telfooter:"翁先生 0988 018 872", 
	email: "binhong.sales@gmail.com",
	time: "8:00-17:00 Mon-Sat",
	barcode: "64915368",
}

var siteLinks = {
	index:"index.html",
	about:"about.html",
	service:"service.html",
	contact:"contact.html",
}

var footer_bg = "images/footer-bg.png";

var logo = "images/logo.svg";
var logo_bw = "images/logo_bw.svg";


var site = {
	logo:logo,
	logo_bw:logo_bw,
	base:siteLinks.html,
	title:siteTite,

};

var nav = [
			{text:"首頁",icon:``,path:siteLinks.index,current:"index"},
			{text:`關於秉宏`,icon:``,path:siteLinks.about,current:"about"},
			{text:`服務項目`,icon:``,path:siteLinks.service,current:"service"},
			{text:`聯絡我們`,icon:``,path:siteLinks.contact,current:"contact"},
		];

// slider ========================================
let _sliders = [
	{
		image:"images/slider01.png",
		overlayStyle:{
			"background-color":"rgba(26,11,8,.5)",
		},
		position:"center",
		html:`<h2 data-animate="fadeInUp" class="mb-2">THE PUSHER <br>OF YOUR SUCCESS</h2>
			  <h3 data-animate="fadeInUp" data-delay="200">我們幫助您實現願景</h3>
			  <div class="mt-2" data-animate="fadeInUp" data-delay="400">
				<a class="button button-100" href="${siteLinks.service}">服務項目</a>
				<a class="button button-wihte button-100" href="${siteLinks.contact}">聯絡我們</a>
			  </div>`,

	},
	{
		image:"images/slider_02.jfif",
		position:"",
		html:`<h2 data-animate="fadeInUp">我們幫助你實現願景2</h2>
			<p class="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on our Canvas.</p>`,
		
	},
	
];

var sliderData = {
	isActive:true,
	style:{height:"450px"},
	sliders:_sliders,
}

//tilte section ===============================================================		
var titleSectionData = {
	isActive:true,
	text:'About us',
	style:{
		'background-image':'url(images/slider01.png)',
	},
}
// what we do ==================================================================
var whatWeDo = [
	{
		title: "合理交期與價錢",
		des: "模組模具可快速更換產品，追求高效率的生產出貨，秉持合乎客戶成本的合理價錢，以「客戶最大效益」為首要目標。",
		icon:"images/icons/money.svg",

	},
	{
		title: "全檢服務",
		des: "貨品全檢出貨，確保我們能以穩定的產品品質，奠定與客戶的長期友誼。",
		icon:"images/icons/check.svg",

	},
	{
		title: "專業技術/豐富經驗",
		des: "多年的CNC加工經歷，秉宏擁有經驗豐富的設計工程師團隊，讓我們比別人更能解決產品加工上的問題，也能為客戶降低開發成本。",
		icon:"images/icons/idea.svg",

	},
	{
		title: "即時服務/資訊更新",
		des: "跟上世代的服務，即時更新的資訊，為客戶走在前端 ，即時性的回覆及服務客人。",
		icon:"images/icons/connect.svg",

	},
	{
		title: "品質保證",
		des: "通過ISO9001:2015的國際認證。",
		icon:"images/icons/award.svg",

	},
	{
		title: "設備完善/快速打樣",
		des: "不斷的強化廠內設備，我們使用日本TSUGAMI和STAR車铣複合機型。並擁有寫程式及繪圖能力，提供快速打樣，節省開發時間。",
		icon:"images/icons/pan.svg",

	}

];

var whatWeDoData = {
	list:whatWeDo,
	addonClass:"shadowBottom",
	order:bsOrderClass(1),
	isActive:true,
}

// about us =========================================================

var aboutUsData = {
	blockquote:`We save your time,<br>We save your money,<br>and we save you from your troubles.`,
	title: "關於秉宏精密科技",
	link:siteLinks.about,
	description:"秉宏精密位於台南市永康區，鄰近台南科學園區。擁有1988年至今的加工經驗，優秀的經營團隊，秉持著『人性化管理』，追求企業永續經營及成長。主要從事電子相關製造業，以射頻連接器SMA.SMB.MCX.MMCX.TNC...等系列為主軸，提供專業代工協助開發製造，同時也承接各類五金加工。",
	image:"images/about.png",
	order:bsOrderClass(2),
	isActive:true,
} 

// service =========================================================
var serviceData = {
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
			"link":siteLinks.service,
			isActive: false,
		},
		{
			"icon":"gearman",
			"title":"產品OEM代工/跨產業CNC代工",
			"description":"我們是全台灣最大的汽車零件製造商之一，並且是公認的領導者……",
			"link":siteLinks.service,
			isActive: false,
		},
		{
			"icon":"note",
			"title":"品質檢測設備",
			"description":"我們是全台灣最大的汽車零件製造商之一，並且是公認的領導者……",
			"link":siteLinks.service,
			isActive: false,
		},
	],
	isActive:true,
	order:bsOrderClass(3),

}


// trigger ===========================================================================
var triggerData= {
	style:{
		'background-image':'url(images/trigger-1.png)',
		'background-position':'center',
		'background-size':'cover',
		'min-height':'400px',
	},
	title: "專業客製化服務",
	link:siteLinks.contact,
	text:"聯絡我們",
	isActive:true,
	order:bsOrderClass(4),
}

// title =======================================================

// let title = new Vue({
// 	 el:'#title',
// 	 data:{
// 	 	title: site.tite,
// 	 }
// })


// before Go



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
			"width":"280px",
		}
	},
	methods:{
		currentPage: function(_current){

			return _current == PageID;	

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


if(document.getElementById("slider")){
	let slider = new Vue({
		el:"#slider",
		data:sliderData,
	})
}



let titleSection = new Vue({
	el:"#page-title",
	data:titleSectionData,
})


let _whatWeDo = new Vue({
	el:"#whatwedo",
	data:whatWeDoData
})

let about_us = new Vue({
	el:"#about_us",
	data:aboutUsData,
})

let service = new Vue({
	el:"#service",
	data:serviceData,
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
	data:triggerData,
})




