<template>
  <svg viewBox="0 0 2209 487" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2209 0L0 487H2209V0Z" fill="#363795FF"/>
  </svg>
  <div class="creations">
    <h1>Mes créations</h1>

    <ul>
      <li><img src="../assets/img/creations/creations-1.jpg" alt=""/> </li>
      <li><img src="../assets/img/creations/creations-1.jpg" alt=""/> </li>
      <li><img src="../assets/img/creations/creations-1.jpg" alt=""/> </li>
    </ul>
  </div>
  <svg viewBox="0 0 2209 487" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 487L2209 0L0 0L0 487Z" fill="#363795FF"/>
  </svg>

</template>

<script>
export default {
  name: "Creations"
}
</script>

<style scoped lang="scss">
@import "../assets/sass/_vars.scss";

svg {
  display: block;
}

.creations {
  background: $main;
  &>h1 {
    color: white;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
  }
  &>ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    &>li {
      width: calc(100% / 3);
      margin: 0 auto;
      display: flex;
      &>img {
        margin: 0 auto;
        border-radius: 100%;
        border: 2px solid white;
        width: 50%;
        //box-shadow: 0px 0px 15px black;
      }
    }
  }
}

</style>
