import { getAllNodes } from '../../utils/api.js';

Page({
  data: {
    title: '分类',
    nodes: [],
    hidden: false
  },
  fetchData() {
    const that = this;
    wx.request({
      url: getAllNodes(),
      success(res) {
        that.setData({
          nodes: res.data
        })
        setTimeout(() => {
          that.setData({ hidden: true });
        }, 300)
      }
    })
  },
  onLoad: function (options) {
    this.fetchData();
  },
})