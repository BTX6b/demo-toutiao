<template>
  <div class="home-container">
    <van-nav-bar title="今日头条" fixed />
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      :disabled="finished"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- 注意 如果自定义属性props使用小驼峰命名如artId 那么在绑定时可以写成art-id -->
        <ArticleList
          v-for="item in articleList"
          :key="item.id"
          :art-id="item.art_id"
          :title="item.title"
          :aut-id="item.aut_id"
          :comm-count="item.comm_count"
          :pub-date="item.pubdate"
          :aut-name="item.aut_name"
          :cover="item.cover"
        ></ArticleList>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 从非默认导出模块中导入模块 必须加上{} 默认导出模块只能导出一个
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleList from '@/components/article/ArticleList.vue'
export default {
  data() {
    return {
      // 传入数据页数
      page: 1,
      // 出入数据条数
      limit: 10,
      articleList: [],
      loading: true,
      finished: false,
      isLoading: false
    }
  },
  // 生命周期函数
  created() {
    this.initArticleList()
  },
  methods: {
    async initArticleList(isRefresh) {
      // getArticleListAPI返回一个promise对象
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      console.log(res)
      if (isRefresh) {
        this.articleList = [...res, ...this.articleList]
        this.isLoading = false
      } else {
        // 两个数组拼接 ...可以将res数组的值解构出来 上拉加载 旧数据在前 新数据在后
        this.articleList = [...this.articleList, ...res]
        this.loading = false
      }
      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      this.page++
      this.initArticleList()
    },
    onRefresh() {
      this.page++
      this.initArticleList(true)
    }
  },
  components: {
    ArticleList
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: #007fff;
  }
  // 如果引入的组件库覆盖样式没有生效 一般是引起了冲突 可以加/deep/试试 底层其实是后代选择器
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
}
</style>
