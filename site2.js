"use strict";

var PageID = config._current;
var PageTitle = config.title;

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
	fax:"06-2545166"
}

var siteLinks = {
	index:"index.html",
	about:"about.html",
	services:"services.html",
	contact:"contact.html",
}

var footer_bg = "images/footer-bg.jpg";

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
			{text:`服務項目`,icon:``,path:siteLinks.services,current:"services"},
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
				<a class="button button-100" href="${siteLinks.services}">服務項目</a>
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
	text:PageTitle,
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
		title: "設備完善/快速打樣",
		des: "不斷的強化廠內設備，我們使用日本TSUGAMI和STAR車铣複合機型。並擁有自行寫程式及繪圖能力，提供快速打樣，節省開發時間。",
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
	
	title: "服務項目",
	services:[
		{
			"icon":"gear",
			"title":"各類五金車铣加工",
			"description":"",
			"link":siteLinks.services,
			isActive: false,
		},
		{
			"icon":"gearman",
			"title":"產品OEM代工/跨產業CNC代工",
			"description":"",
			"link":siteLinks.services,
			isActive: false,
		},
		{
			"icon":"note",
			"title":"品質檢測設備",
			"description":"2.5D影像測量儀器、扭力測試機、硬度測試機、精密高度儀...等各式檢驗儀器",
			"link":siteLinks.services,
			isActive: false,
		},
	],
	isActive:true,
	order:bsOrderClass(3),

}


// trigger ===========================================================================
var triggerData= {

	title: "專業客製化服務",
	link:siteLinks.contact,
	text:"聯絡我們",
	isActive:true,
	order:bsOrderClass(4),
}


let render = new Vue({
	el:"#render",
	data:{
		whatwedo:whatWeDoData,
		aboutus:aboutUsData,
		service:serviceData,
		trigger:triggerData,
		contact:contact,
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



let slider = new Vue({
	el:"#slider",
	data:sliderData,
})


let titleSection = new Vue({
	el:"#page-title",
	data:titleSectionData,
})





