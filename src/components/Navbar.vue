<template>
  <nav>
    <div class="button-container">
      <button class="logo">
        <router-link :to="{ name: 'home' }">E</router-link>
      </button>
      <div class="nav-toggler" @click="handleClick">-</div>
    </div>
    <div class="nav-wrapper">
      <div class="link-container" v-show="navOpen">
        <router-link :to="{ name: 'skills' }">#Skills</router-link>
        <router-link :to="{ name: 'careers' }">#Careers</router-link>
        <router-link :to="{ name: 'academic' }">#Academic</router-link>
        <router-link :to="{ name: 'projects' }">#Projects</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    handleClick() {
      console.log("click");
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
}

button {
  all: unset;
  width: 100px;
  height: 100px;
  background-color: lightgreen;
}

.nav-wrapper {
  backdrop-filter: blur(14px);
}

.nav-toggler {
  background-color: lightblue;
  width: 100px;
  height: 100px;
}

.link-container {
  display: flex;
  flex-direction: column;
}
</style>
