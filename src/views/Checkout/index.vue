<template>
  <div id="checkout">
    <div class="app-checkout">
      <menu-steps :current-index="1" :steps="steps" />
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
                          v-mask="['#### ###### #####', '#### #### #### ####']"
                          color="grey"
                          type="text"
                          inputmode="numeric"
                          label="Número do cartão"
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
                          v-mask="'####'"
                          type="text"
                          ref="code"
                          inputmode="numeric"
                          @focus="rotate = true"
                          @blur="rotate = false"
                          maxlength="4"
                        >
                          <template v-slot:append>
                            <v-tooltip top>
                              <template v-slot:activator="{ on }">
                                <v-icon size="22" color="grey" dark v-on="on">fa-info-circle</v-icon>
                              </template>
                              <span>Insira aqui o código de seguraça do seu cartão</span>
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
                          :label="loadingPaymets ? 'Carregando...' : 'Número de parcelas'"
                          append-icon="fa-chevron-down"
                          v-model="form.payment"
                          item-value="value"
                          item-text="label"
                          return-object
                          :loading="loadingPaymets"
                          :disabled="loadingPaymets"
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
                        :loading="loading"
                        type="submit"
                        large
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
import pagamentoService from '@/services/pagamentoService';
import MenuSteps from './MenuSteps.vue';

export default {
  name: 'Home',
  components: { CreditCard, MenuSteps },
  data() {
    return {
      rotate: false,
      cardValid: false,
      loading: false,
      loadingPaymets: false,
      steps: [
        { name: 'Carrinho' },
        { name: 'Pagamento' },
        { name: 'Confirmação' },
      ],
      payments: [],
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
        const cardnumber = newValue.replace(/[^0-9]+/g, '');
        if (cardnumber.length >= 13) {
          const {
            valid,
          } = await this.$refs.cardNumberProvider.validateSilent();
          this.cardValid = valid;
          return;
        }
        this.cardValid = false;
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
    getPayments() {
      this.loadingPaymets = true;
      setTimeout(() => {
        this.payments = [
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
        ];
        this.loadingPaymets = false;
      }, 2000);
    },
    async submit() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;
      try {
        this.loading = true;
        await pagamentoService.pagar(this.form);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
  },
  created() {
    this.getPayments();
  },
};
</script>

<style lang="scss" scoped>
#checkout {
  height: 100%;
  background: #f7f7f7;
  .app-checkout {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    background: #fff;
    padding: 80px 40px 20px;
    @media (min-width: 960px) {
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
      height: auto;
      margin-top: 40px;
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
          background: url("~@/assets/imgs/icon-card.svg") no-repeat center;
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
