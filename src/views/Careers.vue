<template>
  <section class="container">
    <div class="anim">
      <div class="words">
        <div class="im" style="color: white">I'm</div>
        <h1><span>E</span>nthusiastic</h1>
        <h1><span>A</span>ctive</h1>
        <h1><span>S</span>elf-disciplined</h1>
        <h1><span>O</span>ptimistic</h1>
        <h1><span>N</span>eat</h1>
      </div>
      <div class="dot">.</div>
    </div>
    <div class="company adata">
      <div class="company-name">
        <img src="../images/ADATA-logo.svg" alt="logo" class="logo" />
        <h2>威剛科技股份有限公司</h2>
      </div>
      <div class="job-title">Purcurement-Buyer</div>
      <div class="duration">06/2022 ~ 11/2022</div>
      <div class="description">
        <ul>
          <li>
            <p class="responsibility">維護多個產品供應鏈:</p>
            監督和管理全面的供應鏈，管理約130種物料及半成品，確保供應商準時交付，並迅速解決任何交貨延誤或品質問題。
          </li>
          <li>
            <p class="responsibility">協同合作：</p>
            積極協作與物流、倉儲和生產部門，確保供應鏈的順暢運作，並維持高效的協調。
          </li>
          <li>
            <p class="responsibility">庫存管理專家：</p>
            負責監督和管理庫存水平，並達到庫存優化，確保庫存充足且不過多。基於需求預測和供應商交期，制定庫存規劃，確保持續的產品供應。
          </li>
          <li>
            <p class="responsibility">項目協調者：</p>
            積極參與新產品開發專案，協調供應商事務，確保專案時程按計劃執行，並處理各種挑戰，並於半年內成功協助推動2項新產品的上市。
          </li>
        </ul>
      </div>
    </div>
    <div class="big-name ADATA">ADATA</div>
    <div class="big-name SINYI">SINYI</div>
    <div class="company sinyi">
      <div class="company-name">
        <img src="../images/sinyi-logo.svg" alt="" class="sinyi-logo" />
        <h2>信義房屋股份有限公司</h2>
      </div>
      <div class="job-title">Sales & Project Manager</div>
      <div class="duration">06/2020 ~ 03/2022</div>
      <div class="description">
        <ul>
          <li>
            <p class="responsibility">開發潛在客戶：</p>
            成功拓展潛在客戶群，同時專業評估物件價值、條件和市場可行性，協助客戶做出明智的投資決策。
          </li>
          <li>
            <p class="responsibility">市場分析專家：</p>
            深諳市場分析數據，利用專業知識評估房地產價值，提供買賣建議。於2021年創造約400萬營業額，並四次獲得龍虎菁英榜，一次獲得業務區MVP的殊榮。
          </li>
          <li>
            <p class="responsibility">卓越的客戶服務：</p>
            通過高效溝通，深入了解客戶需求，提供度身定制的房地產選擇，並協助談判與交易條件協商，2021年度滿意率約達97%。
          </li>
          <li>
            <p class="responsibility">創新行銷策略：</p>
            運用多渠道行銷，結合市場分析數據，成功吸引潛在客戶，同時建立卓越業務聲譽，提升團隊行銷活動舉辦率約4成。
          </li>
          <li>
            <p class="responsibility">交易管理專家：</p>
            監督交易進程，確保交易順利進行並按時完成，離職前客戶申訴率為0%。
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="accom">
      <h2>Accomplishments</h2>
      <hr>
      <div class="table">
        <div class="accom-name"></div>
        <div class="accom-time"></div>
      </div>
      
    </div> -->
  </section>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    const adjs = gsap.utils.toArray("h1");
    const animTL = gsap.timeline({ repeat: -1 });
    adjs.forEach((adj) => gsap.set(adj, { opacity: 0 }));
    animTL
      .to(adjs[0], { opacity: 1, duration: 1 })
      .to(adjs[0], { opacity: 0 })
      .to(adjs[1], { opacity: 1, duration: 1 })
      .to(adjs[1], { opacity: 0 })
      .to(adjs[2], { opacity: 1, duration: 1 })
      .to(adjs[2], { opacity: 0 })
      .to(adjs[3], { opacity: 1, duration: 1 })
      .to(adjs[3], { opacity: 0 })
      .to(adjs[4], { opacity: 1, duration: 1 })
      .to(adjs[4], { opacity: 0 });
    const companyTL = gsap.timeline();
    companyTL
      .from(".ADATA", {
        duration: 0.5,
        x: -100,
        opacity: 0,
        scrollTrigger: { trigger: ".ADATA", scrub: true, end: "bottom bottom" },
      })
      .from(".adata", {
        duration: 0.5,
        x: -100,
        opacity: 0,
        scrollTrigger: { trigger: ".adata", scrub: true, end: "bottom bottom" },
      })
      .from(".SINYI", {
        duration: 0.5,
        x: 100,
        opacity: 0,
        scrollTrigger: { trigger: ".SINYI", scrub: true, end: "bottom bottom" },
      })
      .from(".sinyi", {
        duration: 0.5,
        x: 100,
        opacity: 0,
        scrollTrigger: { trigger: ".sinyi", scrub: true, end: "bottom bottom" },
      });
  },
};
</script>

<style scoped>
section {
  margin-top: 150px;
  padding: 0 0 3rem 0;
  width: 100vw;
  display: grid;
  grid-template-areas:
    "anim anim"
    "adata adata"
    "sinyi sinyi"
    "accom accom";
  justify-items: center;
  grid-gap: 2rem;
  font-weight: 300;
}

.anim {
  margin: 0;
  width: 60vw;
  height: 90vh;
  grid-area: anim;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.im {
  position: absolute;
  font-size: 14vh;
  left: 0;
  top: 0;
}

.dot {
  font-size: 14vh;
  color: #8ddaf9;
  position: absolute;
  right: 5%;
  bottom: 10%;
}

.anim h1 {
  color: white;
  position: absolute;
  font-size: 8vh;
  transform: translate(-50%, -40%);
}

.anim h1 span {
  color: #f09819;
}

.adata {
  grid-area: adata;
}

.ADATA {
  display: none;
  grid-area: ADATA;
  color: white;
}

.sinyi {
  grid-area: sinyi;
}

.SINYI {
  display: none;
  grid-area: SINYI;
  color: white;
}

.company {
  background: #e0e0e0;
  -webkit-backdrop-filter: blur(15px);
  height: fit-content;
  border-radius: 20px;
  padding: 2rem;
}

.company-name {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.logo {
  height: 3rem;
}

.sinyi-logo {
  height: 2rem;
  margin-bottom: 0.5rem;
}

.duration {
  margin-bottom: 1rem;
}

.accom {
  grid-area: accom;
  color: white;
  width: 100%;
  border: 1px solid red;
}

.responsibility {
  font-weight: 700;
  margin-bottom: 0;
}

/* RWD */

@media screen and (min-width: 425px) {
  section {
    grid-template-areas:
      "anim anim"
      "adata adata"
      "sinyi sinyi";
  }

  .anim h1 {
    font-size: 11vh;
    transform: translate(-40%, -40%);
  }
}

@media screen and (min-width: 768px) {
  section {
    grid-template-areas:
      "anim anim"
      "adata adata"
      "sinyi sinyi";
  }

  .anim h1 {
    font-size: 14vh;
    transform: translate(-40%, -50%);
  }
}

@media screen and (min-width: 992px) {
  section {
    grid-template-areas:
      "anim anim"
      "adata ADATA"
      "SINYI sinyi";
  }

  .big-name {
    display: flex;
    font-size: 8vw;
    align-items: center;
  }
}
</style>
