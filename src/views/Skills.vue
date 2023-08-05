<template>
  <section class="container">
    <div class="grid-wrapper">
      <div class="front-end category">
        <h2 class="category-name">Front-End</h2>
        <div class="skills">
          <div class="skill-card" v-for="skill in frontEnd" :key="skill.name">
            <div
              class="percent"
              style="--clr: #ff8303"
              :style="{ '--num': skill.score }"
            >
              <div class="dot"></div>
              <svg>
                <circle cx="75" cy="75" r="70"></circle>
                <circle cx="75" cy="75" r="70"></circle>
              </svg>
              <div class="number">
                <h2>{{ skill.score }}<span>%</span></h2>
                <p>{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="back-end category" style="color: black">
        <h2 class="category-name">Back-End</h2>
        <div class="skills">
          <div class="skill-card" v-for="skill in backEnd" :key="skill.name">
            <div
              class="percent"
              style="--clr: #a35709"
              :style="{ '--num': skill.score }"
            >
              <div class="dot"></div>
              <svg>
                <circle cx="75" cy="75" r="70"></circle>
                <circle cx="75" cy="75" r="70"></circle>
              </svg>
              <div class="number">
                <h2 style="color: black">
                  {{ skill.score }}<span style="color: black">%</span>
                </h2>
                <p style="color: black">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="languages category">
        <h2 class="category-name">Languages</h2>
        <div class="skills">
          <div class="skill-card" v-for="skill in languages" :key="skill.name">
            <div
              class="percent"
              style="--clr: #f0e3ca"
              :style="{ '--num': skill.score }"
            >
              <div class="dot"></div>
              <svg>
                <circle cx="75" cy="75" r="70"></circle>
                <circle cx="75" cy="75" r="70"></circle>
              </svg>
              <div class="number">
                <h2>{{ skill.score }}<span>%</span></h2>
                <p>{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="soft-skills category">
        <h2 class="category-name">Soft-Skills</h2>
        <div class="skills">
          <div class="skill-card" v-for="skill in softSkills" :key="skill.name">
            <div
              class="percent"
              style="--clr: #f0e3ca"
              :style="{ '--num': skill.score }"
            >
              <div class="dot"></div>
              <svg>
                <circle cx="75" cy="75" r="70"></circle>
                <circle cx="75" cy="75" r="70"></circle>
              </svg>
              <div class="number">
                <h2>{{ skill.score }}<span>%</span></h2>
                <p>{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="other-skills category" style="color: black">
        <h2 class="category-name">Other-Skills</h2>
        <div class="skills">
          <div
            class="skill-card"
            v-for="skill in otherSkills"
            :key="skill.name"
          >
            <div
              class="percent"
              style="--clr: #ff8303"
              :style="{ '--num': skill.score }"
            >
              <div class="dot"></div>
              <svg>
                <circle cx="75" cy="75" r="70"></circle>
                <circle cx="75" cy="75" r="70"></circle>
              </svg>
              <div class="number">
                <h2 style="color: black">
                  {{ skill.score }}<span style="color: black">%</span>
                </h2>
                <p style="color: black">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="link">
        <a href="https://github.com/EasonLu0425"
          ><img src="../images/github.svg" alt="github"
        /></a>
        <a href="https://www.instagram.com/eason_lu0425/"
          ><img src="../images/instagram.svg" alt="ins"
        /></a>
        <a href="https://www.facebook.com/eason.lu.146"
          ><img src="../images/facebook.svg" alt="FB"
        /></a>
        <a href="https://www.linkedin.com/in/eason-lu-8163bb1aa/"
          ><img src="../images/linkedin.svg" alt="LI"
        /></a>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      frontEnd: [
        { id: 1, name: "JavaScript", score: 83 },
        { id: 2, name: "HTML", score: 85 },
        { id: 3, name: "Css", score: 84 },
        { id: 4, name: "Sass/Scss", score: 80 },
        { id: 5, name: "Vue.js", score: 75 },
        { id: 6, name: "React.js", score: 75 },
      ],
      backEnd: [
        { id: 1, name: "Node.js", score: 83 },
        { id: 2, name: "Express.js", score: 81 },
        { id: 3, name: "Mongo DB", score: 75 },
        { id: 4, name: "My SQL", score: 75 },
        { id: 5, name: "Github", score: 78 },
        { id: 6, name: "RESTful API", score: 81 },
      ],
      otherSkills: [
        { id: 1, name: "Adobe PS", score: 75 },
        { id: 2, name: "Adobe AI", score: 70 },
        { id: 3, name: "Figma", score: 73 },
        { id: 4, name: "Adobe ID", score: 73 },
        { id: 5, name: "MS Office", score: 83 },
      ],
      softSkills: [
        { id: 1, name: "Fast-learning", score: 85 },
        { id: 2, name: "Communication", score: 83 },
        { id: 3, name: "Time Management", score: 84 },
        { id: 4, name: "Organization", score: 81 },
        { id: 5, name: "Adaptability", score: 83 },
        { id: 6, name: "Planning", score: 83 },
        { id: 7, name: "Problem-Solving", score: 86 },
        { id: 8, name: "Integrity", score: 98 },
        { id: 9, name: "Teamwork", score: 93 },
        { id: 10, name: "Initiative", score: 86 },
      ],
      languages: [
        { id: 1, name: "English", score: 90 },
        { id: 2, name: "German", score: 75 },
      ],
    };
  },
  mounted() {
    gsap.set('.category',{opacity:0, y:100} )
    gsap.set('.skill-card', {opacity:0, x:-100})
    const tl = gsap.timeline()
    tl.to('.category', {duration:0.3, opacity:1,y:0, stagger:.2})
    .to('.skill-card', {duration:0.5,opacity:1, x:0})
  }
};
</script>

<style scoped>
section {
  height: auto;
  width: 100vw;
  margin-top: 150px;
  padding-bottom: 3rem;
  color: white;
}


.grid-wrapper {
  display: grid;

  margin: 0 auto 3rem;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "front"
    "back"
    "languages"
    "other"
    "soft";
  grid-gap: 1rem;
}

.front-end {
  grid-area: front;
  background: #0e1935;
  border-radius: 15px;
}

.back-end {
  grid-area: back;
  background: #f0e3ca;
  border-radius: 15px;
}

.other-skills {
  grid-area: other;
  background: #f0e3ca;
  border-radius: 15px;
}

.soft-skills {
  grid-area: soft;
  background: #e87400;
  border-radius: 15px;
}

.languages {
  grid-area: languages;
  background: #a35709;
  border-radius: 15px;
}

.link {
  grid-area: link;
  display: none;
  background: white;
  border-radius: 15px;
  color: black;
}

.link a img {
  height: 50px;
  width: 50px;
  transition: transform 0.2s ease-in;
}

.link a img:hover{
  transform: scale(1.5);
}


.category {
  width: 100%;
}

.category-name {
  margin: 2rem 2.5rem;
}

.skills {
  margin: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 0.5rem;
  text-align: center;
}

.skill-card {
  position: relative;
  width: 150px;
  height: 150px;
  color: black;
  text-align: center;
  line-height: 120px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-card .percent {
  position: relative;
  width: 150px;
  height: 150px;
}

.skill-card .percent svg {
  position: relative;
  width: 150px;
  height: 150px;
  transform: rotate(270deg);
}

.skill-card .percent svg circle {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke-width: 2;
  stroke: #191919;
  transform: translate(-1px, -3px);
}

.skill-card .percent svg circle:nth-child(2) {
  stroke: var(--clr);
  stroke-dasharray: 440;
  stroke-dashoffset: calc(440 - (440 * var(--num)) / 100);
  opacity: 0;
  animation: fadeIn 1s linear forwards;
  animation-delay: 2.5s;
}

@keyframes fadeIn {
  0% {
  }
  100% {
    opacity: 1;
  }
}

.dot {
  position: absolute;
  /* background: #f00; */
  inset: 5px;
  z-index: 1;
  animation: animateDot 2s linear forwards;
}

@keyframes animateDot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(calc(3.6deg * var(--num)));
  }
}

.dot::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: var(--clr);
  box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr);
}

.number {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  animation: fadeIn 1s linear forwards;
  animation-delay: 2.5s;
}

.number h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 2em;
}

.number h2 span {
  font-weight: 300;
  color: white;
  font-size: 0.5em;
}

.number p {
  font-weight: 300;
  font-size: 0.75em;
  line-height: 2px;
  letter-spacing: 2px;
  margin-top: 2px;
  color: white;
}

@media screen and (min-width: 426px) {
}

@media screen and (min-width: 768px) {
  .container {
    margin: 150px auto;
    padding: 0 0;
  }

  .grid-wrapper {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    grid-template-areas:
      "front languages"
      "front link"
      "back back"
      "other other"
      "soft soft";
    grid-gap: 0.8rem;
  }

  .other-skills > .skills {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .back-end > .skills {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .soft-skills > .skills {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    height:fit-content;
    margin: 150px 0;
  }
  .grid-wrapper {
    display: grid;
    width: 100vw;
    margin: 0 auto;
    padding: 3rem;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "front back back languages"
      "front link soft soft"
      "other other soft soft";
    grid-gap: 1rem;
  }

  .languages > .skills {
    grid-template-columns: 1fr;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
