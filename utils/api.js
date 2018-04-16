const host_base = "https://www.v2ex.com/api/";

// 所有节点
const all_nodes = "nodes/all.json";
// 通过节点 id, name 获取信息
const node_info = "nodes/show.json";

// 主题
const topics = "topics/show.json";
// 获取最新主题
const latest_topics = "topics/latest.json";
// 获取最热主题
const hotest_topics = "topics/hot.json";

// 获取回复
const replies = "replies/show.json";
// 获取用户信息
const user_info = "members/show.json";

const _encodeURL = (obj) => (
  Object.keys(obj).map(item => (
    encodeURIComponent(item) + '=' + encodeURIComponent(obj[item])
  ))
)

const getAllNodes = () => ( host_base + all_nodes );
const getNodeInfo = (obj) => (host_base + node_info +'?' + _encodeURL(obj));
const getTopicInfo = (obj) => (host_base + topics + '?' + _encodeURL(obj));
const getLatestTopics = (obj) => (host_base + latest_topics +'?' + _encodeURL(obj));
const getHotestInfo = (obj) => (host_base + hotest_topics +'?' + _encodeURL(obj));
const getReplies = (obj) => ( host_base + replies + '?' + _encodeURL(obj));

module.exports = {
  getAllNodes,
  getNodeInfo,
  getTopicInfo,
  getLatestTopics,
  getHotestInfo,
  getReplies,
}