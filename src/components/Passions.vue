<template>
  <h1>Mes passions</h1>

  <div class="passions">

    <div class="passion">
      <figure>
        <figcaption>Musique</figcaption>

        <img src="../assets/img/logo/music.svg" alt="logo note de musique">
      </figure>
    </div>

    <div class="passion">
      <figure>
        <figcaption>Travaux manuels</figcaption>

        <img src="../assets/img/logo/user-hard-hat-solid.svg" alt="logo personne avec casque">
      </figure>
    </div>

    <div class="passion">
      <figure>
        <figcaption>Sciences</figcaption>

        <img src="../assets/img/logo/atom.svg" alt="logo atome">
      </figure>
    </div>

    <div class="passion">
      <figure>
        <figcaption>Informatique</figcaption>

        <img src="../assets/img/logo/tv.svg" alt="logo écran">
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "Passions"
}
</script>

<style scoped lang="scss">
@import "../assets/sass/_vars.scss";

h1 {
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

.passions {
  display: flex;
  width: 90%;
  margin: 100px auto;
  flex-wrap: wrap;
  justify-content: space-around;
  & > .passion {
    display: flex;
    justify-content: center;
    //width: calc(100% / 4);
    & > figure {
      & > figcaption {
        font-family: "Raleway", sans-serif;
        font-weight: 200;
        text-align: center;
        font-size: 18px;
        margin: 10px 0;
        text-transform: uppercase;
      }

      & >img {
        background: $main;
        height: 41px;
        padding: 30px;
        display: flex;
        margin: 0 auto;
      }
    }
  }
}
</style>
