<template>
  <div class="workTogether">
    <div class="together-text">
      <h1 class="mb-3">Let's Work Together</h1>
      <p>
        If you nare interested in further disscussion, feel free to reach out to me at
        <a href="mailto:easonlu0425@gmail.com?subject=We'd like to invite you">easonlu@gmail.com</a>. I'm currently available for various coding tasks,
        including crafting user-friendly interfaces, or developing eye-catching landing pages. Don't hesitate to
        drop me a message, and let's work together to achieve your design goals!
      </p>
    </div>
    <div class="email">
      <p>
        <a href="mailto:easonlu0425@gmail.com?subject=We'd like to invite you"
          >Write me an Email</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.workTogether {
  height: 35vh;
  background-color: #1a1a1a;
  color: white;
  padding-top: 1vh;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.together-text {
  text-align: center;
  margin-top: 1rem;
  width: 100vw;
}

@media screen and (min-width: 476px) {
  .together-text {
    text-align: center;
    width: 60vw;
  }
}
</style>
