<template>
  <h1>Qui suis-je ?</h1>

  <div class="cote">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla in sem consectetur pharetra. Vivamus molestie odio eu metus blandit dictum. Ut sit amet elementum lectus, a placerat justo. Duis sit amet commodo risus. Fusce id pellentesque erat. Maecenas ut sagittis risus. Vestibulum in tellus libero. Aliquam lacinia urna non elementum tempus. Suspendisse commodo, erat et placerat efficitur, dui erat dignissim quam, aliquam mollis tortor erat at erat.</p>
  </div>
</template>

<script>
export default {
  name: "WhoIAm"
}
</script>

<style scoped lang="scss">
@import "../assets/sass/_fonts.scss";
@import "../assets/sass/_vars.scss";

  h1 {
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }

  .cote {
    display: flex;
    margin: 100px auto;
    width: 70%;
    text-align: justify;
    border-left: 10px solid $main;
    &>p {
      margin: 0 10px;
      font-size: 18px;
      font-family: "Raleway", sans-serif;

    }
  }
</style>
