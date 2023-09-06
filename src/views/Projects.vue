<template>
  <section>
    <div class="scroll-container">
      <div class="title-container">
        <div class="title" v-for="project in projects" :key="project.id">
          <div class="title-wrapper">
            <a href="" class="project-link">
              <h4 class="project-name">{{ project.title }}/</h4>
            </a>
          </div>
        </div>
      </div>
      <div class="image-container">
        <div class="image-markers">
          <div class="image" v-for="project in projects" :key="project.id">
            <a href="">
              <p>{{ project.image }}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="des-container">
        <div class="des-markers">
          <div class="des" v-for="project in projects" :key="project.id">
            <p class="des-text">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scroll-container {
  /* border: 1px solid red; */
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.title-container {
  position: absolute;
  top: 50%;
  left: 20%;
  height: 10vh;
  margin: 0;
  transform: translate(0, -50%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 1;
}

.title {
  position: relative;
  height: 10vh;
  width: 100%;
}

.title-wrapper {
  width: 100%;
}

.project-name {
  font-size: 7.8vh;
  width: 100%;
  mix-blend-mode: difference;
}

.image-container {
  position: relative;
  height: 100%;
  width: 100%;
  transform: rotate(2deg);
  margin: 0;
  z-index: 0;
}
.image-markers {
  position: absolute;
  top: 30%;
  left: 50%;
}

.image {
  position: relative;
  border: 1px solid orange;
  width: 300px;
  height: 400px;
  margin-bottom: 4rem;
}

.des-container {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.des-markers {
  position: absolute;
  top: 50%;
  left: 75%;
}

.des {
  position: absolute;
  white-space: nowrap;
}

.des-text {
  color: white;
}

a {
  text-decoration: none;
  color:white
}

</style>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "SplitWizard - 製作中",
          image: "image 1",
          description: "每次出遊，代墊多少錢弄得一團糟? 分帳小幫手來幫你清楚管理!",
        },
        {
          id: 2,
          title: "project 2",
          image: "image 2",
          description: "description 2",
        },
        {
          id: 3,
          title: "project 3",
          image: "image 3",
          description: "description 3",
        },
      ],
    };
  },
  mounted() {
    this.titleAnim();
    this.imageAnim();
    this.desAnim();
  },
  methods: {
    titleAnim() {
      const titleArr = gsap.utils.toArray(".title");
      const yPercent = (titleArr.length - 1) * -100;
      const titleTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-container",
          scrub: true,
          pin: ".scroll-container",
          snap: [0, 0.3, 1],
        },
      });
      titleTL.to(titleArr, { yPercent: yPercent });
    },
    imageAnim() {
      const imageArr = gsap.utils.toArray(".image");
      const yPercent = (imageArr.length - 1) * -100;
      const imageTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".image-container",
          scrub: true,
          pin: true,
          ease: "power1.inOut",
        },
      });
      imageTL
        .fromTo(
          imageArr,
          { yPercent: 0, rotation: 10 },
          { yPercent: yPercent, rotation: 6, stagger: 0.1 }
        )
        .to(imageArr, { y: -100 });
    },
    desAnim() {
      const desArr = gsap.utils.toArray(".des");

      gsap.set([desArr[1], desArr[2]], { opacity: 0 });

      const desTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".des-container",
          scrub: true,
          pin: true,
        },
      });
      desTL
        .to(desArr[0], { opacity: 0 }, -1)
        .to([desArr[1]], { opacity: 1 }, -1)
        .to(desArr[1], { opacity: 0 })
        .to(desArr[2], { opacity: 1 });
    },
  },
};
</script>
