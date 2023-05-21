<template>
<div class="wrapper">
<div class="top">
  <div class="usr">
    <div class="usr__name">热心市民马先生</div>
    <div class="usr__id">ID: 1069643013</div>
    <img src="https://pica.zhimg.com/v2-5ae4474f93159cc07005ab082e6475ac.jpg?source=57bbeac9" class="usr__img">
    <div class="usr__complex">
      <div class="usr__complex__red">
        <div>红包</div>
        <br>
        <div style="font-size: 20px;color: #262628;">218</div>
      </div>
      <div class="usr__complex__coupon">
        <div>优惠券</div>
        <br>
        <div style="font-size: 20px;color: #262628;">12张</div>
      </div>
    </div>
  </div>
</div>
<div class="down">
  <div class="down__inner">
    <div class="down__wallet iconfont">&#xe6e0; 我的钱包 <span class="iconfont" style="float: right; transform: rotate(180deg);">&#xe662;</span></div>
    <div class="down__adress iconfont">&#xe6db; 我的地址 <span class="iconfont" style="float: right; transform: rotate(180deg);">&#xe662;</span></div>
    <div class="down__help iconfont">&#xebbc; 客服与帮助 <span class="iconfont" style="float: right; transform: rotate(180deg);">&#xe662;</span></div>
  </div>
</div>
</div>
<Docker page='我的'/>
</template>

<script>
import Docker from '../../components/Docker.vue'

export default {
  name: 'Usr-info',
  components: { Docker }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #ECECEC;
}
.top {
  height: 3.11rem;
  background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
}
.usr {
  position: absolute;
  top: 1.08rem;
  right: .18rem;
  left: .18rem;
  background-color: #FFF;
  width: 3.4rem;
  height: 1.6rem;
  padding-top: .5rem;
  border-radius: .08rem;
  box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
  &__img {
    position: absolute;
    width: .94rem;
    height: .94rem;
    top: 0;
    left: 1.7rem;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  &__name {
    font-size: 24px;
    color: #262628;
    letter-spacing: 0.19px;
    text-align: center;
    line-height: 36px;
  }
  &__id {
    margin-top: .06rem;
    font-size: 14px;
    color: #C1C0C9;
    text-align: center;
    padding-bottom: .12rem;
    border-bottom: 1px solid #F1F1F1;
  }
  &__complex {
    display: flex;
    text-align: center;
    padding-top: .16rem;
    &__red{
      flex: 1;
      font-size: 12px;
      color: #C1C0C9;
    }
    &__coupon {
      flex:1;
      font-size: 12px;
      color: #C1C0C9;
    }
  }
}
.down {
  position: absolute;
  // display: flex;
  // flex-direction: column;
  top: 3.4rem;
  right: .18rem;
  left: .18rem;
  height: 1.46rem;
  background: #FFFFFF;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.08);
  border-radius: 8px;
  padding: .08rem .14rem .14rem .14rem;
  line-height: .53rem;
  &__inner {
    display: flex;
  flex-direction: column;
  }
  &__wallet {
    flex:1;
  }
  &__adress {
    flex:1;
  }
  &__help {
    flex:1;
  }
}
</style>
