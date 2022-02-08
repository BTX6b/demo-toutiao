import request from '@/utils/request.js'
// 向外按需导出API函数 非默认导出时要注意是导出接口 不能导出单个值，如100或(let a = 100 )a 多个时需要加上{}
export const getArticleListAPI = function(page, limit) {
  return request.get('/articles', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}
