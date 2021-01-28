<template>
  <nav>
    <h2>town</h2>
    <router-link
      to="/"
      class="link"
      active-class="active-pokemon"
      exact>
      Town
    </router-link>
    <router-link
      to="/trainers/1"
      class="link"
      active-class="active-pokemon"
      exact>
      Trainers
    </router-link>
    <button @click="increment(3)">+1</button>
    <button @click="decrement(2)">-1</button>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("count", ["increment", "decrement"])
  }
}
</script>

<style scoped>
h2 {
  color: #d3b38c;
}
.link {
    margin-right: 10px;
  }
  .active-pokemon {
    font-size: 20px;
    font-weight: bold;
  }
</style>