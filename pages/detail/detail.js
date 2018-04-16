import { getTopicInfo, getReplies } from '../../utils/api.js';
import { transTime, formatTime } from '../../utils/util.js';

Page({
  data: {
    title: '详情',
    id: '',
    detail: {},
    replies: [],
    hidden: false
  },
  fetchDetail(id) {
    var that = this;
    wx.request({
      url: getTopicInfo({id}),
      success(res) {
        res.data[0].created = formatTime(transTime(res.data[0].created))
        that.setData({
          detail: res.data[0]
        })
        that.fetchReplies(id, () => (console.log()));
      }
    })
  },
  fetchReplies(id, cb) {
    var that = this;
    wx.request({
      url: getReplies({topic_id: id}),
      success(res) {
        res.data.forEach(item => item.created = formatTime(transTime(item.created)));
        that.setData({
          replies: res.data
        });
        setTimeout(() => {
          that.setData({ hidden: true });
        }, 300)
      }
    })
  },
  onLoad(options) {
    this.fetchDetail(options.id)
  },
})