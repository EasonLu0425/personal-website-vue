<template>
  <div id="app">
    <Navbar />

    <body class="pb-5">
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
  color: #2c3e50;
  // background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  height:100vh;
  
}

body::-webkit-scrollbar {
    display: none;
}

</style>
