<template>
  <nav>
      <h2>Trainers</h2>
      <router-link 
        to="/" 
        class="link"
        active-class="active-pokemon"
        exact>
        Town
      </router-link>
      <router-link 
        to="/trainers/1#next-trainer"
        class="link"
        active-class="active-pokemon"
        exact
        >
        Trainers
      </router-link>
    </nav>
</template>

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