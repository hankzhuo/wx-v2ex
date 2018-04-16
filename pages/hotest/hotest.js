import { getHotestInfo } from '../../utils/api.js';

Page({
  data: {
    title: "最热话题",
    latest: [],
    hidden: false
  },
  fetchData(cb) {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: getHotestInfo({ page: 1 }),
      success(res) {
        that.setData({
          latest: res.data
        })
        setTimeout(() => {
          that.setData({ hidden: true })
          cb();
        }, 300)
      }
    })
  },
  onLoad() {
    this.fetchData(() => (console.log()));
  },
  onPullDownRefresh() {
    this.fetchData(function () {
      wx.stopPullDownRefresh();
    });
  },
  goToDetail(event) {
    const id = event.currentTarget.id;
    const url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url,
    })
  }
})