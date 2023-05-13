<template>
<div class="nearby">
  <h3 class="nearby__title">附近店铺</h3>
  <div v-for="(item, index) in nearbyList" :key="index"
  class="nearby__item">
    <img :src="item.imgUrl" class="nearby__item__img">
    <div class="nearby__content">
      <div class="nearby__content__title">{{ item.title }}</div>
      <div class="nearby__content__tags">
        <span v-for="tag in item.tags"
        class="nearby__content__tag" :key="tag">{{ tag }}</span>
      </div>
      <p class="nearby__content__highlight">{{ item.desc }}</p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nearby',
  setup () {
    const nearbyList = [
      { title: 'wemart', tags: ['月售1万+', '起送0', '在线回收'], desc: 'VIP尊享满89元减4元运费券(每月3张)', imgUrl: 'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg' },
      { title: 'wemart', tags: ['月售1万+', '月售1万+', '月售1万+'], desc: 'VIP尊享满89元减4元运费券(每月3张)', imgUrl: 'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg' },
      { title: 'wemart', tags: ['月售1万+', '起送0', '在线回收'], desc: 'VIP尊享满89元减4元运费券(每月3张)', imgUrl: 'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg' },
      { title: 'wemart', tags: ['月售1万+', '起送0', '在线回收'], desc: 'VIP尊享满89元减4元运费券(每月3张)', imgUrl: 'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg' },
      { title: 'wemart', tags: ['月售1万+', '起送0', '在线回收'], desc: 'VIP尊享满89元减4元运费券(每月3张)', imgUrl: 'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg' },
      { title: 'wemart', tags: ['月售1万+', '起送0', '在线回收'], desc: 'VIP尊享满89元减4元运费券(每月3张)', imgUrl: 'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg' },
      { title: 'wemart', tags: ['月售1万+', '起送0', '在线回收'], desc: 'VIP尊享满89元减4元运费券(每月3张)', imgUrl: 'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg' }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss">
@import '../../style/mixins.scss';
@import '../../style/virables.scss';
.nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      font-weight: normal;
      color: $content-fontcolor;
    }
    &__item {
      display: flex;
      padding-top: .12rem;
      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }
    }
    &__content {
      flex:1;
      padding-bottom: .12rem;
      border-bottom: 1px solid #f1f1f1;
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
  }
</style>
