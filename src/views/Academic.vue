<template>
  <section class="container" data-barba="container">
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
              全端開發實踐：
            </li>
            <li>
              <div class="mask"></div>
              連續9個月每週穩定學習至少20小時 ，透過具體的專案實作，深入學習了全端開發的核心概念和實際應用。專注於React和Vue框架，我學習了多個關鍵功能，包括CRUD操作、API串接、身分驗證，以及安全的付費流程。
            </li>
            <li>
              <div class="mask"></div>
              多資料庫技能：
            </li>
            <li>
              <div class="mask"></div>
              綜合運用了Express、MySQL、MongoDB等多種技術，獲得了豐富的資料庫設計和實測經驗。我能夠獨立設計和部署資料庫，並確保其高效運行。
            </li>
            <li>
              <div class="mask"></div>
              團隊協作成就：
            </li>
            <li>
              <div class="mask"></div>
              參與模擬Twitter團隊專案，我積極參與了協作過程，並組織團隊成員合作，按照分工合作方式協同開發。我們成功將這個專案完成，這展現了我的卓越的協作和專案管理能力。
            </li>
          </ul>
        </div>
      </div>
      <div class="img-wrapper">
        <img src="../images/alpha-cert.png" alt="pic" />
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
              學術背景：
            </li>
            <li>
              <div class="mask"></div>
              修習了多門相關課程，包括行銷學、專業英語會話、專業商用英文、英語演說和國際談判，建立了堅實的專業知識和語言技能。
            </li>
            <li>
              <div class="mask"></div>
              領導經驗：
            </li>
            <li>
              <div class="mask"></div>
              負責主導兩場英文戲劇演出，每場有400名觀眾。策劃、整合、執行和監督應外系畢業公演的各組工作，確保順利執行，解決任何挑戰。與系上教授和學校高層協商計劃和報告，設計外部行銷活動，協調贊助廠商，控制預算。最終，我們成功如期舉辦演出，觀眾人數超出預期的25%。
            </li>
            <li>
              <div class="mask"></div>
              啦啦隊領導：
            </li>
            <li>
              <div class="mask"></div>
              擔任校內年度啦啦隊比賽系隊的籌備負責人。與教練協調訓練計畫，與校方協調比賽事宜。確保順利執行訓練進度，解決幹部和組別可能遇到的問題。監督道具的製作品質和進度，整合各組別的訓練工作。最終，我們順利參加比賽，並贏得了該年度校內比賽的冠軍。
            </li>
            <li>
              <div class="mask"></div>
              學會籌辦：
            </li>
            <li>
              <div class="mask"></div>
              作為系學會活動組的一員，我參與了系上各種活動的籌辦，包括規劃、宣傳和執行，為學生提供了有意義的活動，同時鍛煉了我的組織和協調能力。
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
          trigger: duration,
          start: "center bottom",
          end: "start center",
          toggleActions: "play none none reverse",
        },
      });
      tl.to([schoolName, degree, duration, descriptionItems], {
        scaleX: 1,
        transformOrigin: "left",
        stagger: 0.1,
      }).to(mask, { scaleX: 0, transformOrigin: "right" });
    });
  },
  beforeRouteUpdate(to, from, next) {
    const allTweens = gsap.getAllTweens();
    allTweens.forEach((tween) => {
      tween.kill();
    });

    next();
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
  justify-content: center;
}

.bootcamp,
.uni {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
}

.text-wrapper {
  width: 100%;
  display: flex;
  flex-flow: column;
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
  width: 100%;
}

.img-wrapper img {
  height: 60vh;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  object-fit: fill;
}

/* RWD */

@media screen and (min-width: 768px) {
  .bootcamp,
  .uni {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .text-wrapper {
    width: 50%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: flex-start;
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
    border-radius: 15px;
    overflow: hidden;
    object-fit: cover;
  }
}
</style>
