<template>
 <div class="card-view" :class="[{'rotate': rotate}, {'is-valid': cardIsValid}]">
    <div class="card-container">
    <div class="card">
      <div class="front">
        <div class="card__area">
          <span class="logo" v-if="cardIsValid"></span>
        </div>
        <div class="card__area card__area--shadow">
          <div class="number">
            <span
              :class="{'no-margin': !cardNumber}"
              v-for="(number, index) in cardNumberComputed"
              :key="index"
            >{{number}}</span>
          </div>
        </div>
        <div class="card__area card__area--data card__area--shadow">
          <span class="text-uppercase d-inline-block text-truncate mr-3">{{nameCardComputed}}</span>
          <span style="min-width: 45px">{{expirationDateCardComputed}}</span>
        </div>
      </div>
      <div class="back">
        <span>{{codeCardComputed}}</span>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  props: {
    rotate: {
      type: Boolean,
    },
    cardIsValid: {
      type: Boolean,
    },
    cardNumber: {
      type: String,
    },
    cardName: {
      type: String,
    },
    codeCard: {
      type: String,
    },
    expirationDateCard: {
      type: String,
    },
  },
  computed: {
    nameCardComputed() {
      if (this.cardName) {
        return this.cardName;
      }
      return 'NOME DO TITULAR';
    },
    codeCardComputed() {
      if (this.codeCard) {
        return this.codeCard;
      }
      return '* * *';
    },
    expirationDateCardComputed() {
      if (this.expirationDateCard) {
        return this.expirationDateCard;
      }
      return '00/00';
    },
    cardNumberComputed() {
      if (this.cardNumber) {
        const numberInArray = this.cardNumber.split(' ');
        return numberInArray;
      }
      return ['* * * *', '* * * *', '* * * *', '* * * *'];
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes cardRotateFront {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@keyframes cardRotateBack {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.card-view {
  position: relative;
  z-index: 1;
  &::before {
    top: 0;
    content: "";
    position: absolute;
    width: 90%;
    background:rgba(0, 0, 0, 0.2);
    box-shadow: 1px 20px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: all 0.5s ease;
    left: 50%;
    transform: translateX(-50%);
    animation: cardRotateFront 0.5s;
    z-index: 1;
    height: 172px;
    @media (min-width: 960px) {
      height: 223px;
    }
  }
  &.rotate {
      &::before {
      animation: cardRotateBack 0.5s;
    }
  }
}
.card-container {
  z-index: 2;
  perspective: 1000px;
  width: 280px;
  position: relative;
  margin-bottom: 20px;
  height: 172px;
  @media (min-width: 960px) {
    width: 364px;
    height: 223px;
  }

  .is-valid & {
    .front {
      background: url("~@/assets/bg-card-front-valid.svg") no-repeat center,
        #134868 !important;
      background-size: cover !important;
    }
    .back {
      background: url("~@/assets/bg-card-back-valid.svg") no-repeat center,
        #134868 !important;
      background-size: cover !important;
    }
  }

  .rotate & {
    .card {
      transform: rotateY(180deg);
    }
  }
  .card {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    position: relative;
     z-index: 2;
    .front,
    .back {
      border-radius: 10px;
      padding: 27px 17px;
      width: 100%;
      top: 0;
      bottom: 0;
      position: absolute;
      border: 1px solid rgba(0, 0, 0, 0.2);
      display: flex;
      @media (min-width: 960px) {
        padding: 35px 31px;
        border-radius: 14px;
      }
    }
    .front {
      background: url("~@/assets/bg-card-front.svg") no-repeat center, #727272;
      background-size: cover;
      flex-wrap: wrap;
      align-content: space-between;
      backface-visibility: hidden;
    }
    .back {
      background: url("~@/assets/bg-card-back.svg") no-repeat center, #727272;
      background-size: cover;
      align-items: center;
      justify-content: center;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      span {
        position: relative;
        left: 12px;
        top: 6px;
        font-size: 14px;
      }
    }

    &__area {
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: space-between;
      min-height: 17px;
      font-size: 16x;
      &--data {
        display: flex;
        justify-content: space-between;
      }
      &--shadow {
        text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
      }
      @media (min-width: 960px) {
        min-height: 22px;
      }
    }

    .logo {
      width: 54px;
      height: 17px;
      display: block;
      background: url("~@/assets/visa-logo.png") no-repeat center;
      background-size: contain;
      @media (min-width: 960px) {
        width: 69px;
        height: 22px;
      }
    }

    .number {
      display: flex;
      width: 100%;
      text-align: center;
      font-size: 20px;
      margin: 0;
      @media (min-width: 960px) {
        letter-spacing: 2.3px;
        font-size: 22px;
      }

      span {
        padding: 0 10px;
        &.no-margin {
          padding: 0 12px;
          font-size: 16px;
        }
        &:last-child {
          padding-right: 0 !important;
        }
        &:first-child {
          padding-left: 0 !important;
        }
      }
    }
  }
}
</style>
