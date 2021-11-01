<template>
  <header>
    <div class="top">
      <h1>Simon HEBAN</h1>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/skills">Compétences</router-link></li>
          <li><a href="#">Réalisations</a></li>
        </ul>
      </nav>
      <a href="#" class="hamburger-nav" @click.prevent="show()"><i class="fas fa-bars"></i></a>
    </div>
    <div class="bottom">
      <div class="img">
        <img src="../../assets/img/undraw_outer_space_re_u9vd.svg" alt=""/>
      </div>
      <div class="title">
        <h1>Développeur Informatique</h1>
        <h2>Passionné - curieux</h2>
      </div>
    </div>
  </header>
  <svg viewBox="0 0 1445 339" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M1445 0C1366.16 36.0723 1258.74 45.7629 1139.38 56.5309C971.943 71.6353 781.011 88.8594 612.5 183.991C260 382.991 0 332.991 0 332.991V0H1445Z"
        fill="#363795"/>
  </svg>
</template>

<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.min.css'

export default {
  name: "Header",
  data() {
    return {
      "nav_show": true
    }
  },
  methods: {
    show() {
      let item: HTMLElement | null = document.querySelector("nav");
      if (item != null) {
        if (item.classList.contains("show")) {
          item.classList.remove("show");
        } else {
          item.classList.add("show")
        }
      }

    }
  }
}
</script>
