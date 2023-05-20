<template>
<div class="docker">
    <span v-for="(item, index) in dockerList" :key="index"
      :class="{'docker__item': true,'docker__item--active': item.text === currentPage}"
      @click="()=> currentPage = item.text"
      >
      <router-link :to="{ name:item.go }"
      style="text-decoration: none;"
      >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </span>
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe7c6;', text: '首页', go: 'Home' },
      { icon: '&#xe698;', text: '购物车', go: 'Cart' },
      { icon: '&#xe600;', text: '订单', go: 'Order' },
      { icon: '&#xe78b;', text: '我的', go: 'Usrinfo' }
    ]
    const currentPage = ref('首页')
    return { dockerList, currentPage }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/virables.scss';

.docker{
    display: flex;
    position: fixed;
    box-sizing: border-box;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width:100%;
    height: 0.49rem;
    border-top: .01rem solid #f1f1f1;
    color: $content-fontcolor;
    background-color: #fff;
    &__item {
    flex:1;
    text-align: center;
    .iconfont{
      margin-top: .07rem;
      margin-bottom: .018rem;
      font-size: .2rem;
    }
    &--active {
    color: #1FA4FC;
      }
    }
  }
.docker__item a {
  color: #333;
}
.docker__item.docker__item--active a {
  color: #1FA4FC;
}

  .docker__title{
    font-size: 20px;
    transform: scale(0.5,0.5);
    transform-origin: center top;
  }
  body{
    font-size: .12rem;
  }
</style>
