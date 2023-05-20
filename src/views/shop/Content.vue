<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div class="content">
  <div class="category">
    <div :class="{'category__tag':true, 'category__tag--active':currentTab === item.tab}"
    v-for="item in categoryList"
    :key="item.name"
    @click="() => categoryClick(item.tab)"
    >
    {{ item.name }}
  </div>
  </div>
  <div class="product">
    <div class="product__one" v-for="item in productItem" :key="item.title">
      <img src="https://img.zcool.cn/community/0311d035682a5e40000018b8e50fb19.jpg?x-oss-process=image/resize,m_fill,w_260,h_195,limit_1/auto-orient,1/sharpen,100/quality,q_80/format,webp" class="product__one__img"/>
      <div class="product__one__details">
        <h4 class="product__title">{{ item.title }}</h4>
        <div class="product__sales">月售{{ item.sells }}件</div>
        <div class="product__price">
          <div class="product__price__now">&yen;<span class="product__price__now__number">{{ item.nowprice }}</span></div>
          <div class="product__price__origin">&yen;{{ item.oldprice }}</div>
        </div>
        <div class="product__amounts">
          <span class="product__amounts__mins" @click="() => changgeItemCounts(shopId, item, -1)">-</span>
          <span class="product__amounts__number">{{ cartList?.[shopId]?.[item.id]?.cnt || 0 }}</span>
          <span class="product__amounts__plus" @click="() => changgeItemCounts(shopId, item, 1)">+</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import { useRoute } from 'vue-router'
import { useCartEffect } from '@/effects/changeCartcntsEffects'

const useCategoryEffect = () => {
  const categoryList = [
    {
      name: '全部商品',
      tab: 'all'
    },
    {
      name: '秒杀',
      tab: 'seckill'
    },
    {
      name: '新鲜水果',
      tab: 'fruit'
    }
  ]
  return { categoryList }
}

const useProductEffect = (categoryList) => {
  const productData = reactive({
    currentTab: categoryList[0].tab,
    productItem: []
  })

  const categoryClick = async (tab) => {
    const res = await get('/api/usr/shop/1/products', { tab })
    productData.productItem = res.data
    productData.currentTab = tab
  }
  categoryClick('all')
  const { productItem, currentTab } = toRefs(productData)
  return { categoryClick, productItem, currentTab }
}

// const useCartEffect = () => {
//   const store = useStore()
//   const { cartList } = toRefs(store.state)
//   const changgeItemCounts = (shopId, item, changePara) => {
//     store.commit('changePdtCnt', {
//       shopId, item, changePara
//     })
//   }
//   return { cartList, changgeItemCounts }
// }

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'content',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { categoryList } = useCategoryEffect()
    const { categoryClick, productItem, currentTab } = useProductEffect(categoryList)
    const { cartList, changgeItemCounts, shiftSelectAll } = useCartEffect()
    return { categoryList, categoryClick, productItem, currentTab, shopId, cartList, changgeItemCounts, shiftSelectAll }
  }
}
</script>

<style lang="scss" scoped>
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
    background: #F5F5F5;
    overflow-y: scroll;
    &__tag {
      font-size: .14rem;
      height: .4rem;
      line-height: .4rem;
      text-align: center;
      color: #333;
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
      position: relative;
      height: .92rem;
      width: 100%;
      padding: 0 .16rem;
      border-bottom: .01rem solid #F1F1F1;
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
    &__amounts {
      // background-color: #333;
      position: absolute;
      right: .6rem;
      bottom: .1rem;
      &__mins, &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        font-size: .3rem;
        text-align: center;
      }
      &__mins {
        box-sizing: border-box;
        border-radius: 50%;
        line-height: .16rem;
        margin-right: .1rem;
        color: #666;
        border: .01rem solid #666;
      }
      &__plus {
        color: #FFF;
        line-height: .2rem;
        background-color: #0091FF;
        border-radius: 50%;
        margin-left: .1rem;
      }
      &__number {
        position: relative;
        top: -.02rem;
        font-size: .16rem;
        color: #333;
        line-height: .16rem;
      }
    }
  }
}
</style>
