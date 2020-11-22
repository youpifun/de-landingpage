<template>
  <div class="header">
    <div class="header__nav-bar">
        <div class="header__logo">
            <img src="../assets/logo.jpg" alt="">
        </div>
        <div class="header__menu-pic">
            <img src="../assets/ic_menu.jpg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
    data() {
      return {
        
      }
    }
}
</script>

<style lang="sass" scoped>
  .header
    width: 100%

  .header__nav-bar
    margin: 40px 6% 0px
    display: flex
    justify-content: space-between
    align-items: center

  .header__logo
    width: 48px
    height: 48px

  .header__menu-pic
    width: 32px
    height: 32px
</style>