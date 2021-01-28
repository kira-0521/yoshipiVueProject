<template>
  <div>
    <h1>トレーナー</h1>
    <router-link
      to="/trainers/shigeru"
      class="trainer"
      active-class="active-trainer"
      exact>
      シゲル
      </router-link>
    <router-link
      to="/trainers/red"
      class="trainer"
      active-class="active-trainer"
      exact>
      レッド
      </router-link>
    <hr>
    <h2>Trainer Name : {{ id }}</h2>
    <router-link :to="'/trainers/' + (Number(id) + 1) + '/log?lang=ja#next-trainer'">次のトレーナー</router-link>

    <div style="height: 700px;"></div>
    <router-link id="next-trainer" :to="{ name: 'trainers-id-log', params: { id: Number(id) + 1}, query: {lang: 'ja', page: '2'}, hash: '#next-trainer' }">次のトレーナー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // コンポーネントが表示されるときに実行される
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    // vmを使うと非同期的に実行される
    next(vm => {
      console.log(vm.id);
    });
  },
  // ライフサイクルフックが実行されないときに発動するもの。ネストされたコンポーネントなど。
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    const isLeave = window.confirm('本当にこのページを離れますか？');
    if(isLeave) {
      next();
    } else {
      next(false);
    }
  }
}
</script>

<style scoped>
h1 {
  color: #8cacd3;
}
h2 {
  color: #73532c;
}
.trainer {
  margin-right: 10px;
}
.active-trainer {
  font-weight: bold;
  font-size: 20px;
}
</style>