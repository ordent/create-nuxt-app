<template>
  <div class="is-component-wrapper w-full flex flex-col justify-start">
    <app-button
      big
      radius="lg"
      background="blue"
      class="mb-4"
      @click="totalHandling"
    >
      <div class="flex flex-row justify-between py-2">
        <p class="flex-grow-0 mr-4">{{ totalItem }}</p>
        <p class="flex-grow-0 mr-4">Total</p>
        <p class="flex-grow text-left">{{ total }}</p>
        <cheveron-right
          class="w-6 h-6 text-white fill-current stroke-current flex-grow-0"
        />
      </div>
    </app-button>
    <total-input ref="total" :input="input" />
    <div
      ref="buttonContainer"
      class="button-wrapper flex flex-row flex-wrap h-full pt-2 justify-between"
    >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >1</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >2</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >3</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >4</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >5</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >6</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >7</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >8</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >9</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="red"
        @calculatorButtonTap="buttonClearHandling"
        >C</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        color="gray-700"
        @calculatorButtonTap="buttonTapHandling"
        >0</calculator-button
      >
      <calculator-button
        id="button-0"
        ref="masterButton"
        class="w-1/3 calculatorButton text-green-500"
        background="blue"
        :gradient="false"
        @calculatorButtonTap="buttonPlusHandling"
        >+</calculator-button
      >
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/Form/AppButton.vue'
import CheveronRight from '~/assets/icons/cheveron-right.svg?inline'
import { CalculatorButton, TotalInput } from '~/components/pages/Main'
import { CalculatorMixin } from '~/assets/js/pages/main/calculator.js'
export default {
  components: {
    AppButton,
    TotalInput,
    CalculatorButton,
    CheveronRight,
  },
  mixins: [CalculatorMixin],
}
</script>
