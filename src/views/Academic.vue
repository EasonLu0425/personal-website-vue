<template>
  <section class="container">
    <div class="bootcamp">
      <div class="text-wrapper">
        <div class="school-name alpha">Alpha Camp</div>
        <div class="degree">JavaScript全端開發課程</div>
        <div class="duration">01/2023~ 09/2023</div>
        <div class="description">
          <ul>
            <li>透過專案實作的方式學習全端開發的觀念及應用</li>
            <li>
                學習運用React等框架實作CRUD功能、API串接、身分驗證及付費流程
            </li>
            <li>
              學習Express與MySQL，並學習資料設計、實測、AWS部署、架設API伺服器
            </li>
            <li>實踐團體專案:模擬Twitter，以團隊分工的方式協作出成果</li>
          </ul>
        </div>
      </div>
      <div class="img-wrapper">
          <img src="" alt="pic" />
      </div>
    </div>
    <div class="uni">
      <div class="text-wrapper">
        <div class="school-name alpha">National Taipei University</div>
        <div class="degree">應用外語學系</div>
        <div class="duration">09/2015~ 06/2019</div>
        <div class="description">
          <ul>
            <li>
              曾修習 行銷學、專業英語會話、專業商用英文、英語演說、國際談判
            </li>
            <li>擔任應外系年度畢業公演總召。</li>
            <li>擔任校內啦啦隊比賽系隊總召。</li>
            <li>擔任系學會活動組，籌辦系上各活動。</li>
          </ul>
        </div>
      </div>
      <div class="img-wrapper">
          <img src="" alt="pic" />
      </div>
    </div>
  </section>
</template>

<style sco｀ped>
section {
  margin-top: 150px;
  padding-bottom: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.bootcamp,
.uni {
  display: flex;
  position: relative;
  height: 100vh;
  flex-flow: column nowrap;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.school-name {
  width: 300px;
  height: auto;
  font-size: 3rem;
  text-align: center;
}

.alpha {
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ntpu {
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.img-wrapper {
  height: 300px;
  width: 400px;
  background: white;
  border: 5px solid #e0e0e0;
}

.text-wrapper {
  border: 1px solid blue;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}

.degree {
  font-size: 2rem;
}

.duration {
  font-size: 1rem;
}

.description {
  font-size: 1rem;
}

/* RWD */

@media screen and (min-width: 768px) {
  .bootcamp,
  .uni {
    display: flex;
    position: relative;
    height: 100vh;
    flex-flow: row nowrap;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    border: 1px solid red;
  }

  .school-name {
    position: absolute;
    width:100%;
    top:10%;
  }

  
}
</style>
