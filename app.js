var util = require('/utils/util.js');
var API = require('/api/api.js');

//app.js
App({
	onLaunch: function (options) {
		console.log('小程序开始运行');
		console.log(options);

		this.init();
	},
	onShow: function (options) {
		console.log('在此小程序中');
		console.log(options);
		//场景值
		this.data.scene = options.scene
	},
	onHide: function () {
		console.log('不在此小程序中');
	},
	onError: function (msg) {
		console.log('有错误:' + msg);
	},
	config: {
		//接口host
		host: 'https://test.com', //测试地址
		//host: 'https://api.com', //正式地址

		//统一图片地址host
		imghost: '',
		//版本
		version: '0.0.1',
		//渠道名称 
		channel: 'miniProgram'
	},
	init: function () {

	},
	data: {
		//场景值
		scene: null,
	},
	apiList: {

	},
	apiCouponGet: function (url, data, callback) {
		var channel_name = this.config.channel;
		wx.request({
			url: this.config.host + url,
			data: data,
			method: 'GET',
			dataType: 'json',
			header: { 'content-type': 'application/json;charset=UTF-8', 'channel': channel_name },
			success: function (res) {
				callback(res.data)
			},
			fail: function (res) {
				console.log(res);
			},
			complete: function (res) {
				console.log(res);
			}
		})
	},
	apiCouponPost: function (url, data, callback) {
		var channel_name = this.config.channel;
		wx.request({
			url: this.config.host + url,
			data: data,
			method: 'POST',
			dataType: 'json',
			header: { 'content-type': 'application/json;charset=UTF-8', 'channel': channel_name },
			success: function (res) {
				callback(res.data)
			},
			fail: function (res) {
				console.log(res);
			},
			complete: function (res) {
				console.log(res);
			}
		})
	},
	apiCouponPut: function (url, data, callback) {
		var channel_name = this.config.channel;
		wx.request({
			url: this.config.host + url,
			data: data,
			method: 'PUT',
			dataType: 'json',
			header: { 'content-type': 'application/json;charset=UTF-8', 'channel': channel_name },
			success: function (res) {
				callback(res.data)
			},
			fail: function (res) {
				console.log(res);
			},
			complete: function (res) {
				console.log(res);
			}
		})
	},
	totast: function (title, icon, image) {
		wx.showToast({
			title: title,
			icon: icon,
			image: image,
			mask: true,
			duration: 1000
		})
	},
	alert: function (msg) {
		wx.showModal({
			content: msg,
			showCancel: false,
		});
	},
	loading: function () {
		wx.showLoading({
			title: '加载中...',
			mask: true
		});
	},
	hideloading: function () {
		wx.hideLoading();
	},
	initJsacc: function (foo) {
		if (isNaN(foo / 0)) {
			return 0;
		} else {
			return foo;
		}
	},
	util,
	API
})