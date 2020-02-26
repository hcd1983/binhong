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
	tel : "翁先生 0988 018 872",
	telfooter:"翁先生 0988 018 872",
	email: "binhong.sales@gmail.com",
	time: "8:30-17:30 週一至週五",
	barcode: "64915368",
	fax:"06-2545166"
}

var siteLinks = {
	index:"index.html",
	about:"about.html",
	services:"services.html",
	contact:"contact.html",
}

var footer_bg = "images/footer-bg.webp";

var logo = "images/logo.svg";
var logo_bw = "images/logo_bw.svg";


var site = {
	logo:logo,
	logo_bw:logo_bw,
	base:"index.html",
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
		image:"images/slider01.webp",
		overlayStyle:{
			"background-color":"rgba(26,11,8,.5)",
		},
		position:"center",
		html:`<h2 data-animate="fadeInUp" class="mb-2">FROM SMALL BEGINNINGS <br>COMES GREAT THINGS</h2>
			  <h3 data-animate="fadeInUp" data-delay="200">我們的精密，完整你們的成就</h3>`,

	},
	{
		image:"images/blur2.jpg",
		overlayStyle:{
			"background-color":"rgba(26,11,8,.5)",
		},
		position:"center",
		html:`<h2 data-animate="fadeInUp" class="mb-2">FROM SMALL BEGINNINGS <br>COMES GREAT THINGS</h2>
			  <h3 data-animate="fadeInUp" data-delay="200">我們的精密，完整你們的成就</h3>`,

	},
	// {
	// 	image:"images/slider_02.jfif",
	// 	position:"",
	// 	html:`<h2 data-animate="fadeInUp">我們幫助你實現願景2</h2>
	// 		<p class="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Create just what you need for your Perfect Website. Choose from a wide range of Elements &amp; simply put them on our Canvas.</p>`,

	// },

];

var sliderData = {
	isActive:true,
	style:{height:"450px"},
	sliders:_sliders,
	useFirstCaption:true,
}

//tilte section ===============================================================
var titleSectionData = {
	isActive:true,
	text:PageTitle,
	style:{
		'background-image':'url(images/slider01.webp)',
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
		des: "通過 ISO9001 國際認證。",
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
	blockquote:`We save your time;<br>We save your money;<br>and we save you from your troubles.`,
	title: "關於秉宏精密科技",
	link:siteLinks.about,
	description:"秉宏精密位於台南市永康區，鄰近台南科學園區。擁有1988年至今的加工經驗，優秀的經營團隊，秉持著『人性化管理』，追求企業永續經營及成長。主要從事電子相關製造業，以射頻連接器SMA.SMB.MCX.MMCX.TNC...等系列為主軸，提供專業代工協助開發製造，同時也承接各類五金加工。",
	image:"images/about.webp",
	order:bsOrderClass(2),
	isActive:true,
}

// service =========================================================
var serviceData = {

	title: "服務項目",
	services:[
		{
			"icon":"gear",
			"cover":"images/services-1-l-2.png",
			"title":"各類電子五金 CNC 加工",
			"description":"複合式 CNC 車銑一次完成！我們嚴格控管生產線及檢驗設備，重視每一個製作過程。提高生產品質...",
			"content":"複合式CNC車銑一次完成！我們嚴格控管生產線及檢驗設備，重視每一個製作過程。提高生產品質，縮短製程時間；優等品質，準時交貨。目標是幫助客戶降低成本，創造雙贏，協助您提升市場競爭力。",
			"link":siteLinks.services,
			isActive: false,
		},
		{
			"icon":"gearman",
			"cover":"images/services-2-l.png",
			"title":"產品 OEM 代工",
			"description":"客製化精密金屬零件OEM加工，擁有願意嘗試的心和經驗豐富的人，善用多年的加工經驗和電腦的精密數值...",
			"content":"客製化精密金屬零件OEM加工，擁有願意嘗試的心和經驗豐富的人，善用多年的加工經驗和電腦的精密數值，達成到每項產品的精密要求。視不同要求，協助客戶共同開發，快速打樣確保設計準確性。批量生產前，也會提供樣品給客戶確認所有細節，降低合作爭議，我們希望成為每位客戶長期的績優合作廠商。",
			"link":siteLinks.services,
			isActive: false,
		},
		{
			"icon":"note",
			"cover":"images/services-3-l.png",
			"title":"品質檢測設備",
			"description":"ISO9001國際品質認證製造廠，我們擁有2.5D影像測量儀器、扭力測試機、硬度測試機、精密高度儀等...",
			"content":`ISO9001國際品質認證製造廠，我們擁有2.5D影像測量儀器、扭力測試機、硬度測試機、精密高度儀等各式檢驗儀器。嚴格把關每項產品，仔細檢查每個細節，確保我們能以穩定的產品品質，奠定與客戶的長期友誼。
			<br><img src="images/service-3-addon3.png" class='mt-2' style='width:180px'><br>
			<small class="d-block pl-3 t700 ls0">Registered to ISO 9001</small>`,
			"addon_image":"images/service-3-addon.png",
			"link":siteLinks.services,
			isActive: false,
		},
	],
	isActive:true,
	order:bsOrderClass(3),

}

// proccess ==========================================================================
var proccess = [
	{
		"icon":"images/icons/p-1.svg",
		"title":"客戶詢價",
		"description":"跟上世代的服務,以最快的速度回覆客戶。",
	},
	{
		"icon":"images/icons/p-2.svg",
		"title":"報價",
		"description":"我們擁有自行繪圖的能力,熟練軟體工具,進而能提供建議和協助,並做出精確報價。",
	},
	{
		"icon":"images/icons/p-3.svg",
		"title":"成交",
		"description":"如果有任何配合機會,我們將盡全力的為您服務。",
	},
	{
		"icon":"images/icons/p-4.svg",
		"title":"確認圖面",
		"description":"雙方確認圖面,降低合作爭議,我們希望能與每位客戶達成長期的配合互利。",
	},
	{
		"icon":"images/icons/p-5.svg",
		"title":"編寫程式",
		"description":"我們擁有快速且精確編寫程式的能力,有助於確保加工零件的精密度,以及增加開發速度及產能來符合加工成本。",
	},
	{
		"icon":"images/icons/p-6.svg",
		"title":"測試",
		"description":"把每個角度修到完美,編寫程式後進行測試,直到將產品呈現到最好。",
	},
	{
		"icon":"images/icons/p-7.svg",
		"title":"生產",
		"description":"進行生產",
	},
	{
		"icon":"images/icons/p-8.svg",
		"title":"全檢",
		"description":"嚴格把關每項產品,仔細檢查每個細節。我們使用多項檢測儀來確保出貨品質。",
	},
	{
		"icon":"images/icons/p-9.svg",
		"title":"出貨",
		"description":"依交期準時出貨<br>滿足客戶需求。",
	},
];
var proccessData= {
	title: "製作程序",
	proccess:proccess,
}

// trigger ===========================================================================
var triggerData= {

	title: "專業客製化服務",
	link:siteLinks.contact,
	text:"聯絡我們",
	isActive:true,
	order:bsOrderClass(4),
}

function VueInit(){
	let render = new Vue({
		el:"#render",
		data:{
			whatwedo:whatWeDoData,
			aboutus:aboutUsData,
			service:serviceData,
			trigger:triggerData,
			contact:contact,
			proccess:proccessData,
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
				"width":"300px",
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
			des:"穩定的產品，讓客戶信任我們的優質服務。<br>合理的價格，讓我們確保客戶的最大利益。<br>我們對自己工廠的實力感到自豪和信心。",
			contact:contact,
			des_2:"我們的上班時間為週一至週五，8:30-17:30<br>歡迎聯絡，我們會儘快回覆您的訊息。",
			bg_image:footer_bg,
		}

	})


	// slider ====================================================

	if(document.getElementById("slider") ){
			let slider = new Vue({
			el:"#slider",
			data:sliderData,
		})
	}




	let titleSection = new Vue({
		el:"#page-title",
		data:titleSectionData,
	})

	// =============================

	let empty = new Vue({
		el:"#empty",
	})
}