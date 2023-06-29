<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Eason Lu</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/skills">技能</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'work-experience'}">工作經歷</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'academic'}">學歷</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'projects'}">專案</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav  {
background: #000000;
backdrop-filter: invert(80%);
}


button {
  background-color: lightblue;
}
</style>
