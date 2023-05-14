<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="content">
  <div class="category">
    <div class="category__tag category__tag--active">全部商品</div>
    <div class="category__tag">秒杀</div>
    <div class="category__tag">新鲜水果</div>
    <div class="category__tag">时令蔬菜</div>
    <div class="category__tag">肉蛋家禽</div>
  </div>
  <div class="product">
    <div class="product__one">
      <img src="https://img.zcool.cn/community/0311d035682a5e40000018b8e50fb19.jpg?x-oss-process=image/resize,m_fill,w_260,h_195,limit_1/auto-orient,1/sharpen,100/quality,q_80/format,webp" class="product__one__img"/>
      <div class="product__one__details">
        <h4 class="product__title">番茄250g/份</h4>
        <div class="product__sales">月售10件</div>
        <div class="product__price">
          <div class="product__price__now">&yen;<span class="product__price__now__number">33.6</span></div>
          <div class="product__price__origin">&yen;33.6</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'content'
}
</script>

<style lang="scss">
.content {
  position: absolute;
  display: flex;
  top: 1.5rem;
  right: 0;
  left: 0;
  bottom: .5rem;
  .category{
    width: .76rem;
    height: 100%;
    overflow-y: scroll;
    &__tag {
      font-size: .14rem;
      height: .4rem;
      line-height: .4rem;
      text-align: center;
      color: #333;
      background: #F5F5F5;
      &--active {
        background: #FFF;
      }
    }
  }
  .product {
    flex:1;
    overflow-y: scroll;
    overflow-x: hidden;
    &__one {
      display: flex;
      height: .92rem;
      width: 100%;
      padding: 0 .16rem;
      border-bottom: 1px solid #F1F1F1;
      &__img {
        height: .68rem;
        width: .68rem;
        margin-top: .1rem;
        margin-right: .16rem;
      }
    }
    &__title {
      font-size: .14rem;
      margin: .1rem 0 .08rem 0;
      color: #333;
    }
    &__sales {
      font-size: .12rem;
      color: #333;
      line-height: .16rem;
      margin-bottom: .1rem;
    }
    &__price {
      &__now {
        color:#E93B3B ;
        font-size: .12rem;
        display: inline-block;
        margin-right: .12rem;
        &__number {
          font-size: .16rem;
        }
      }
      &__origin {
        display: inline-block;
        font-size: .12rem;
        color: #999;
        text-decoration: line-through;
      }
    }
  }
}
</style>
