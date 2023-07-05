<template>
  <nav>
    <div class="nav-wrapper">
      <div class="button-container">
        <button class="logo">
          <router-link :to="{ name: 'home' }">E</router-link>
        </button>
        <label
          class="menu"
          style="
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
          "
        >
          <input type="checkbox" v-model="navOpen" />
        </label>
      </div>
    </div>
    <div class="link-container" :class="{ active: navOpen }">
      <div class="link">
        <router-link :to="{ name: 'skills' }">#Skills</router-link>
      </div>
      <div class="link">
        <router-link :to="{ name: 'careers' }">#Careers</router-link>
      </div>
      <div class="link">
        <router-link :to="{ name: 'academic' }">#Academic</router-link>
      </div>
      <div class="link">
        <router-link :to="{ name: 'projects' }">#Projects</router-link>
      </div>
    </div>
    <div class="backdrop" :class="{ open: navOpen }"></div>
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
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.link-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* transform: scale(1, 0); */
  opacity: 0;
  transition: opacity 0.2s ease-in 1s;
  /* , transform 0.2s ease-in 1s; */
  transform-origin: top;
  height: 100vh;
  width: 100%;
  position: absolute;
}

.active {
  opacity: 1;
  /* transform: scale(1, 1); */
}

.link a {
  text-decoration: none;
  color: white;
  font-size: 13vh;
  opacity: 0;
  transform: translateX(-100%);
  animation: slideIn 0.2s ease-in forwards;
  animation-delay: 1s;
}

.button-container {
  display: flex;
  position: relative;
}

button {
  all: unset;
  width: 100px;
  height: 100px;
  background-color: #000000;
  text-align: center;
  font-size: 30px;
}

button a {
  text-decoration: none;
  color: white;
}

.nav-wrapper {
  position: relative;
}

.menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 20%;
  right: 10%;
  width: max-content;
}

.menu::before,
.menu input {
  content: "";
  width: 50px;
  height: 5px;
  background: white;
  transform: rotate(0deg);
  transition: transform 0.5s;
}
.menu::before {
  position: absolute;
  transform: scale(0, 1) rotate(0deg);
  transition: transform 0.5s 0.5s;
}

.menu input {
  appearance: none;
  padding: 0;
  margin: 0;
  outline: 0;
  pointer-events: none;
}

.menu input:checked {
  transform: rotate(45deg);
}

.menu:has(input:checked)::before {
  transform: scale(1, 1) rotate(-45deg);
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(14px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s 1s;
  z-index: -1;
}

.backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
