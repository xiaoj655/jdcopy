<template>

  <div class="position">
    <span class="iconfont position__icon">&#xe7f1;</span>
    深圳技术大学深圳技术大学深圳技术大学深圳技术大学深圳技术大学深圳技术大学
    <span class="iconfont position__notice">&#xe60d;</span>
    <div class="search">
      <span class="iconfont">&#xe6e1;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
  </div>
  <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg">
    </div>
    <div class="icons">
      <div v-for="(item, index) in iconsList" :key="index"
      class="icons__item">
        <img :src="item.imgUrl" class="icons__item__img"/>
        <p class="icons__item__desc">{{ item.imgName }}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' },
      { imgName: '超市便利', imgUrl: 'https://m.360buyimg.com/babel/jfs/t1/57520/8/375/4092/5cd4f1d8Ea1266047/1c590322ece537ba.png' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/virables.scss';
@import '../../style/mixins.scss';
.wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .5rem;
    top: 0;
    padding: 0 .18rem .2rem .18rem;
    .position {
      position: relative;
      padding: .16rem 0;
      padding-right: .3rem;
      line-height: .22rem;
      font-size: .16rem;
      @include ellipsis;
      .position__icon {
        position: relative;
        top: .01rem;
        font-size: .2rem;
      }
      .position__notice {
        position: absolute;
        right: 0;
        top: .17rem;
        font-size: .2rem;
      }
      color: $content-fontcolor;
    }
  }
  .search {
    margin: .16rem .18rem .12rem .18rem;
    background-color: #f5f5f5;
    border-radius: .16rem ;
    height: .32rem;
    line-height: .32rem;
    width: 3.1rem;
    // box-sizing: border-box;
    .iconfont{
      font-size: .18rem;
      margin-left: .16rem;
    }
    &__text{
      position: relative;
      top: -.02rem;
      margin-left: .12rem;
      font-size: .15rem;
      color: #b7b7b7;
    }
  }
  .banner{
    // width: 3.39rem;
    // height: .86rem;
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    margin:0 .18rem .16rem .18rem ;
    &__img{
      width: 100%;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;
    &__item{
      width: 20%;
      &__img{
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }
      &__desc{
        margin: .05rem 0 .16rem 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }
  .gap {
    overflow: visible;
    margin: 0 -.3rem;
    height: .1rem;
    background: #f1f1f1;
  }
</style>
