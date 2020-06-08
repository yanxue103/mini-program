// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showtitle: '',
    showdesc: '',
    showimg: '',
    showProList: [
      { title: '我是but1', desc: '我是好产品1', img: '/icon/mine.png' },
      { title: '我是but1', desc: '我是好产品1', img: '/icon/mine_.png' },
      { title: '我是but1', desc: '我是好产品1', img: '/icon/mine.png' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodsID = options.goodsID;
    // console.log(goodsID);
    this.setData({
      showtitle: this.data.showProList[goodsID].title,
      showdesc: this.data.showProList[goodsID].desc ,
      showimg: this.data.showProList[goodsID].img,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})