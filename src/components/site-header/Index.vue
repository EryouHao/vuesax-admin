<template>
  <div class="site-header">
    <vs-navbar class="header">
      <vs-navbar-title>Vuesax Admin</vs-navbar-title>
      <vs-spacer></vs-spacer>
      <vs-dropdown vs-trigger-click>
        <a href="#" class="username">
          Vuesax
          <i class="material-icons">
            expand_more
          </i>
        </a>
        <vs-dropdown-menu class="user-dropdown-menu">
          <vs-dropdown-item>
            Setting
          </vs-dropdown-item>
          <vs-dropdown-item divider>
            Sign Out
          </vs-dropdown-item>
        </vs-dropdown-menu>

      </vs-dropdown>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.site-header
  .header
    height 56px
    padding 0 16px
  .username
    display flex
    align-items center

.user-dropdown-menu
    min-width 200px
</style>
