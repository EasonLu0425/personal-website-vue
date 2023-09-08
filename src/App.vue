<template>
  <div id="app">
    <Navbar
      @handle-mouse-hover="handleMouseHover"
      @handle-mouse-leave="handleMouseLeave"
    />
    <div class="cursor" ref="cursor"></div>
    <body>
      <header>
        <div class="preloader">
          <p class="preloader-text">Breathe Life</p>
          <p class="preloader-text">into</p>
          <p class="preloader-text">Your Vision</p>
        </div>
      </header>
      <transition name="fade" mode="out-in">
      <router-view
        :loaddone="loaddone"
        @handle-mouse-hover="handleMouseHover"
        @handle-mouse-leave="handleMouseLeave"
      />
      </transition>
    </body>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navbar from "./components/Navbar.vue";
gsap.registerPlugin(ScrollTrigger);
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
    preloaderAnim() {
      const texts = gsap.utils.toArray(".preloader-text");
      gsap.fromTo(
        texts,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, stagger: 1 }
      );
    },
  },
  data() {
    return {
      loaddone: false,
    };
  },
  mounted() {
    this.preloaderAnim();
    const cursor = this.$refs.cursor;

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;

    cursor.style.left = initialX + "px";
    cursor.style.top = initialY + "px";

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    });

    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
      this.loaddone = true;
      setTimeout(() => {
        window.scrollTo(0, 0);
        gsap.to(".preloader", { yPercent: 200 })
        .to(".preloader", { opacity: 0, scale: 0 });
      }, 3000);
    });
  },
  beforeRouteUpdate(to, from, next) {
    ScrollTrigger.killAll();
    next();
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

ul.transition {
  display: flex;
  position: absolute;
  z-index: 1000;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  pointer-events: none;
}

ul.transition li {
  transform: scaleY(0);
  background: white;
  width: 20%;
}

.preloader {
  position: fixed;
  z-index: 9999;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preloader-text {
  font-size: 5vh;
  margin: 0.5rem;
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

@media screen and (min-width: 1024px) {
  .cursor {
    display: block;
  }
}
</style>
