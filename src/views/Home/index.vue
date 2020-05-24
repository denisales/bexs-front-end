<template>
  <div id="checkout">
    <div class="app-checkout">
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
            <li><v-icon color="#de4b4b" size="22">mdi-check-circle</v-icon><span>Carrinho</span></li>
            <li><span class="steps__number">2</span><span>Pagamento</span></li>
            <li><span class="steps__number">3</span><span>Confirmação</span></li>
          </ul>
        </div>
      </div>
      <v-row no-gutters>
        <v-col>
          <div class="content">
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <h1 class="content__title">
                  Adicione um novo
                  <br />cartão de crédito
                </h1>
                <div class="d-flex justify-center justify-md-start">
                  <credit-card
                    :rotate="rotate"
                    :cardIsValid="cardValid"
                    :cardNumber="form.cardNumber"
                    :cardName="form.name"
                    :codeCard="form.code"
                    :expirationDateCard="form.expirationDate"
                  ></credit-card>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <validation-observer ref="form" tag="form" @submit.prevent="submit">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <validation-provider
                        ref="cardNumberProvider"
                        vid="cardNumber"
                        name="o número do cartão"
                        rules="required|cardNumber"
                        v-slot="{errors}"
                      >
                        <v-text-field
                          class="mb-1 mb-md-3"
                          name="cardNumber"
                          id="cardNumber"
                          ref="cardNumber"
                          :error-messages="errors"
                          v-model="form.cardNumber"
                          v-mask="'#### #### #### ####'"
                          color="grey"
                          type="text"
                          inputmode="numeric"
                          label="Número do cartão"
                          @focus="rotate = false"
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col cols="12">
                      <validation-provider
                        vid="name"
                        name="seu nome completo"
                        rules="required"
                        v-slot="{errors}"
                      >
                        <v-text-field
                          class="mb-1 mb-md-3"
                          :error-messages="errors"
                          color="grey"
                          @focus="rotate = false"
                          v-model="form.name"
                          label="Nome (igual ao cartão)"
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col cols="6 pr-2">
                      <validation-provider
                        vid="expirationDate"
                        name="a validade"
                        rules="required|expirationDateCard"
                        v-slot="{errors}"
                        ref="expirationDateProvider"
                      >
                        <v-text-field
                          class="mb-1 mb-md-3"
                          ref="expirationDate"
                          :error-messages="errors"
                          color="grey"
                          label="Validade"
                          type="text"
                          inputmode="numeric"
                          v-mask="'##/##'"
                          v-model="form.expirationDate"
                          @focus="rotate = false"
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col cols="6 pl-2">
                      <validation-provider
                        vid="code"
                        name="o CVV"
                        rules="required|cvv"
                        v-slot="{errors}"
                      >
                        <v-text-field
                          class="mb-1 mb-md-3"
                          v-model="form.code"
                          :error-messages="errors"
                          color="grey"
                          label="CVV"
                          v-mask="'###'"
                          type="text"
                          ref="code"
                          inputmode="numeric"
                          @focus="rotate = true"
                        >
                          <template v-slot:append>
                            <v-tooltip top>
                              <template v-slot:activator="{ on }">
                                <v-icon size="22" color="grey" dark v-on="on">fa-info-circle</v-icon>
                              </template>
                              <span>Insíra aqui o código de seguraça do seu cartão</span>
                            </v-tooltip>
                          </template>
                        </v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col cols="12">
                      <validation-provider
                        vid="payment"
                        name="o número de parcelas"
                        rules="required"
                        v-slot="{errors}"
                      >
                        <v-select
                          :error-messages="errors"
                          :items="payments"
                          color="grey"
                          label="Número de parcelas"
                          append-icon="fa-chevron-down"
                          v-model="form.payment"
                          item-value="value"
                          item-text="label"
                          return-object
                          @focus="rotate = false"
                        >
                          <template v-slot:no-data>
                            <div class="pa-4 text-center">Sem conteúdo</div>
                          </template>
                        </v-select>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-row class="mt-md-10 d-flex justify-md-end">
                    <v-col md="7">
                      <v-btn
                        type="submit"
                        x-large
                        color="color1"
                        dark
                        block
                        height="51"
                        elevation="0"
                      >continuar</v-btn>
                    </v-col>
                  </v-row>
                </validation-observer>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import CreditCard from '@/components/CreditCard/index.vue';

export default {
  name: 'Home',
  components: { CreditCard },
  data() {
    return {
      rotate: false,
      cardValid: false,
      payments: [
        {
          id: 1,
          qtd: 1,
          value: 12000,
          interestPayment: false,
          label: '1x R$ 12.000,00 sem juros',
        },
        {
          id: 1,
          qtd: 6,
          value: 2000,
          interestPayment: false,
          label: '6x R$ 2.000,00 sem juros',
        },
        {
          id: 1,
          qtd: 12,
          value: 1000,
          interestPayment: false,
          label: '12x R$ 1.000,00 sem juros',
        },
        {
          id: 1,
          qtd: 24,
          value: 50,
          interestPayment: true,
          label: '24x R$ 500,00 com juros',
        },
      ],
      form: {
        cardNumber: '',
        code: '',
        name: '',
        expirationDate: '',
      },
    };
  },
  watch: {
    'form.cardNumber': {
      async handler(newValue) {
        if (newValue.length === 19) {
          const { valid } = await this.$refs.cardNumberProvider.validate();
          if (!valid) {
            this.cardValid = false;
            return;
          }
          this.$refs.cardNumber.blur();
          this.cardValid = true;
        }
      },
    },
    'form.code': {
      async handler(newValue) {
        if (newValue.length === 3) {
          this.$refs.code.blur();
        }
      },
    },
    'form.expirationDate': {
      async handler(newValue) {
        if (newValue.length === 5) {
          const { valid } = await this.$refs.expirationDateProvider.validate();
          if (!valid) return;
          this.$refs.expirationDate.blur();
        }
      },
    },
  },
  methods: {
    async submit() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;
      console.log('Enviou');
    },
  },
};
</script>

<style lang="scss" scoped>
#checkout {
  height: 100%;
  .app-checkout {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    background: #fff;
    padding: 80px 40px 20px;
    @media (min-width: 960px) {
      padding: 123px 64px 50px;
    }
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
      @media (min-width: 960px) {
        width: 34%;
        bottom: 0;
        top: 0;
        height: 100%;
      }
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
        @media (min-width: 960px) {
          font-size: 20px;
          justify-content: flex-start;
          margin: 0 0 30px;
          &::before {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
