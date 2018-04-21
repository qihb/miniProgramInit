//API
//微信支付api函数
module.exports.wxPay = function wxPay(){

}
//小程序登录api函数
module.exports.loginMini = function loginMini(){
	
}
//小程序更新检查
module.exports.wxUpdateManager = function wxUpdateManager() {
	const updateManager = wx.getUpdateManager()

	updateManager.onCheckForUpdate(function (res) {
		// 请求完新版本信息的回调
		console.log(res.hasUpdate)
	})

	updateManager.onUpdateReady(function () {
		wx.showModal({
			title: '更新提示',
			content: '新版本已经准备好，是否重启应用？',
			success: function (res) {
				if (res.confirm) {
					// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
					updateManager.applyUpdate()
				}
			}
		})

	})

	updateManager.onUpdateFailed(function () {
		// 新的版本下载失败
	})
}
