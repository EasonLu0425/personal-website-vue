<template>
  <div class="scroll-container">
    <section class="scroll-item name-part" id="namePart" ref="namePart">
      <div class="first-page">
        <div class="pics-wrapper">
          <img class="hero-pics" src="../images/01.jpg" alt="01" />
          <img class="hero-pics" src="../images/02.jpg" alt="01" />
          <img class="hero-pics" src="../images/03.jpg" alt="01" />
          <img class="hero-pics" src="../images/04.jpg" alt="01" />
          <img class="hero-pics" src="../images/05.jpg" alt="02" />
          <img class="hero-pics" src="../images/06.jpg" alt="03" />
          <img class="hero-pics" src="../images/07.jpg" alt="04" />
        </div>
        <div class="name-wrapper">
          <div class="name-bg"></div>
          <p class="name">Eason,</p>
        </div>
        <div class="scroll" style="z-index:1">
          <svg
            width="40px"
            height="100%"
            viewBox="0 0 247 390"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 1.5;
            "
          >
            <path
              id="wheel"
              d="M123.359,79.775l0,72.843"
              style="fill: none; stroke: #fff; stroke-width: 20px"
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style="fill: none; stroke: #fff; stroke-width: 20px"
            />
          </svg>
          <div style="color: white" >Scroll down</div>
        </div>
      </div>
    </section>
    <section
      class="scroll-item welcome-part"
      id="welcome-part"
      ref="welcomePart"
    >
      <p class="welcome">Welcome</p>
      <p class="welcome">To My</p>
      <p class="welcome">Fanacy</p>
    </section>
    <section class="scroll-item intro-part" ref="introPart">
      <div class="intro">
        <img
          class="avatar"
          src="https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=639&q=80"
          alt="圖片"
        />
        <div class="intro-text-wrapper">
          <div class="text-container">
            <div class="intro-text first" ref="introTextFirst">
              <div class="intro-text-one">I'M EASON</div>
              <div class="intro-text-two">
                Enthusiastic & Adaptable Individual Excited to Explore
                Opportunities
              </div>
              <div class="intro-text-three">
                Over the years, I have honed my skills through various
                professional experiences. I have worked at ADATA and Sinyi
                Realty as procurement buyer and project manager , where I was
                responsible for collaborating with internal teams and settling
                upcoming problems. These roles allowed me to refine my
                leadership abilities, foster teamwork, and deliver exceptional
                results under tight deadlines.
              </div>
            </div>
            <div class="intro-text second" ref="introTextSecond">
              <div class="intro-text-one">Consistently Pursued Excellence</div>
              <div class="intro-text-two">
                Passion for Learning & Personal Development
              </div>
              <div class="intro-text-three">
                I believe in the power of knowledge and continuous improvement.
                Currently, I am furthering my education in full-stack
                engineering, specifically focusing on back-end development. This
                pursuit has ignited my passion for innovation and technology,
                and has opened doors to exciting opportunities for personal and
                professional development.The fast-paced nature of the technology
                industry excites me, as it challenges me to continuously evolve
                and keeps me on the cutting edge of advancements.
              </div>
            </div>
            <div class="intro-text third" ref="introTextThird">
              <div class="intro-text-one">Thrived in Diverse Environments</div>
              <div class="intro-text-two">
                Adaptability Extends Beyond the Workplace
              </div>
              <div class="intro-text-three">
                My diverse background as a purchasing buyer and real estate
                agent, coupled with my newfound expertise in JavaScript,
                reflects my passion for continuously challenging myself and
                embracing new opportunities. I am driven by a desire to excel in
                every endeavor I undertake, combining my analytical mindset,
                interpersonal skills, and technical knowledge to drive positive
                outcomes; looking forward to the opportunity to discuss how my
                skills, experiences, and passion align with your organization's
                vision and contribute to its continued success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="scroll-item contact-part">
      <div class="giving">
        <div class="giving-word here">I'm Here</div>
        <div class="giving-word give" ref="giving">To Give You</div>
        <div class="adjs">
          <div class="adj">Unique</div>
          <div class="adj">Fantastic</div>
          <div class="adj">Marvelous</div>
          <div class="adj">Enchanting</div>
        </div>
        <div class="giving-word exp">Experiences</div>
      </div>
      <div class="more" ref="more">
        <h1>Learn More About Me</h1>
        <div class="me-container" ref="meContainer">
          <div class="me one">
            <router-link :to="{ name: 'skills' }">#Skills</router-link>
          </div>
          <div class="me two">
            <router-link :to="{ name: 'careers' }">#Careers</router-link>
          </div>
          <div class="me three">
            <router-link :to="{ name: 'academic' }">#Academic</router-link>
          </div>
          <div class="me four">
            <router-link :to="{ name: 'projects' }">#Projects</router-link>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "./../components/Footer.vue";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    const introTexts = [
      this.$refs.introTextFirst,
      this.$refs.introTextSecond,
      this.$refs.introTextThird,
    ];
    const screen = window.innerWidth;
    const givingWords = gsap.utils.toArray(".giving-word");
    gsap.to(".name-part", {
      filter: "blur(20px)",
      duration: 1,
      scrollTrigger: {
        trigger: this.$refs.welcomePart,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.set(".giving-word", { opacity: 0, y: 100 });

    gsap.set(".adj", { opacity: 0, y: 100 });
    const adjs = gsap.utils.toArray(".adj");
    const adjTL = gsap.timeline({ repeat: -1 });
    adjTL
      .to(adjs[0], { opacity: 1, y: -1, duration: 1 })
      .to(adjs[0], { opacity: 0, y: -100 })
      .to(adjs[1], { opacity: 1, y: -1, duration: 1 })
      .to(adjs[1], { opacity: 0, y: -100 })
      .to(adjs[2], { opacity: 1, y: -1, duration: 1 })
      .to(adjs[2], { opacity: 0, y: -100 })
      .to(adjs[3], { opacity: 1, y: -10, duration: 1 })
      .to(adjs[3], { opacity: 0, y: -100 });

    gsap.set(".me", { opacity: 0, x: -100 });
    if (screen >= 992) {
      introTexts.forEach((introText) => {
        for (let i = 0; i < introText.children.length; i++) {
          gsap.set(introText.children[i], {
            y: "100%",
            opacity: "0",
          });
        }
      });
      const scrollTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-part",
          scrub: true,
          start: "top top",
          end: "bottom+=1000 top",
          pin: true,
        },
      });
      scrollTL
        .to(introTexts[0].children[0], {
          y: "0%",
          opacity: "1",
          duration: 1,
        })
        .to(
          introTexts[0].children[1],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[0].children[2],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[0].children[0],
          {
            y: "100%",
            opacity: "0",
            delay: 0.5,
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[1].children[0],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[0].children[1],
          {
            y: "100%",
            opacity: "0",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[1].children[1],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[0].children[2],
          {
            y: "100%",
            opacity: "0",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[1].children[2],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[1].children[0],
          {
            y: "100%",
            opacity: "0",
            delay: 1,
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[2].children[0],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[1].children[1],
          {
            y: "100%",
            opacity: "0",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[2].children[1],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[1].children[2],
          {
            y: "100%",
            opacity: "0",
            duration: 1,
          },
          "-=0.25"
        )
        .to(
          introTexts[2].children[2],
          {
            y: "0%",
            opacity: "1",
            duration: 1,
          },
          "-=0.25"
        );

      givingWords.forEach((word) => {
        gsap.to(word, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: this.$refs.giving,
          },
        });
      });
      const meTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".me",
          start: "bottom bottom",
        },
      });

      meTL
        .to(".one", {
          opacity: 1,
          x: 0,
        })
        .to(".two", {
          opacity: 1,
          x: 0,
        })
        .to(".three", {
          opacity: 1,
          x: 0,
        })
        .to(".four", {
          opacity: 1,
          x: 0,
        });
    } else {
      introTexts.forEach((introText) => {
        for (let i = 0; i < introText.children.length; i++) {
          gsap.set(introText.children[i], { y: "50%" });
          ScrollTrigger.create({
            trigger: introText.children[i],
            start: "top 90%",
            end: "top center",
            scrub: true,
            pinSpacing: 0,
            onEnter: () => {
              gsap.to(introText.children[i], { y: "0%", duration: 0.5 });
            },
          });
        }
      });
      givingWords.forEach((word) => {
        gsap.to(word, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: this.$refs.giving,
          },
        });
      });
      const meTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".me",
          start: "bottom bottom",
        },
      });

      meTL
        .to(".one", {
          opacity: 1,
          x: 0,
        })
        .to(".two", {
          opacity: 1,
          x: 0,
        })
        .to(".three", {
          opacity: 1,
          x: 0,
        })
        .to(".four", {
          opacity: 1,
          x: 0,
        });
    }
  },
  components: {
    Footer,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@200;400;500;700&family=Noto+Sans:wght@500;700&family=Nunito+Sans:wght@400;700&display=swap");

.scroll-container {
  height: 400vh;
}

section {
  height: 100vh;
}

.scroll-item {
  height: 100%;
}

.first-page {
  position: relative;
  top: 0;
  animation: nameup 1s forwards 0.5s;
  transform-style: preserve-3d;
  /* height: 200vh; */
}

.name-wrapper {
  position: relative;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: backgroundup 1s forwards 0.5s;
  opacity: 0;
}

.name-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
  z-index: 0;
}

.name {
  font-size: 15rem;
  line-height: 1.1;
  font-weight: 400;
  font-family: Manrope, sans-serif;
  opacity: 1;
  color: white;
  z-index: 2;
}

.pics-wrapper {
  z-index: -2;
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.hero-pics {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100px);
  width: 30vw;
  height: 40vw;
  overflow: hidden;
  object-fit: cover;
}

.pics-wrapper img:nth-child(1) {
  animation-name: headsup, scatter1;
  animation-duration: 1s, 1.3s;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0s, 0.5s;
}

.pics-wrapper img:nth-child(2) {
  animation-name: headsup, scatter2;
  animation-duration: 1s, 1.3s;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0.01s, 0.5s;
}

.pics-wrapper img:nth-child(3) {
  animation-name: headsup, scatter3;
  animation-duration: 1s, 1.3s;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0.02s, 0.5s;
}

.pics-wrapper img:nth-child(4) {
  animation-name: headsup, scatter4;
  animation-duration: 1s, 1.3s;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0.03s, 0.5s;
}

.pics-wrapper img:nth-child(5) {
  animation-name: headsup, scatter5;
  animation-duration: 1s, 1.3s;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0.03s, 0.5s;
}

.pics-wrapper img:nth-child(6) {
  animation-name: headsup, scatter6;
  animation-duration: 1s, 1.3s;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0.03s, 0.5s;
}

.pics-wrapper img:nth-child(7) {
  animation-name: headsup, scatter7;
  animation-duration: 1s, 1.3s;
  animation-fill-mode: forwards, forwards;
  animation-delay: 0.03s, 0.5s;
}

.scroll {
  position: absolute;
  top: 70%;
  right: 15%;
  opacity: 0;
  animation: backgroundup 1s forwards 2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

svg #wheel {
  animation: scroll ease 1.5s infinite;
}

.name-part {
  position: sticky;
  top: 0;
  height: 100vh;
}

.welcome-part {
  position: relative;
  top: 0;
  height: auto;
  padding-bottom: 20vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.welcome {
  z-index: 2;
  font-size: 16vw;
  line-height: 0.9;
  font-weight: 700;
  color: white;
}

.welcome:nth-child(2) {
  z-index: 2;
  font-size: 16vw;
  line-height: 0.9;
  font-weight: 400;
  color: white;
}

.intro-part {
  height: auto;
  position: relative;
  top: 0;
  background-color: #000000;
}

.intro {
  height: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 6rem;
  color: white;
}

.avatar {
  height: 100%;
  width: 100%;
}

.intro-text-wrapper {
  padding: 2rem;
}

.intro-text {
  padding-top: 4rem;
  margin-bottom: 3rem;
}

.intro-text-one {
  font-size: 12px;
  margin-bottom: 5vh;
}

.intro-text-two {
  font-size: 24px;
  margin-bottom: 6vh;
}

.intro-text-three {
  font-size: 18px;
  padding-left: 1.7vw;
  margin-left: 18vw;
}

.contact-part {
  background-color: #000000;
  color: white;
  height: 100vh;
  position: relative;
}

.giving {
  position: relative;
  font-size: 7vh;
  font-weight: 300;
  margin: 0 1rem;
}

.here {
  padding-left: 5vw;
}

.give {
  padding-left: 10vw;
  position: relative;
}

.give::before {
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ff5029;
  position: absolute;
  left: 5%;
  top: 50%;
}

.adjs {
  position: relative;
  height: 14vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  font-weight: 500;
}

.adj {
  position: absolute;
  left: 20%;
  top: 0;
}

.exp {
  padding-left: 5vw;
}

.more {
  border-top: 2px solid lightgray;
  margin: 0 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.me-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.me a {
  text-decoration: none;
  color: white;
}

.me a:hover {
  background: white;
  color: black;
}

/* animation */

@keyframes scatter1 {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  100% {
    transform: translate3d(-150%, 70%, -50px);
  }
}

@keyframes scatter2 {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }

  100% {
    transform: translate3d(40%, 10%, -50px);
    z-index: -1;
  }
}

@keyframes scatter3 {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }

  100% {
    transform: translate3d(-100%, -80%, -50px);
    z-index: -1;
  }
}

@keyframes scatter4 {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }

  100% {
    transform: translate3d(250%, -20%, -50px);
    z-index: -1;
  }
}

@keyframes scatter5 {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }

  100% {
    transform: translate3d(-185%, -190%, -50px);
    z-index: -1;
  }
}

@keyframes scatter6 {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }

  100% {
    transform: translate3d(-380%, -50%, -50px);
    z-index: -1;
  }
}

@keyframes scatter7 {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }

  100% {
    transform: translate3d(80%, -180%, -50px);
    z-index: -1;
  }
}

@keyframes headsup {
  0% {
    transform: translate3d(-50%, 100px, 0);
  }
  50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0);
  }
}

@keyframes backgroundup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(100px);
  }
}

/* RWD */
@media screen and (min-width: 992px) {
  .name {
    font-size: 15rem;
  }

  .hero-pics {
    height: 268px;
    width: 201px;
  }

  .intro-part {
    height: 100vh;
    overflow: hidden;
  }

  .intro {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
  }

  .avatar {
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 0;
  }

  .intro-text-wrapper {
    height: auto;
    position: relative;
    top: 0;
  }

  .text-container {
    position: sticky;
    top: 0;
    overflow: auto;
    height: 100vh;
  }
  .text-container::-webkit-scrollbar {
    display: none;
  }

  .intro-text {
    position: absolute;
    top: 0;
    height: 98vh;
    margin: auto;
    overflow: hidden;
  }

  .first,
  .second,
  .third {
    height: 100vh;
  }

  .intro-text-one {
    font-size: 1.35vw;
  }

  .intro-text-two {
    font-size: 3.125vw;
  }

  .intro-text-three {
    font-size: 1.25vw;
  }

  .giving {
    font-size: 14vh;
  }

  .me-container {
    flex-direction: row;
    gap: 1.5rem;
  }

  .me-container .me:hover {
    cursor: pointer;
    background-color: white;
    color: #000000;
    backdrop-filter: blur(12px);
  }

  .giving {
    text-align: center;
    display: flex;
    margin: 0 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .here {
    padding-left: 30vh;
  }

  .give {
    padding-left: 40vh;
  }

  .give::before {
    left: 30%;
  }

  .adjs {
    width: 100%;
    height: 18vh;
  }

  .exp {
    padding-left: 30vh;
  }
}

@media screen and (max-width: 991px) and (min-width: 768px) {
  .name {
    font-size: 21vw;
  }

  .hero-pics {
    height: 268px;
    width: 201px;
  }

  .me-container {
    flex-direction: row;
    gap: 1.5rem;
  }

  .me:hover {
    cursor: pointer;
    background-color: white;
  }

  .here {
    padding-left: 15vw;
  }

  .give {
    padding-left: 25vw;
  }

  .give::before {
    left: 20%;
  }

  .adjs {
    position: relative;
    height: 14vh;
  }

  .adj {
    position: absolute;
    left: 45%;
  }

  .exp {
    padding-left: 20vw;
  }
}

@media screen and (max-width: 767px) and (min-width: 480px) {
  .name {
    font-size: 20vw;
  }
}

@media screen and (max-width: 479px) {
  .name {
    font-size: 20vw;
  }
}
</style>
