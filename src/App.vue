<template>
  <div id="app">
    <Navbar
      @handle-mouse-hover="handleMouseHover"
      @handle-mouse-leave="handleMouseLeave"
    />
    <div class="cursor" ref="cursor"></div>
    <body>
      <router-view />
    </body>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    handleMouseHover() {
      const cursor = this.$refs.cursor;
      cursor.style.transform = "scale(3)";
    },
    handleMouseLeave() {
      const cursor = this.$refs.cursor;
      cursor.style.transform = "scale(1)";
    },
  },
  mounted() {
    const cursor = this.$refs.cursor;

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;

    cursor.style.left = initialX + "px";
    cursor.style.top = initialY + "px";

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    });
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}

body {
  background: #000000;
}

body::-webkit-scrollbar {
  display: none;
}

.cursor {
  display: none;
  position: fixed;
  right: auto;
  bottom: auto;
  z-index: 99999;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  backdrop-filter: invert(100%);
  pointer-events: none;
  transition: transform 0.3s ease-in;
}

nav .navbar-wrapper .button-container:hover + .cursor {
  transform: scale(6);
}

@media screen and (min-width:1024px) {
  .cursor{
    display: block;
  }
}
</style>
