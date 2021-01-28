<template>
  <div>
    <h1>マサラタウン</h1>
    <button @click="toTrainers">トレーナールームへ行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters("count", ["doubleCount", "tripleCount"]),
  // ルートコンポーネントを移動する際の処理
  beforeRouteLeave(to, from, next) {
    const isLeave = window.confirm('本当にこのページを離れますか？');
    if(isLeave) {
      next();
    }else {
      next(false);
    }
  },
  methods: {
    toTrainers() {
      this.$router.push({
        name: 'trainers-id-log',
        params: {id: 1 },
      })
    },
  }
}
</script>

<style scoped>
h1 {
 color: #8cacd3;
}
</style>