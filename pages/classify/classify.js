import { getAllNodes } from '../../utils/api.js';

Page({
  data: {
    title: '分类',
    nodes: [],
    hidden: false,
    input: '',
    disable: false,
    plain: false,
    loading: false
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
  onLoad(options) {
    this.fetchData();
  }
})