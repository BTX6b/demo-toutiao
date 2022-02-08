<template>
  <div>
    <!-- 引入 <router-view></router-view> 占位符 -->
    <router-view></router-view>
    <!-- 导入 链接相关组件 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped></style>
