<template>
<div class="nearby">
  <h3 class="nearby__title">附近店铺</h3>
  <router-link :to= "`/shopinfo/${item._id}`" v-for="item in nearbyList" :key="item._id">
  <Shop :item="item" />
  </router-link>
</div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import Shop from '../../components/Shop.vue'

const useNearbyEffect = () => {
  const nearbyList = ref([])
  const getItems = async () => {
    try {
      const res = await get('/api/usr/hot-list')
      console.log(res)
      console.log(1)
      if (res?.errno === 0) {
        nearbyList.value = res.data
      }
    } catch (e) {
      console.log('error')
    }
  }

  return { nearbyList, getItems }
}
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nearby',
  components: { Shop },
  setup () {
    const { nearbyList, getItems } = useNearbyEffect()
    getItems()
    // console.log(nearbyList.value)
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixins.scss';
@import '../../style/virables.scss';
.nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      font-weight: normal;
      color: $content-fontcolor;
    }
    a {
      text-decoration: none;
    }
  }
</style>
