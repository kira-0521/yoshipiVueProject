<template>
  <div class="main">
    <transition name="fade" mode="out-in">
      <router-view name="header"></router-view>
    </transition>
    <hr>
    <transition 
      name="fade" 
      mode="out-in"
      @before-enter="beforeEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      // thisはapp.vue
      // ルートインスタンスでtriggerScrollが起こった時
      this.$root.$emit('triggerScroll');
    }
  }
}
</script>

<style scoped>
  .main {
    margin: 0 auto;
    width: 700px;
    padding-top: 50px;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
</style>