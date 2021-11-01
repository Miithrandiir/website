<template>
  <h1>Mes compétences</h1>


  <div class="skills">

    <div class="category">
      <div class="title">
        Compétences Linguistiques
      </div>
      <div class="content">
        <skill title="Français" img="/src/assets/img/france.svg" level="Natif" :school="false"
               :self_taught="false"></skill>
        <skill title="Anglais" img="/src/assets/img/union-jack.svg" level="B2" :school="true"
               :self_taught="true"></skill>
        <skill title="Anglais" img="/src/assets/img/germany.png" level="A2" :school="true" :self_taught="false"></skill>
      </div>
    </div>

    <div class="category">
      <div class="title">
        Permis
      </div>
      <div class="content">
        <skill title="Permis B2" img="/src/assets/img/logo/car-solid.svg" level="Décembre 2018" :school="false"
               :self_taught="false"></skill>
      </div>
    </div>


    <div class="category">
      <div class="title">
        Language du web
      </div>
      <div class="content">
        <skill title="HTML" img="/src/assets/img/logo/html5_by_w3c.svg" level="Expérimenté" :school="true"
               :self_taught="true"></skill>
        <skill title="CSS" img="/src/assets/img/logo/css3.svg" level="Expérimenté" :school="true"
               :self_taught="true"></skill>
        <skill title="SCSS" img="/src/assets/img/logo/sass.svg" level="Expérimenté" :school="true"
               :self_taught="true"></skill>
        <skill title="Javascript" img="/src/assets/img/logo/javascript.svg" level="Expérimenté" :school="true"
               :self_taught="true"></skill>
        <skill title="Javascript" img="/src/assets/img/logo/typescript.svg" level="Débutant" :school="true"
               :self_taught="true"></skill>
        <skill title="PHP" img="/src/assets/img/logo/php.svg" level="Expérimenté" :school="false"
               :self_taught="true"></skill>
        <skill title="Symfony" img="/src/assets/img/logo/symfony.svg" level="Intermédiaire" :school="false"
               :self_taught="true"></skill>
        <skill title="Codeigniter 3" img="/src/assets/img/logo/codeigniter.png" level="Expérimenté" :school="false"
               :self_taught="true"></skill>
        <skill title="PhalconPHP" img="/src/assets/img/logo/phalcon.png" level="Débutant" :school="false"
               :self_taught="true"></skill>
        <skill title="Node.JS" img="/src/assets/img/logo/nodejs.svg" level="Débutant" :school="true"
               :self_taught="true"></skill>
        <skill title="Vue.JS" img="/src/assets/img/logo/vuejs.svg" level="Expérimenté" :school="false"
               :self_taught="true"></skill>
        <skill title="ASP .NET Core" img="/src/assets/img/logo/netcore.svg" level="Débutant" :school="false"
               :self_taught="true"></skill>
      </div>
    </div>

    <div class="category">
      <div class="title">
        Language applicatif
      </div>
      <div class="content">
        <skill title="C++" img="/src/assets/img/logo/c++.svg" level="Intermédiaire" :school="true"
               :self_taught="true"></skill>
        <skill title="QT" img="/src/assets/img/logo/QT.png" level="Débutant" :school="true"
               :self_taught="true"></skill>
        <skill title="C#" img="/src/assets/img/logo/csharp.svg" level="Intermédiaire" :school="true"
               :self_taught="true"></skill>
        <skill title="WPF" img="/src/assets/img/logo/code-solid.svg" level="Intermédiaire" :school="true"
               :self_taught="true"></skill>
      </div>
    </div>

    <div class="category">
      <div class="title">
        Base de données
      </div>
      <div class="content">
        <skill title="SQL" img="/src/assets/img/logo/database-solid.svg" level="Expérimenté" :school="true"
               :self_taught="true"></skill>
        <skill title="MySQL" img="/src/assets/img/logo/mysql.svg" level="Expérimenté" :school="true"
               :self_taught="true"></skill>
        <skill title="PostgreSQL" img="/src/assets/img/logo/postgresql.svg" level="Intermédiaire" :school="true"
               :self_taught="true"></skill>
        <skill title="Oracle Database" img="/src/assets/img/logo/oracle.svg" level="Débutant" :school="true"
               :self_taught="true"></skill>
      </div>
    </div>

    <div class="category">
      <div class="title">
        Outils Développement & Déploiement
      </div>
      <div class="content">
        <skill title="Git" img="/src/assets/img/logo/git.svg" level="Expérimenté" :school="true"
               :self_taught="true"></skill>
        <skill title="CI/CD Gitlab" img="/src/assets/img/logo/gitlab.svg" level="Débutant" :school="true"
               :self_taught="true"></skill>
        <skill title="Docker" img="/src/assets/img/logo/docker.png" level="Débutant" :school="true"
               :self_taught="true"></skill>
        <skill title="Docker Compose" img="/src/assets/img/logo/docker_compose.png" level="Débutant" :school="true"
               :self_taught="true"></skill>
      </div>
    </div>

    <div class="category">
      <div class="title">
        Système d'exploitation & Logiciels
      </div>
      <div class="content">
        <skill title="Windows" img="/src/assets/img/logo/windows.svg" level="Intermédiaire" :school="false"
               :self_taught="true"></skill>
        <skill title="Ubuntu 20.04 LTS" img="/src/assets/img/logo/ubuntu.svg" level="Intermédiaire" :school="false"
               :self_taught="true"></skill>
        <skill title="Debian 11" img="/src/assets/img/logo/debian.svg" level="Intermédiaire" :school="true"
               :self_taught="true"></skill>
        <skill title="Apache" img="/src/assets/img/logo/apache.svg" level="Intermédiaire" :school="false"
               :self_taught="true"></skill>
        <skill title="NGinx" img="/src/assets/img/logo/nginx.svg" level="Débutant" :school="false"
               :self_taught="true"></skill>
      </div>
    </div>


  </div>
</template>

<script>
import Skill from "../components/Skill.vue";

export default {
  name: "Skills",
  components: {Skill}
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  font-family: "Righteous", sans-serif;
  font-weight: 400;
}

.skills {
  width: 80%;
  margin: 0 auto;

  & > .category {
    margin: 50px 0;

    & > .title {
      text-transform: uppercase;
      font-family: "Raleway", sans-serif;
      font-size: 1.25em;
    }

    & > .content {
      display: grid;
      grid-template-columns: repeat(auto-fit, 500px);
    }
  }
}

@media (max-width: 1300px) {
  .skills {
    & > .category {
      & > .content {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
}
</style>
