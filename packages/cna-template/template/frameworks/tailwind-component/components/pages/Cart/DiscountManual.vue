<template>
  <div class="is-component-wrapper w-full flex flex-col justify-start">
    <total-input ref="total" :input="input" />
    <div
      ref="buttonContainer"
      class="button-wrapper flex flex-row flex-wrap h-full pt-2 justify-between"
    >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >1</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >2</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >3</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >4</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >5</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >6</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >7</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >8</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >9</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton text-red-500"
        @calculatorButtonTap="buttonClearHandling"
        >C</calculator-button
      >
      <calculator-button
        class="w-1/3 calculatorButton"
        @calculatorButtonTap="buttonTapHandling"
        >0</calculator-button
      >
      <calculator-button
        id="button-0"
        ref="masterButton"
        class="w-1/3 calculatorButton text-transparent"
      ></calculator-button>
    </div>
  </div>
</template>

<script>
// import AppButton from '~/components/Form/AppButton.vue'
import TotalInput from '~/components/pages/Main/TotalInput.vue'
import CalculatorButton from '~/components/pages/Main/CalculatorButton.vue'
// import CheveronRight from '~/assets/icons/cheveron-right.svg?inline'
import { currencyFormatter } from '~/assets/js/utilities.js'
import ClearButton from '~/components/pages/Main/ClearButton.vue'
export default {
  components: {
    // AppButton,
    TotalInput,
    CalculatorButton,
    // CheveronRight,
  },
  data() {
    return {
      height: '100px',
      input: false,
      buffer: 0,
      value: [],
      result: [], // {value: 1000, notes: '123123', quantity: 1, taxes: 10%}
    }
  },
  computed: {
    total() {
      const val = parseInt(this.buffer)
      if (this.value.length > 0 && Number.isInteger(val)) {
        return currencyFormatter.format(
          this.value.reduce((a, b) => a + b) + val
        )
      } else if (this.value.length === 0 && Number.isInteger(val)) {
        return currencyFormatter.format(val)
      } else if (this.value.length > 0 && !Number.isInteger(val)) {
        return currencyFormatter.format(this.value.reduce((a, b) => a + b))
      } else {
        return currencyFormatter.format(0)
      }
    },
  },
  mounted() {
    this.$nextTick(() => {})
  },
  methods: {
    buttonClearHandling(e) {
      if (this.value.length > 0) {
        const ClearButtonExtended = {
          name: 'ClearButtonExtended',
          extends: ClearButton,
          methods: {
            clickHandler: this.clearHandler,
            clickHandler2: () => {
              this.buffer = 0
              this.input = 'C'
              this.$parent.$parent.$emit('app-modal-close')
            },
          },
        }
        this.$parent.$parent.$emit('app-modal-open', ClearButtonExtended)
      } else {
        this.buffer = 0
        this.input = '0'
      }
    },
    buttonTapHandling(e) {
      if (this.buffer === 0) {
        this.buffer = e
      } else if (this.buffer < 1000000) {
        this.buffer = parseInt('' + this.buffer + e)
      }
      this.input = this.buffer
    },
    clearHandler() {
      this.value = []
      this.result = []
      this.buffer = 0
      this.input = 0
      this.$parent.$parent.$emit('app-modal-close')
    },
  },
}
</script>
