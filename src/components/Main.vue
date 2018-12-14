<template>
  <div class="main">
    <!-- <site-header></site-header> -->
    <div class="main-content">
      <sidebar></sidebar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import SiteHeader from './site-header/Index'
import Sidebar from './sidebar/Index'

export default {
  components: {
    // SiteHeader,
    Sidebar,
  },
  data() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
</style>
