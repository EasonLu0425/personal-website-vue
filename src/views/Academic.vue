<template>
  <section class="container">
    <div class="bootcamp school">
      <div class="text-wrapper">
        <div class="school-name alpha">
          <div class="mask"></div>
          <h2 class="name">Alpha Camp</h2>
        </div>
        <div class="degree">
          <div class="mask"></div>
          <h3>JavaScript全端開發課程</h3>
        </div>
        <div class="duration">
          <div class="mask"></div>
          <h4>01/2023~ 09/2023</h4>
        </div>
        <div class="description">
          <ul>
            <li>
              <div class="mask"></div>
              透過專案實作的方式學習全端開發的觀念及應用。
            </li>
            <li>
              <div class="mask"></div>
              學習運用React、Vue框架實作CRUD功能、API串接、身分驗證及付費流程。
            </li>
            <li>
              <div class="mask"></div>
              學習Express與MySQL、MongoDB，並學習資料設計、實測、AWS部署、架設API伺服器。
            </li>
            <li>
              <div class="mask"></div>
              實踐團體專案:模擬Twitter，以團隊分工的方式協作出成果。
            </li>
          </ul>
        </div>
      </div>
      <div class="img-wrapper">
        <img src="../images/alpha-cert-front.png" alt="pic" />
      </div>
    </div>
    <div class="uni school">
      <div class="text-wrapper">
        <div class="school-name NTPU">
          <div class="mask"></div>
          <h2>National Taipei University</h2>
        </div>
        <div class="degree">
          <div class="mask"></div>
          <h3>應用外語學系</h3>
        </div>
        <div class="duration">
          <div class="mask"></div>
          <h4>09/2015~ 06/2019</h4>
        </div>
        <div class="description">
          <ul>
            <li>
              <div class="mask"></div>
              曾修習 行銷學、專業英語會話、專業商用英文、英語演說、國際談判。
            </li>
            <li>
              <div class="mask"></div>
              擔任應外系年度畢業公演總召。
            </li>
            <li>
              <div class="mask"></div>
              擔任校內啦啦隊比賽系隊總召。
            </li>
            <li>
              <div class="mask"></div>
              擔任系學會活動組，籌辦系上各活動。
            </li>
          </ul>
        </div>
      </div>
      <div class="img-wrapper">
        <img src="../images/ntpu.jpg" alt="pic" />
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    const schools = gsap.utils.toArray(".school");
    schools.forEach((school) => {
      const schoolName = school.querySelector(".school-name");
      const degree = school.querySelector(".degree");
      const duration = school.querySelector(".duration");
      const descriptionItems = school.querySelectorAll(".description li");
      const mask = school.querySelectorAll(".mask");
      gsap.set([schoolName, degree, duration, descriptionItems], {
        scaleX: 0,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: school,
          start: "center bottom",
          end: "start center",
          toggleActions: "play none none reverse",
          markers: true,
        },
      });
      tl.to([schoolName, degree, duration, descriptionItems], {
        scaleX: 1,
        transformOrigin: "left",
        stagger: 0.1,
      }).to(mask, { scaleX: 0, transformOrigin: "right" });
    });
  },
};
</script>

<style scoped>
section {
  margin-top: 150px;
  padding-bottom: 100px;
  color: white;
  display: flex;
  flex-direction: column;
}

.bootcamp,
.uni {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
}

.text-wrapper {
  height: 100vh;
  width: 50%;
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: flex-start;
}

.school-name h2 {
  position: relative;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.alpha h2 {
  background-image: -webkit-linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.alpha .mask {
  background-image: -webkit-linear-gradient(120deg, #f6d365 0%, #fda085 100%);
}

.NTPU .mask {
  background: -webkit-linear-gradient(120deg, #96deda 0%, #50c9c3 100%);
}

.mask {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
}

.NTPU h2 {
  background: -webkit-linear-gradient(120deg, #96deda 0%, #50c9c3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.degree h3 {
  margin-bottom: 1rem;
}

.duration h4 {
  margin-bottom: 1rem;
}

.description ul li {
  list-style: none;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.img-wrapper img {
  height: 60vh;
  width: 100%;
}

/* RWD */

@media screen and (min-width: 768px) {
}
</style>
