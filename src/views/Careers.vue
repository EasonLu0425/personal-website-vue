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
            維護各產品供應鏈，監督和管理產品的供應鏈。確保供應商按時交付，處理任何交貨延誤或品質問題。
            其他部門（如物流、倉儲和生產）合作，確保供應鏈的順暢運作。
          </li>
          <li>其他部門（如物流、倉儲和生產）合作，確保供應鏈的順暢運作。</li>
          <li>
            監督和管理庫存水平，確保庫存充足且不過剩。根據需求預測和供應商交期進行庫存規劃，以確保產品的可用性。
          </li>
          <li>
            與專案團隊合作開發新產品，居中協調處裡供應商的各項問題，確保時程依照專案進度執行。
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
            開發潛在客戶，同時，評估物件的價值、條件和市場可行性，以提供客戶專業的建議。
          </li>
          <li>
            研究市場分析數據。利用市場分析和專業知識來評估房地產的價值，並提供買賣建議。
          </li>
          <li>
            與客戶溝通、理解客戶需求，提供客戶適合的房地產選擇，並協助進行談判和交易條件協商。
          </li>
          <li>
            透過網路、活動等行銷活動，搭配分析數據，以制定策略吸引潛在客戶並建立良好的業務聲譽。
          </li>
          <li>監督交易進程，確保交易順利進行並按時完成。</li>
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
        scrollTrigger: { trigger: ".ADATA", scrub: true, end:'bottom bottom' },
      })
      .from(".adata", {
        duration: 0.5,
        x: -100,
        opacity: 0,
        scrollTrigger: { trigger: ".adata", scrub: true, end:'bottom bottom' },
      })
      .from(".SINYI", {
        duration: 0.5,
        x: 100,
        opacity: 0,
        scrollTrigger: { trigger: ".SINYI", scrub: true, end:'bottom bottom' },
      })
      .from(".sinyi", {
        duration: 0.5,
        x: 100,
        opacity: 0,
        scrollTrigger: { trigger: ".sinyi", scrub: true, end:'bottom bottom' },
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
  margin:0;
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
