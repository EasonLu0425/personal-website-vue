<template>
  <div class="scroll-container">
    <div class="scroll-item name">
      <div class="first-page">
        <div class="name-wrapper">
          <p class="name">Eason,</p>
        </div>
        <div class="pics-wrapper">
          <img
            class="hero-pics"
            src="https://cdn-icons-png.flaticon.com/512/8068/8068013.png"
            alt=""
            style="width: 100px; height: 100px"
          />
          <img
            class="hero-pics"
            src="https://cdn-icons-png.flaticon.com/512/6335/6335569.png"
            alt=""
            style="width: 100px; height: 100px"
          />
          <img
            class="hero-pics"
            src="https://cdn-icons-png.flaticon.com/512/3841/3841715.png"
            alt=""
            style="width: 100px; height: 100px"
          />
          <img
            class="hero-pics"
            src="https://cdn-icons-png.flaticon.com/512/3841/3841729.png"
            alt=""
            style="width: 100px; height: 100px"
          />
        </div>
      </div>
    </div>
    <div class="scroll-item">
      <div class="intro">
        <img src="" alt="圖片" />
        <p>自我介紹一些，巴拉巴拉巴拉</p>
      </div>
    </div>
    <div class="scroll-item">Item 3</div>
    <div class="scroll-item">Item 4</div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {};
AOS.init({
  duration: 3000,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@200;400;500;700&family=Noto+Sans:wght@500;700&family=Nunito+Sans:wght@400;700&display=swap");

.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.scroll-item {
  scroll-snap-align: center;
  height: 100%;
}

.first-page {
  position: relative;
}

.name-wrapper {
  opacity: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  -webkit-backdrop-filter: blur(200px);
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: nameup 1s forwards 0.5s;
}

.name {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  z-index: 10;
  font-size: 15rem;
  line-height: 1.1;
  font-weight: 400;
  margin-top: 0rem;
  margin-bottom: 0rem;
  font-family: Manrope, sans-serif;
  color: white;
}

.pics-wrapper {
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: headsup 1s;
}

.hero-pics {
  position: absolute;
  left: 50%;
  transform: translate(-100%, -100%);
}

.pics-wrapper img:nth-child(1) {
  animation: scatter1 1s 1s forwards;
}

.pics-wrapper img:nth-child(2) {
  animation: scatter2 1s 1s forwards;
}

.pics-wrapper img:nth-child(3) {
  animation: scatter3 1s 1s forwards;
}

.pics-wrapper img:nth-child(4) {
  animation: scatter4 1s 1s forwards;
}

.intro {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

@keyframes scatter1 {
  0% {
    opacity: 0;
  }

  100% {
    transform: translate(-700px, 100%);
  }
}

@keyframes scatter2 {
  0% {
    opacity: 0;
  }

  100% {
    transform: translate(-500px, -370%);
  }
}

@keyframes scatter3 {
  0% {
    opacity: 0;
  }

  100% {
    transform: translate(-200px, 50%);
  }
}

@keyframes scatter4 {
  0% {
    opacity: 0;
  }

  100% {
    transform: translate(500px, -400%);
  }
}

@keyframes headsup {
  0% {
    transform: translate(0, 200px);
  }
  100% {
    opacity: 0;
  }
}

@keyframes nameup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
