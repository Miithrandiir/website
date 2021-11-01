<template>
  <div class="skill">
    <h1>{{ title }}</h1>

    <div class="content">
      <img v-if="img != null" :src="img" alt=""/>
      <img v-else src="../assets/img/logo/code-solid.svg" alt=""/>
      <hr/>
      <div class="informations">
        <span class="level" :class="level === 'Débutant' ? 'low' : (level === 'Expérimenté') ? 'high' : 'medium'">
          {{ level }}
        </span>
        <div class="training">
          <span v-if="self_taught" class="self-taught" data-slide="true">
            <i class="fas fa-home"></i>
            <span>autodidacte</span>
          </span>
          <span v-if="school" class="school contentSlide" data-slide="true">
            <i class="fas fa-school"></i>
            <span>En classe</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Skill",
  props: {
    title: {
      required: true,
      type: String
    },
    img: {
      required: false,
      type: String
    },
    level: {
      required: true,
      type: String
    },
    self_taught: {
      required: true,
      type: Boolean
    },
    school: {
      required: true,
      type: Boolean
    }
  }
}

</script>

<style scoped lang="scss">
.skill {
  background: #F4F4F4;
  margin: 10px;
  border-radius: 3px;
  border: 1px solid #dadada;
  box-shadow: 3px -1px 4px rgba(0, 0, 0, 0.2);

  & > h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-weight: 200;
    margin: 10px 0;
  }

  & > .content {
    display: flex;
    flex-direction: column;

    & > img {
      margin: 50px auto;
      height: 100px;
      max-width: 300px;
    }

    & > hr {
      width: 75%;
      margin: 0 auto;
      border: 1px solid rgba(0, 0, 0, 0.10);
    }

    & > .informations {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 20px 0;

      span {
        padding: 2px 30px;
        border-radius: 10px;
      }

      & > .level {
        background: #1abc9c;
        font-family: "Raleway", sans-serif;
        font-weight: 400;
      }
      &>.level.low {
        background: #9b59b6;
        color: white;
      }
      &>.level.medium {
        background: #3498db;
        color: white;
      }
      &>.level.high {
        background: #f1c40f;
        color: black;
      }

      & > .training {
        display: flex;

        & > span {
          display: flex;
          transition: width ease-in-out 200ms;
          justify-content: center;
          align-items: center;
          width: 0;
          position: relative;

          & > span {
            overflow: hidden;
            position: absolute;
            display: none;
            cursor: default;
            top: 0;
            right: 0;
            font-family: "Raleway", sans-serif;
          }

          @media (min-width: 450px) {
            &:hover {
              width: 120px;
              justify-content: flex-start;
              transition: width 250ms ease-in-out;

              & > span {
                display: inline;
              }
            }
          }

        }

        & > .self-taught {
          background: #2ecc71;
          color: white;
        }

        & > .school {
          background: #2ecc71;
          color: white;
        }
      }
    }
  }
}


</style>
