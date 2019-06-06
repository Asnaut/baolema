<template>
  <div>
    <router-view> </router-view>
    <footerGuide v-show="$route.meta.showFooter"></footerGuide>

  </div>
</template>

<script>
import footerGuide from './components/footerGuide/footGuider'
export default {
  components: {
    footerGuide
  }
}

</script>
<style lang='stylus' scoped></style>
