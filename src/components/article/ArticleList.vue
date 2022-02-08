<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img
            :src="cover.images"
            alt=""
            class="thumb"
            v-if="cover.type === 1"
          />
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="cover.type === 3">
          <img
            :src="item"
            alt=""
            class="thumb"
            v-for="(item, index) in cover.images"
            :key="index"
          />
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >作者 {{ autName }}&nbsp;&nbsp; {{ commCount }}评论 &nbsp;&nbsp;
            发布日期 {{ pubDate }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    artId: {
      // type []表示类型是string 或 number 均可
      type: [String, Number],
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    autId: {
      type: String,
      default: ''
    },
    commCount: {
      type: String,
      default: ''
    },
    pubDate: {
      type: String,
      default: ''
    },
    autName: {
      type: String,
      default: ''
    },
    cover: {
      // object 的默认值为一个函数
      type: Object,
      default: function () {
        const type = 0
        return type
      }
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
