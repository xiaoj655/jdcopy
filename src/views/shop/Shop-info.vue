<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont"
      @click="handleBackClick"
      >
        &#xe662;
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe6e1;</span>
        <input class="search__content__input" placeholder="请输入商品名称搜索"/>
      </div>
    </div>
    <Shop :item="item" :hideBorder="true"/>
    <Content />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Shop from '../../components/Shop.vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import Content from './Content.vue'

const useGetItemEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemsData = async () => {
    const res = await get(`/api/shop/${route.params.id}`)
    if (res?.errno === 0 && res?.data) {
      data.item = res.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemsData }
}
export default {
  name: 'shop-info',
  components: { Shop, Content },
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    const { item, getItemsData } = useGetItemEffect()
    getItemsData()
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/virables.scss';
.wrapper {
  padding: .18rem;
}
.search {
  display: flex;
  line-height: .32rem;
  margin: .14rem 0 .04rem, 0;
  &__back {
    font-size: .3rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    margin-left: .12rem;
    background: $search-bgColor;
    border-radius: 16px;
    width: 100%;
    &__icon{
      margin-left: .1rem;
      margin-right: .08rem;
      height: .3rem;
      font-size: .24rem;
      color: #B6B6B6;
    }
    &__input{
      flex: 1;
      border: none;
      outline: none;
      background: none;
      padding-right: .2rem;
      height: .32rem;
      ::placeholder{
        font-size: .14rem;
        color: #333;
        line-height: .16rem;
      }
    }
  }
}
</style>
