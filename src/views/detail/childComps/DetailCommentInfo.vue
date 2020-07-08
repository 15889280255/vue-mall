<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="comment-header">
      <div>用户评价</div>
      <div>
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{commentInfo.user.uname}}</span>
    </div>

    <div class="info-detail">
      <div>{{commentInfo.content}}</div>
      <div class="info-other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/common/util";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate: function(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>

<style scoped>
.comment-header {
  display: flex;
  justify-content: space-between;
  line-height: 45px;
  border-bottom: 2px solid #f6f6f6;
  padding: 0px 16px;
}
.info-user {
  padding: 10px 16px;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.info-detail {
  padding: 0px 16px;
  font-size: 15px;
}
.info-other {
  font-size: 14px;
  font-weight: 600;
  color: #a1a1a1;
  padding: 8px 0px;
}
.info-other .date {
  margin-right: 8px;
}
  .info-imgs {
    margin-top: 10px;
  }

  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>