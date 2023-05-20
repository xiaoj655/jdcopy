<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="nearby__item" :class="{'nearby__content--border': !hideBorder }">
    <img :src="item.imgUrl" class="nearby__item__img" v-if="item.imgUrl">
    <div class="nearby__content">
      <div class="nearby__content__title">{{ item.name }}</div>
      <div class="nearby__content__tags">
        <span class="nearby__content__tag">月销{{ item.sales }}</span>
        <span class="nearby__content__tag">起送:{{ item.expressLimit }}</span>
        <span class="nearby__content__tag">配送费:{{ item.expressPrice }}</span>
      </div>
      <p class="nearby__content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'hideBorder']
}

</script>

<style lang="scss">
@import '../style/virables.scss';
.nearby__item {
      display: flex;
      padding-top: .12rem;
      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }
    }
.nearby__content {
  flex:1;
  padding-bottom: .12rem;
  &--border{
    border-bottom: .01rem solid #f1f1f1;
  }
  &__title {
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__tags{
    line-height: .18rem;
    font-size: .13rem;
    color: $content-fontcolor;
  }
  &__tag {
    margin-right: .16rem;
  }
  &__highlight {
    margin-top: .08rem 0 0 0;
    line-height: .18rem;
    font-size: .13rem;
    color: #E93B3B;
  }
}
</style>
