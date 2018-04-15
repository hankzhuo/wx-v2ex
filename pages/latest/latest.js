import { getLatestTopics } from '../../utils/api.js';

Page({
  data: {
    title: "最新话题",
    latest: [],
    hidden: false
  },
  onPullDownRefresh() {
    this.fetchData();
  },
  fetchData() {
    var that = this;
    that.setData({
      hidden: false
    })
    wx.request({
      url: getLatestTopics({p: 1}),
      success(res) {
        that.setData({
          latest: res.data
        })
        setTimeout(() => that.setData({hidden: true}), 300)
      }
    })
  },
  onLoad() {
    this.fetchData();
  },
  goToDetail(event) {
    const id = event.currentTarget.id;
    const url = '../detail/detail?id=' + id;
    wx.navigateTo({
      url: url,
    })
  }
})