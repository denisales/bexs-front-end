<template>
  <div class="menu">
        <v-btn icon class="menu__btn">
          <v-icon color="#fff" size="20">fa-chevron-left</v-icon>
        </v-btn>
        <p class="menu__text d-none d-md-block">Alterar forma de pagamento</p>
        <p class="menu__title d-md-none">
          <b>Etapa 2</b> de 3
        </p>
        <div class="d-none d-md-block">
          <ul class="steps">
            <li><v-icon color="#de4b4b" size="23">mdi-check-circle</v-icon><span>Carrinho</span></li>
            <li><span class="steps__number">2</span><span>Pagamento</span></li>
            <li><span class="steps__number">3</span><span>Confirmação</span></li>
          </ul>
        </div>
      </div>
</template>

<script>
export default {

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
          span {
            margin-left: 8px;
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
