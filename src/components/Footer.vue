<template>
  <section class="container">
    <div class="contact">
      <h1 class="C">Contact</h1>
      <h1 class="M">Me</h1>
    </div>
    <div class="pics-wrapper">
      <img class="hero-pics one" src="../images/01.jpg" alt="01" />
      <img class="hero-pics two" src="../images/02.jpg" alt="02" />
      <img class="hero-pics three" src="../images/03.jpg" alt="03" />
      <img class="hero-pics four" src="../images/04.jpg" alt="04" />
      <img class="hero-pics five" src="../images/05.jpg" alt="05" />
      <img class="hero-pics six" src="../images/06.jpg" alt="06" />
      <img class="hero-pics seven" src="../images/07.jpg" alt="07" />
    </div>
    <div class="info">
      <div class="email">
        <a
          href="mailto:easonlu0425@gmail.com?subject=I'm interested in hiring you!"
          >easonlu0425@gmail.com</a
        >
      </div>
      <div class="phone">(+886) 975-788-516</div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    this.requestAnimation();
  },
  data(){
    return {
      tl: null
    }
  },
  methods: {
    requestAnimation() {
      gsap.set([".info", ".hero-pics"], { scale: 0 });
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",
          scrub: true,
          pin: ".container",
          start: "bottom bottom",
          end: "bottom+=300 top",
        },
      });
      this.tl.to(".C", { x: -1500 })
        .to(".M", { x: 1500 }, "-=")
        .to(".three", { scale: 1, x: 140, y: -280, opacity: 0.5 })
        .to(".one", { scale: 1, x: -420, y: -40, opacity: 0.5 })
        .to(".seven", { scale: 1, x: -230, y: 270, opacity: 0.5 })
        .to(".five", { scale: 1, x: 330, y: 350, opacity: 0.5 })
        .to(".four", { scale: 1, x: 450, y: -30, opacity: 0.5 })
        .to(".two", { scale: 1, x: -300, y: -300, opacity: 0.5 })
        .to(".info", { scale: 2 });
    },
  },
   beforeRouteLeave(to, from, next) {
    this.tl.kill();
    this.tl = null
    next();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.requestAnimation();
    });
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
}

.contact {
  text-align: center;
}

h1 {
  font-size: 14vh;
  color: #e0e0e0;
}

.info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #e0e0e0;
  font-size: 1rem;
}

.email a {
  text-decoration: none;
  color: #e0e0e0;
  border-bottom: 1px solid;
}

.phone {
  padding-left: 5vw;
}

.hero-pics {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 40vw;
  overflow: hidden;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 20vw;
    color: #e0e0e0;
  }
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #e0e0e0;
    font-size: 1.2rem;
  }
  .phone {
    padding-left: 5rem;
  }

  .hero-pics {
    height: 268px;
    width: 201px;
  }
}
</style>
