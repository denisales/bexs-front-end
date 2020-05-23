<template>
  <div id="checkout">
    <div class="app-checkout">
      <div class="menu">
        <v-btn icon class="menu__btn">
          <v-icon color="#fff">fa-chevron-left</v-icon>
        </v-btn>
        <p>
          <b>Etapa 2</b> de 3
        </p>
      </div>
      <div class="content">
        <div>
          <h1 class="content__title">
            Adicione um novo
            <br />cartão de crédito
          </h1>
          <div class="card-view" :class="{'rotate': form.code}">
            <div class="card">
              <div class="front">
                <div class="card__area">logo</div>
                <div class="card__area card__area--shadow">
                  <div class="number">
                    <span
                      :class="{'no-margin': !form.number}"
                      v-for="(number, index) in cardNumber"
                      :key="index"
                    >{{number}}</span>
                  </div>
                </div>
                <div class="card__area card__area--data card__area--shadow">
                  <span class="text-uppercase d-inline-block text-truncate mr-3">{{nameCard}}</span>
                  <span style="min-width: 45px">{{dateValid}}</span>
                </div>
              </div>
              <div class="back">Verso</div>
            </div>
          </div>
        </div>
        <v-form>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                v-model="form.number"
                v-mask="'#### #### #### ####'"
                color="grey"
                label="Número do cartão"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field color="grey" v-model="form.name" label="Nome (igual ao cartão)"></v-text-field>
            </v-col>
            <v-col cols="6 pr-2">
              <v-text-field color="grey" label="Validade" v-mask="'##/##'" v-model="form.date"></v-text-field>
            </v-col>
            <v-col cols="6 pl-2">
              <v-text-field v-model="form.code" color="grey" label="CVV"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                :items="payments"
                color="grey"
                label="Número de parcelas"
                append-icon="fa-chevron-down"
              >
                <template v-slot:no-data>
                  <div class="pa-4 text-center">Sem conteúdo</div>
                </template>
              </v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn x-large color="color1" dark block height="51" elevation="0">continuar</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      payments: [
        {
          id: 1,
          qtd: 1,
          value: 12000,
          interestPayment: false,
        },
        {
          id: 1,
          qtd: 6,
          value: 2000,
          interestPayment: false,
        },
        {
          id: 1,
          qtd: 12,
          value: 1000,
          interestPayment: false,
        },
        {
          id: 1,
          qtd: 24,
          value: 50,
          interestPayment: true,
        },
      ],
      form: {
        number: '',
      },
    };
  },
  computed: {
    nameCard() {
      if (this.form.name) {
        return this.form.name;
      }
      return 'NOME DO TITULAR';
    },
    dateValid() {
      if (this.form.date) {
        return this.form.date;
      }
      return '00/00';
    },
    cardNumber() {
      if (this.form.number) {
        const numberInArray = this.form.number.split(' ');
        return numberInArray;
      }
      return ['* * * *', '* * * *', '* * * *', '* * * *'];
    },
  },
  // components: { SubmitButton },
};
</script>

<style lang="scss" scoped>
#checkout {
  height: 100%;
}
.app-checkout {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background: #fff;
  padding: 75px 40px 40px;
  &::before {
    content: "";
    display: block;
    background: var(--color-1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 239px;
    z-index: 0;
  }

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

    &__btn {
      position: absolute;
      left: 20px;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    &__title {
      width: 100%;
      line-height: 1.2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      margin: 0 0 16px;
      font-weight: bold;
      color: #fff;
      &::before {
        content: "";
        background: url("~@/assets/icon-card.svg") no-repeat center;
        background-size: cover;
        display: block;
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }
    }

    @keyframes enter {
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
    @keyframes leave {
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
      perspective: 1000px;
      margin: 0 auto 20px;
       width: 280px;
       position: relative;
       &::before {
         top: 15px;
         content: '';
         position: absolute;
         width: 90%;
         height: 100%;
         background: rgba(0,0,0,.3);
         filter: blur(10px);
        border-radius: 10px;
        transition: all 1s ease;
        left: 50%;
        transform: translateX(-50%);
         animation: enter 1s;
       }

        &.rotate {
          .card {
             transform: rotateY(180deg);
          }
          &::before {
           animation: leave 1s;
          }
        }
      .card {
        transform-style: preserve-3d;
        width: 100%;
        height: 172px;
        transition: all 1s ease;
        position: relative;
        border-radius: 10px;
        .front {
          border-radius: 10px;
          padding: 27px 17px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          position: absolute;
          backface-visibility: hidden;
          top: 0;
          bottom: 0;
          background: url("~@/assets/bg-card-front.svg") no-repeat center, #ccc;
          background: cover;
          border: 1px solid rgba(0,0,0,.2);
          /* box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.7); */
        }
        .back {
          border-radius: 10px;
          transform: rotateY(180deg);
          backface-visibility: hidden;
          padding: 27px 17px;
          width: 100%;
          top: 0;
          bottom: 0;
          position: absolute;
          background: url("~@/assets/bg-card-back.svg") no-repeat center, #ccc;
          background: cover;
          border: 1px solid rgba(0,0,0,.2);
          /* box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.7); */
        }

        &__area {
          width: 100%;
          color: #fff;
          display: flex;
          justify-content: space-between;
          &--data {
            display: flex;
            justify-content: space-between;
          }
          &--shadow {
            text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
          }
        }

        .number {
          display: flex;
          width: 100%;
          text-align: center;
          font-size: 20px;
          margin: 0;

          span {
            padding: 0 10px;
            &.no-margin {
              padding: 0 14px;
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
  }
}

.action {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
