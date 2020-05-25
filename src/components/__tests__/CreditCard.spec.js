import { shallowMount } from '@vue/test-utils';
import CreditCard from '@/components/CreditCard/index.vue';


describe('CreditCard', () => {
  it('Componente é uma intancia do Vue', () => {
    const wrapper = shallowMount(CreditCard);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('a propriedade flag deve ser null', () => {
    const wrapper = shallowMount(CreditCard);
    expect(wrapper.vm.flag).toBeNull();
  });

  it('a propriedade computada nameCardComputed deve conter o valor "NOME DO TITULAR"', () => {
    expect(CreditCard.computed.nameCardComputed()).toBe('NOME DO TITULAR');
  });

  it('a propriedade computada codeCardComputed deve conter o valor "* * *"', () => {
    expect(CreditCard.computed.codeCardComputed()).toBe('* * *');
  });

  it('a propriedade computada codeCardComputed deve conter o valor "00/00"', () => {
    expect(CreditCard.computed.expirationDateCardComputed()).toBe('00/00');
  });

  it("a propriedade computada cardNumberComputed deve ser ['* * * *', '* * * *', '* * * *', '* * * *']", () => {
    expect(CreditCard.computed.cardNumberComputed()).toEqual(['* * * *', '* * * *', '* * * *', '* * * *']);
  });

  it('Deve existir um logo da bandeira Visa quando a propriedade flag tiver um valor, a prop cardIsValid for true e cardNumber conter um numero válido', () => {
    const wrapper = shallowMount(CreditCard, {
      data() {
        return {
          flag: { name: 'visa' },
        };
      },
      propsData: {
        cardNumber: '4111 1111 1111 1111',
        cardIsValid: true,
      },
    });

    expect(wrapper.contains('.logo--visa')).toBeTruthy();
  });

  it('Deve mostrar na tela o numero do cartãoquando a prop cardNumber tiver um numero', () => {
    const wrapper = shallowMount(CreditCard, {
      propsData: {
        cardNumber: '4111 1111 1111 1111',
      },
    });

    expect(wrapper.find('.number').text()).toEqual('4111111111111111');
  });

  it('Deve existir a classe rotate quando a prop rotate for true', () => {
    const wrapper = shallowMount(CreditCard, {
      propsData: {
        rotate: true,
      },
    });

    expect(wrapper.contains('.rotate')).toBeTruthy();
  });
});
