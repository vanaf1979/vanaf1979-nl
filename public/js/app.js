(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/public/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/utils/index.js */ "./src/js/components/utils/index.js");
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_scriptloaders_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/scriptloaders/index.js */ "./src/js/components/scriptloaders/index.js");
/* harmony import */ var _components_slider_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider/index.js */ "./src/js/components/slider/index.js");
/* harmony import */ var _components_intro_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/intro/index.js */ "./src/js/components/intro/index.js");
/* harmony import */ var _components_parallax_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/parallax/index.js */ "./src/js/components/parallax/index.js");
/* Import utilities. */

/* Import components. */





/* Initialize components. */

_components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.domready(function () {
  // Load external scripts and styles.
  _components_scriptloaders_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  _components_slider_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  _components_intro_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].init();
  _components_parallax_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].init();
});

/***/ }),

/***/ "./src/js/components/intro/index.js":
/*!******************************************!*\
  !*** ./src/js/components/intro/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/utils/index.js */ "./src/js/components/utils/index.js");
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bigpicture */ "./node_modules/bigpicture/index.js");
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bigpicture__WEBPACK_IMPORTED_MODULE_2__);



var Intro = {
  image: null,
  init: function init() {
    this.image = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.introbigpicture');

    if (this.image) {
      this.imageInview();
    }
  },
  imageInview: function imageInview() {
    var _this = this;

    in_view__WEBPACK_IMPORTED_MODULE_1___default.a.offset(-50);
    in_view__WEBPACK_IMPORTED_MODULE_1___default()('.introbigpicture').on('enter', function (el) {
      _this.doBigpicture();
    });
  },
  doBigpicture: function doBigpicture() {
    _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.addEvent(this.image, 'click', function (e) {
      e.preventDefault();
      bigpicture__WEBPACK_IMPORTED_MODULE_2___default()({
        el: e.target,
        imgSrc: e.target.href
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./src/js/components/parallax/index.js":
/*!*********************************************!*\
  !*** ./src/js/components/parallax/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/utils/index.js */ "./src/js/components/utils/index.js");
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_2__);



var Intro = {
  parallax: null,
  init: function init() {
    this.parallax = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.home-graphic');

    if (this.parallax) {
      this.parallaxInview();
    }
  },
  parallaxInview: function parallaxInview() {
    var _this = this;

    in_view__WEBPACK_IMPORTED_MODULE_1___default.a.offset(-50);
    in_view__WEBPACK_IMPORTED_MODULE_1___default()('.home-graphic').on('enter', function (el) {
      _this.doParallax();
    });
  },
  doParallax: function doParallax() {
    jarallax__WEBPACK_IMPORTED_MODULE_2___default.a.jarallax(this.parallax, {
      speed: 0.2
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./src/js/components/scriptloaders/index.js":
/*!**************************************************!*\
  !*** ./src/js/components/scriptloaders/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/utils/index.js */ "./src/js/components/utils/index.js");
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__);

var ScriptLoaders = {
  init: function init() {
    // Add Google Analytics
    //this.addGoogleAnalytics();
    // Register Service Worker
    this.registerServiceworkerJs(); // Add footer css

    this.addFooterCss();
  },
  registerServiceworkerJs: function registerServiceworkerJs() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/app/themes/vanaf1979/public/js/sw.js');
        console.log('Service worker registered');
      });
    }
  },
  addFooterCss: function addFooterCss() {
    // Add footer css styles.
    _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.addStyle('/app/themes/vanaf1979/public/css/footer.css', 'body', null);
  },
  addGoogleAnalytics: function addGoogleAnalytics() {
    // Append and initialize Google Analytics.
    _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.addScript('https://www.googletagmanager.com/gtag/js?id=UA-75868924-1', function () {
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', 'UA-75868924-1');
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ScriptLoaders);

/***/ }),

/***/ "./src/js/components/slider/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/slider/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/utils/index.js */ "./src/js/components/utils/index.js");
/* harmony import */ var _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_utils_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! in-view */ "./node_modules/in-view/dist/in-view.min.js");
/* harmony import */ var in_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(in_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");




var HeaderSlider = {
  swiper: null,
  slider: null,
  init: function init() {
    this.slider = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.swiper-container'); // Is the slider present on the page?

    if (this.slider) {
      var slides = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.findAll('.swiper-slide', this.slider); // Are there multiple slides?

      if (slides.length > 1) {
        this.sliderInView();
      } else {
        console.debug('Only one slide detected. Adding Swiper is pointless');
        return;
      }
    } else {
      console.debug('No slider detected.');
      return;
    }
  },
  sliderInView: function sliderInView() {
    var _this = this;

    in_view__WEBPACK_IMPORTED_MODULE_1___default.a.offset(-50);
    in_view__WEBPACK_IMPORTED_MODULE_1___default()('.swiper-container').on('enter', function (el) {
      _this.activateSwiper();
    }).on('exit', function (el) {
      _this.deactivateSwiper();
    });
  },
  activateSwiper: function activateSwiper() {
    if (!this.swiper) {
      // Reveal the Swiper controls.
      this.activateSwiperControls();
      console.log('here'); // Initialize Swiper.

      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.slider, {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        pagination: {
          el: _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.swiper-pagination', this.slider),
          clickable: true
        },
        navigation: {
          nextEl: _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.swiper-button-next', this.slider),
          prevEl: _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.swiper-button-prev', this.slider)
        }
      }); // Attach Swiper event handlers.

      this.handleSwiperEvents();
    }
  },
  activateSwiperControls: function activateSwiperControls() {
    var pagination = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.swiper-pagination', this.slider);
    pagination.classList.remove('inactive');
    var buttonNext = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.swiper-button-next', this.slider);
    buttonNext.classList.remove('inactive');
    var buttonPrev = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.find('.swiper-button-prev', this.slider);
    buttonPrev.classList.remove('inactive');
  },
  handleSwiperEvents: function handleSwiperEvents() {
    var _this2 = this;

    this.swiper.on('slideChangeTransitionStart', function () {
      _this2.animateSlideContent(_this2.swiper.slides[_this2.swiper.activeIndex]);
    });
  },
  animateSlideContent: function animateSlideContent(slide) {
    var innerEllements = _components_utils_index_js__WEBPACK_IMPORTED_MODULE_0___default.a.findAll('.inner article > *', slide);
    Object(animejs__WEBPACK_IMPORTED_MODULE_3__["default"])({
      easing: 'easeInOutQuad',
      targets: innerEllements,
      translateY: [-80, 0],
      opacity: [0, 1],
      duration: 500,
      delay: function delay(el, i, l) {
        return i * 150;
      }
    });
  },
  deactivateSwiper: function deactivateSwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, false);
      this.swiper = null;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HeaderSlider);

/***/ }),

/***/ "./src/js/components/utils/index.js":
/*!******************************************!*\
  !*** ./src/js/components/utils/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var utils = {
  /*
  --  ### MISC
  */

  /*
  --  Find a DOM ellement.
  */
  find: function find(selector, context) {
    return (context || document).querySelector(selector);
  },

  /*
  --  Find multiple DOM ellement.
  */
  findAll: function findAll(selector, context) {
    return (context || document).querySelectorAll(selector);
  },

  /*
  --  Convert a value to a bool.
  */
  parseBool: function parseBool(value) {
    return value == "true" || value == true || value == 1 ? true : false;
  },

  /*
  --  ### ARRAYS
  */

  /*
  --  Is a value in an array?
  */
  inArray: function inArray(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] == needle) return i;
    }

    return -1;
  },

  /*
  --  Loop throu an array/;ist
  */
  loop: function loop(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i]);
    }
  },

  /*
  --  ### COOKIES
  */

  /*
  --  Set cookie value.
  */
  getCookie: function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  },

  /*
  --  Get cookie value.
  */
  setCookie: function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
  },

  /*
  --  Delete cookie value.
  */
  deleteCookie: function deleteCookie(name) {
    setCookie(name, '', -1);
  },

  /*
  --  ### EVENTS
  */

  /*
  --  Add event listner.
  */
  addEvent: function addEvent(ellement, type, callback) {
    if (ellement.attachEvent) {
      ellement.attachEvent('on' + type, callback);
    } else {
      ellement.addEventListener(type, callback);
    }
  },

  /*
  --  Remove event listner.
  */
  removeEvent: function removeEvent(ellement, type, callback) {
    if (ellement.detachEvent) {
      ellement.detachEvent('on' + type, callback);
    } else {
      ellement.removeEventListener(type, callback);
    }
  },

  /*
  --  Trigger events.
  */
  triggerEvent: function triggerEvent(el, type) {
    if ('createEvent' in document) {
      // modern browsers, IE9+
      var e = document.createEvent('HTMLEvents');
      e.initEvent(type, false, true);
      el.dispatchEvent(e);
    } else {
      // IE 8
      var e = document.createEventObject();
      e.eventType = type;
      el.fireEvent('on' + e.eventType, e);
    }
  },

  /*
  --  Fire on document ready.
  */
  domready: function domready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else if (document.addEventListener) {
      this.addEvent(document, 'DOMContentLoaded', fn);
    } else {
      this.addEvent(document, 'onreadystatechange', function () {
        if (document.readyState != 'loading') {
          fn();
        }
      });
    }
  },

  /*
  --  trim leading and trailing whitespace
  */
  trim: function trim(string) {
    if (typeof string === "string") {
      return string.replace(/^\s+|\s+$/g, '');
    } else {
      return string;
    }
  },

  /*
  --  ### Ajax
  */

  /*
  --  Add a stylesheet to the dom.
  */
  addStyle: function addStyle() {
    var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var element = document.createElement('link');
    element.type = 'text/css';
    element.rel = 'stylesheet';
    element.href = style;

    if (!parent) {
      parent = 'head';
    }

    if (callback != null && typeof callback === "function") {
      element.onload = function () {
        callback();
      };
    }

    document[parent].appendChild(element);
  },

  /*
  --  Add a script file to the dom.
  */
  addScript: function addScript() {
    var script = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var element = document.createElement('script');
    element.type = 'text/javascript';
    element.async = true;
    element.src = script;
    parent = 'body';

    if (callback != null && typeof callback === "function") {
      element.onload = function () {
        callback();
      };
    }

    document[parent].appendChild(element);
  }
};
module.exports = utils; // var w = document.querySelector("#width"),
//       h = document.querySelector("#height"),
//   c = document.querySelector("#calls"),
//   timeout = false, // holder for timeout id
//   delay = 250, // delay after event is "complete" to run callback
//   calls = 0;
// // window.resize callback function
// function getDimensions() {
// w.innerHTML = window.innerWidth;
// h.innerHTML = window.innerHeight;
// calls += 1;
// c.innerHTML = calls;
// }
// // window.resize event listener
// window.addEventListener('resize', function() {
//   // clear the timeout
// clearTimeout(timeout);
// // start timing for event "completion"
// timeout = setTimeout(getDimensions, delay);
// });
// getDimensions();
// var w = document.querySelector("#width"),
//     h = document.querySelector("#height"),
// c = document.querySelector("#calls"),
// delay = 250, // delay between calls
// throttled = false, // are we currently throttled?
// calls = 0;
// // window.resize callback function
// function getDimensions() {
// w.innerHTML = window.innerWidth;
// h.innerHTML = window.innerHeight;
// calls += 1;
// c.innerHTML = calls;
// }
// // window.resize event listener
// window.addEventListener('resize', function() {
// // only run if we're not throttled
// if (!throttled) {
// // actual callback action
// getDimensions();
// // we're throttled!
// throttled = true;
// // set a timeout to un-throttle
// setTimeout(function() {
//   throttled = false;
// }, delay);
// }  
// });
// getDimensions();

/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/header.scss":
/*!******************************!*\
  !*** ./src/scss/header.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/header.scss ./src/scss/footer.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/saskia/Documents/repos/websites/vanaf1979/wp-content/themes/vanaf1979/src/js/app.js */"./src/js/app.js");
__webpack_require__(/*! /Users/saskia/Documents/repos/websites/vanaf1979/wp-content/themes/vanaf1979/src/scss/header.scss */"./src/scss/header.scss");
module.exports = __webpack_require__(/*! /Users/saskia/Documents/repos/websites/vanaf1979/wp-content/themes/vanaf1979/src/scss/footer.scss */"./src/scss/footer.scss");


/***/ })

},[[0,"/public/js/manifest","/public/js/vendor"]]]);