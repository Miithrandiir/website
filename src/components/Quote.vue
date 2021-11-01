<template>
  <div class="quote">
    <div class="title">
      <figure>
        <blockquote>
          <h2>Fais de ta vie un rêve, et d'un rêve, une réalité</h2>
        </blockquote>
        <figcaption>Antoine de Saint-Exupéry</figcaption>
      </figure>
    </div>
    <div class="img">
      <img src="../assets/img/undraw_counting_stars_rrnl.svg" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote"
}
</script>

<style scoped lang="scss">
.quote {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 200px;
  &>.title {
    display: flex;
    align-items: center;
    margin: 0 10%;
    &>figure {
      display: flex;
      flex-direction: column;
      &>blockquote {
        &>h2 {
          font-family: "Raleway", sans-serif;
          font-weight: 200;
          text-transform: uppercase;
        }
      }
      &>figcaption {
        display: flex;
        align-self: flex-end;
        text-transform: uppercase;
        font-family: "Raleway", sans-serif;
        font-weight: 100;
        font-style: italic;
      }
    }
  }
  &>.img {
    position: absolute;
    bottom: -5px;
    right: 2%;
    &>img {
      width: 600px;
    }
  }
}

@media (max-width: 1600px) {
  .quote {
    &>.img {
      display: none;
    }
  }
}
</style>
