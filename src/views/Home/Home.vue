<template>
<div class="wrapper">
  <StaticPart />
  <Nearby />
</div>
  <docker/>
</template>

<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: { StaticPart, Nearby, Docker }
}

</script>
  <style lang="scss" scoped>
  .wrapper{
    padding: .2rem;
    overflow-x: hidden;
  }
  </style>
