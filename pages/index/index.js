//引入 用来发送请求的方法 一定要把路径补全
// import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[
      {
        goods_id:1,
        image_src:"./img/swiper_1.png",
      },
      {
        goods_id:2,
        image_src:"./img/swiper_2.png",
      },
      {
        goods_id:3,
        image_src:"./img/swiper_3.png",
      },
      {
        goods_id:4,
        image_src:"./img/swiper_4.png",
      },
      {
        goods_id:5,
        image_src:"./img/swiper_5.png",
      },
      {
        goods_id:6,
        image_src:"./img/swiper_6.png",
      }
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //发送异步请求来获取轮播图数据

    // wx.request({
    //   rul:'',
    //   success:(result)=>{
    //     this.setData({
    //       swiperList:result.
    //     })
    //   }
    // })

    //请求优化：

    // request({rul:"后台接口地址"})
    // .then(result=>{
    //   this.setData({
    //     swiperList:result....
    // })

  //   var reqTask = wx.request({
  //     url: 'http://47.92.236.105:8181/library/findAll',
  //     success: (result)=>{
  //       console.log(result);
  //     },
  //   });
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