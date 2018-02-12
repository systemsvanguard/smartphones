// Smartphones Electronic Store 
// Simple personal project to learn Vue.js.  VERY, VERY powerful & easy to use framework!

// , new Post('Motorola Moto G5S Plus', 'https://www.gsmarena.com/motorola_moto_g5s_plus-8699.php', '13MP', '8MP', 'motorola-moto-g5s', '2017 August', '1', '4GB RAM', '5.5"', '1080x1920 pixels', '64GB storage with microSD card slot', '168g ~ 8mm thickness')

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function Post(title, link, camerafront, cameraback, img, date, id, memory, screensize, storage, dimensions) {
  _classCallCheck(this, Post);

  this.title 		= title;
  this.link 		= link;
  this.cameraback 	= cameraback;
  this.camerafront 	= camerafront;  
  this.img 			= img;
  this.date 		= date;
  this.id 			= id;
  this.memory 		= memory;
  this.screensize 	= screensize;
  this.storage 		= storage;
  this.dimensions 	= dimensions;
};

// (title, link, camerafront, cameraback, img, date, id, memory, screensize, storage, dimensions) 
var app = new Vue({
  el: '#app',
  data: {
    keyword: '',
    onOff: false,
    activePost: null,
    postList: [
	
	  new Post('Motorola Moto G5S Plus', 'https://www.gsmarena.com/motorola_moto_g5s_plus-8699.php', '13MP', '8MP', 'images/motorola-moto-g5s.jpg', '2017 August', '1', '4GB RAM', '5.5"', '1080x1920 pixels', '64GB storage with microSD card slot', '168g ~ 8mm thickness')
	  
	, new Post('Motorola DROID Turbo', 'https://www.gsmarena.com/motorola_droid_turbo-6727.php', '21MP', '2MP', 'images/motorola-droid-turbo.jpg', '2014 October', '2', '3GB RAM', '5.2"', '1440x2560 pixels', '64GB storage. No card slot', '169g ~ 11.2mm thickness')
	
	, new Post('Apple iPhone 7 Plus', 'https://www.gsmarena.com/apple_iphone_7_plus-8065.php', '12MP', '7MP', 'images/apple-iphone-7-plus-r2.jpg', '2016 September', '3', '3GB RAM', '5.5"', '1080x1920 pixels', '128GB. No card slot', '188g ~ 7.3mm thickness')
	
	, new Post('Meizu MX4 Pro', 'https://www.gsmarena.com/meizu_mx4_pro-6815.php', '20MP', '5MP', 'images/meizu-mx4-pro1.jpg', '2014 December', '4', '3GB RAM', '5.5"', '1080x1920 pixels', '64GB. No card slot', '158g ~ 9mm thickness')
	
	, new Post('Xiaomi Mi Note 3', 'https://www.gsmarena.com/xiaomi_mi_note_3-8707.php', '12MP', '16MP', 'images/xiaomi-mi-note3-.jpg', '2017 September', '5', '6GB RAM', '5.5"', '1080x1920 pixels', '128GB.  No card slot', '163g ~ 7.6mm thickness')
	
	, new Post('Samsung Galaxy Note8', 'https://www.gsmarena.com/samsung_galaxy_note8-8505.php', '12MP', '8MP', 'images/samsung-galaxy-note-8-sm-n950.jpg', '2017 September', '6', '6GB RAM', '6.3"', '1440x2960 pixels', '256GB storage with microSD card slot', '195g ~ 8.6mm thickness')
	
	
	, new Post('LG V30', 'https://www.gsmarena.com/lg_v30-8712.php', '16MP', '5MP', 'images/lg-v30-.jpg', '2017 September', '7', '4GB RAM', '6.0"', '1440x2880 pixels', '128GB storage with microSD card slot', '158g ~ 7.3mm thickness')
	
	, new Post('Samsung Galaxy S7 edge', 'https://www.gsmarena.com/samsung_galaxy_note8-8505.php', '12MP', '5MP', 'images/samsung-galaxy-s7-edge-.jpg', '2016 March', '8', '4GB RAM', '5.5"', '1440x2560 pixels', '128GB storage with microSD card slot', '157g ~ 7.7mm thickness')
	
	, new Post('HTC One M9+', 'https://www.gsmarena.com/htc_one_m9+-6977.php', '20MP', '4MP', 'images/htc-one-m9-plus-new.jpg', '2015 May', '9', '3GB RAM', '5.2"', '1440x2560 pixels', '32GB storage with microSD card slot', '195g ~ 8.6mm thickness')
	
	, new Post('BlackBerry Keyone', 'https://www.gsmarena.com/blackberry_keyone-8508.php', '12MP', '8MP', 'images/blackberry-keyone-mercury.jpg', '2017 April', '10', '4GB RAM', '6.0"', '1080x2160 pixels', '64GB storage with microSD card slot', '180g ~ 9.4mm thickness')

	, new Post('HTC U11 Eyes', 'https://www.gsmarena.com/htc_u11_eyes-8990.php', '12MP', '5MP', 'images/htc-u11-eyes-.jpg', '2018 January', '11', '4GB RAM', '6.0"', '1080x2160 pixels', '64GB storage with microSD card slot', '185g ~ 8.5mm thickness')

	, new Post('Huawei Honor 9', 'https://www.gsmarena.com/huawei_honor_9-8704.php', '20MP', '8MP', 'images/huawei-honor-9-1.jpg', '2017 July', '12', '6GB RAM', '5.15"', '1080x1920 pixels', '128GB storage with microSD card slot', '155g ~ 7.5mm thickness')

	, new Post('Google Pixel 2 XL', 'https://www.gsmarena.com/htc_one_m9+-6977.php', '12MP', '8MP', 'images/google-pixel-xl2.jpg', '2017 October', '13', '4GB RAM', '6.0"', '1440x2880 pixels', '128GB with no card slot', '175g ~ 7.9mm thickness')

	, new Post('Huawei Mate 10 Pro', 'https://www.gsmarena.com/huawei_mate_10_pro-8854.php', '20MP', '8MP', 'images/huawei-mate10-pro.jpg', '2017 November', '14', '6GB RAM', '6.0"', '1080x2160 pixels', '32GB storage with microSD card slot', '178g ~ 7.9mm thickness')

	, new Post('Sony Xperia XZ Premium', 'https://www.gsmarena.com/sony_xperia_xz_premium-8593.php', '19MP', '13MP', 'images/sony-xperia-xz-premium-2017.jpg', '2017 June', '15', '4GB RAM', '5.46"', '3840x2160 pixels', '64GB storage with microSD card slot', '195g ~ 7.9mm thickness')	
	
	]
  },
  methods: {
    toggleOnOff: function toggleOnOff(post, $event) {
      this.activePost = post;
      this.onOff = !this.onOff;
    }
  },
  computed: {
    filteredList: function filteredList() {
      var _this = this;

      return this.postList.filter(function (post) {
        return post.title.toLowerCase().includes(_this.keyword.toLowerCase());
      });
    }
  }
});
