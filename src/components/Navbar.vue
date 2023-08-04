<template>
  <nav>
    <div class="nav-wrapper">
      <div class="button-container">
        <button
          class="logo"
          @click="closeNavbar"
          @mouseenter="onHover"
          @mouseleave="onLeave"
        >
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
          @mouseover.stop.prevent="onHover"
          @mouseleave="onLeave"
        >
          <input type="checkbox" v-model="navOpen" />
        </label>
      </div>
    </div>
    <div class="link-container" :class="{ active: navOpen }">
      <div
        class="link"
        @click="closeNavbar"
        @mouseenter="onHover"
        @mouseleave="onLeave"
      >
        <router-link :to="{ name: 'skills' }">#Skills</router-link>
      </div>
      <div
        class="link"
        @click="closeNavbar"
        @mouseenter="onHover"
        @mouseleave="onLeave"
      >
        <router-link :to="{ name: 'careers' }">#Careers</router-link>
      </div>
      <div
        class="link"
        @click="closeNavbar"
        @mouseenter="onHover"
        @mouseleave="onLeave"
      >
        <router-link :to="{ name: 'academic' }">#Academic</router-link>
      </div>
      <div
        class="link"
        @click="closeNavbar"
        @mouseenter="onHover"
        @mouseleave="onLeave"
      >
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
      this.navOpen = !this.navOpen;
    },
    closeNavbar() {
      this.navOpen = false;
    },
    onHover() {
      this.$emit("handle-mouse-hover");
    },
    onLeave() {
      this.$emit("handle-mouse-leave");
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
}

.button-container {
  display: flex;
  position: relative;
}

button {
  all: unset;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  margin-left: 1rem;
  transition: transform 0.8s ease-in;
}

button a {
  text-decoration: none;
  color: white;
}

button:hover {
  transform: rotate(360deg);
  transform-origin: center;
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
  transition: transform 0.5s;
}
.menu::before {
  position: absolute;
  transform: scale(0, 1);
  transition: transform 0.4s 0.3s;
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

.link-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(1, 0);
  transform-origin: top;
  height: 100vh;
  width: 100%;
  position: absolute;
  
}

.active {
  opacity: 1;
  transform: scale(1, 1);
  transition: opacity 0.2s ease-in 0.5s, transform 0.2s ease-in 0.4s;
}

.link a {
  text-decoration: none;
  color: white;
  font-size: 10vh;
  opacity: 0;
  animation: slideIn 0.2s ease-in forwards;
  animation-delay: 1s;
}

.link {
  transition: transform 0.5s ease-in;
}

.link:hover {
  transform: translate(30px, 0);
}

.link a:hover::before {
  content: ">>";
  color: white;
  font-size: 13vh;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  opacity: 0;
  pointer-events: none;
  z-index: -1;
    transition: opacity 0.2s 0.3s;
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
