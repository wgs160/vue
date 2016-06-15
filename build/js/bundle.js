/*! This file is created by qgn at 2016-06-15 17:42:46 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by 15031493 on 2016/6/14.
	 */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"css/style.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by ning on 2015/2/6.
	 */
	var list_data = __webpack_require__(2);

	__webpack_require__(3);
	__webpack_require__(4);
	var components = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./app.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var vm = new Vue({
	    el:'#app',
	    components:{
	        app:components
	    },
	    data: {
	        sortparam:'',
	        order:1,
	        curPage:1,
	        maxLen:4,
	        goods:list_data.goods
	    },
	    methods:{
	        remove: function (good) {
	            this.goods.$remove(good);
	        },
	        sort: function (param) {
	            this.order = this.order * -1;
	            this.sortparam = param;
	        },
	        pageGo: function (page) {
	            this.curPage = page;
	        }
	    },
	    computed:{
	        pageLen: function () {
	            var pageNum = Math.ceil(this.goods.length/this.maxLen);
	            var array = [];
	            for (var i = 0; i < pageNum; i++) {
	                array.push(i+1);
	            }
	            return array;
	        }
	    }
	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"goods": [
			{
				"no": 1,
				"name": "苹果",
				"price": "50"
			},
			{
				"no": 2,
				"name": "波拿拿",
				"price": "22"
			},
			{
				"no": 3,
				"name": "西瓜",
				"price": "33"
			},
			{
				"no": 1,
				"name": "苹果",
				"price": "50"
			},
			{
				"no": 2,
				"name": "波拿拿",
				"price": "22"
			},
			{
				"no": 3,
				"name": "西瓜",
				"price": "33"
			},
			{
				"no": 1,
				"name": "苹果",
				"price": "50"
			},
			{
				"no": 2,
				"name": "波拿拿",
				"price": "22"
			},
			{
				"no": 3,
				"name": "西瓜",
				"price": "33"
			},
			{
				"no": 3,
				"name": "西瓜",
				"price": "33"
			},
			{
				"no": 1,
				"name": "苹果",
				"price": "50"
			},
			{
				"no": 2,
				"name": "波拿拿",
				"price": "22"
			},
			{
				"no": 3,
				"name": "西瓜",
				"price": "33"
			}
		]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by qiuguanning on 2016/6/15.
	 * 组件
	 */
	// 定义
	var MyComponent = Vue.extend({
	    template: '<div>A custom component!{{msg}}</div>',
	    // 声明 props
	    props: ['msg']
	    // prop 可以用在模板内
	    // 可以用 `this.msg` 设置
	})

	// 注册
	Vue.component('my-component', MyComponent)
	Vue.component('child', {
	    props: ['myMessage'],
	    template: '<p>{{myMessage}}</p>'
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by qiuguanning on 2016/6/15.
	 */
	//分页显示行判断
	Vue.filter('isShowLine', function (index,curPage,maxLen) {
	    return index >= (curPage - 1) * maxLen && index < curPage * maxLen;
	})

/***/ }
/******/ ]);