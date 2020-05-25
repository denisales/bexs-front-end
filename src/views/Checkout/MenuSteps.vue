<template>
  <div class="menu">
        <v-btn icon class="menu__btn">
          <v-icon color="#fff" size="23">fa-chevron-left</v-icon>
        </v-btn>
        <p class="menu__text d-none d-md-block">Alterar forma de pagamento</p>
        <p class="menu__title d-md-none">
          <b>Etapa {{currentIndex + 1}}</b> <span v-if="steps.length > 0">de {{steps.length}}</span>
        </p>
        <div class="d-none d-md-block">
          <ul class="steps">
            <li v-for="(step, index) in steps" :key="step.name">
              <span class="steps__number" v-if="index >= currentIndex">{{index + 1}}</span>
              <span class="steps__number" v-else><v-icon color="#de4b4b" size="23">mdi-check-circle</v-icon></span>
              <span>{{step.name}}</span></li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {
  props: {
    currentIndex: {
      default: 0,
    },
    steps: {
      required: true,
      type: Array,
    },
  },

};
</script>

<style scoped lang="scss">
.menu {
      z-index: 1;
      padding: 0 40px;
      margin-top: 30px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (min-width: 960px) {
        padding: 0 64px;
        margin-top: 53px;
        justify-content: space-between;
      }

      .steps {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
          &__number {
            border: 1px solid var(--color-1);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            line-height: 1;
            padding-top: 1px;
            margin: 0;
            margin-right: 7px;
          }
        li {
          margin-left: 56px;
          color: var(--color-1);
          font-size: 13px;
          display: flex;
          align-items: center;
          position: relative;
          &::after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border: 2px solid var(--color-1);
            border-left: 0;
            border-bottom: 0;
            position: absolute;
            right: -28px;
            transform: rotate(45deg);
          }
          &:last-of-type{
             &::after {
               content: none;
             }
          }
        }
      }

      &__text {
        color: #fff;
        font-size: 13px;
        margin: 0;
        margin-left: 24px;
        @media (min-width: 960px) {
          margin-left: 40px;
        }
      }

      &__title {
        color: #fff;
        font-size: 13px;
        margin: 0;

        @media (min-width: 960px) {
          color: var(--color-1);
        }
      }

      &__btn {
        position: absolute;
        left: 20px;
        @media (min-width: 960px) {
          left: 60px;
        }
      }
    }
</style>
