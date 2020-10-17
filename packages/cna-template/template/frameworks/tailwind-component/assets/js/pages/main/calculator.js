import { currencyFormatter } from '~/assets/js/utilities.js'
import { ClearButton } from '~/components/pages/Main'
const CalculatorMixin = {
  data() {
    return {
      height: '100px',
      input: false,
      buffer: 0,
      value: [],
      result: [], // {value: 1000, notes: '123123', quantity: 1, taxes: 10%}
      notes: '',
    }
  },
  computed: {
    totalItem() {
      const val = parseInt(this.buffer)
      if (this.value.length > 0 && Number.isInteger(val) && val !== 0) {
        return this.value.length + 1
      } else if (
        this.value.length > 0 &&
        (!Number.isInteger(val) || (Number.isInteger(val) && val === 0))
      ) {
        return this.value.length
      } else if (
        this.value.length === 0 &&
        Number.isInteger(val) &&
        val !== 0
      ) {
        return 1
      }
      return 0
    },
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
  methods: {
    buttonPlusHandling(e) {
      if (this.buffer > 0) {
        this.value.push(parseInt(this.buffer))
        this.result.push({
          value: parseInt(this.buffer),
          notes: this.notes,
          quantity: 1,
          taxes: [],
        })
        this.buffer = 0
        this.input = 'C'
      }
    },
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
        this.input = 'C'
      }
    },
    buttonTapHandling(e) {
      if (this.buffer === 0) {
        this.buffer = e
      } else if (this.buffer < 1000000000) {
        this.buffer = parseInt('' + this.buffer + e)
      }
      this.input = this.buffer
    },
    async notesHandling(e) {
      const notes = (await require('~/components/pages/Main/ItemNotes.vue'))
        .default
      const that = this
      const notesExtended = {
        name: 'NotesExtended',
        extends: notes,
        methods: {
          buttonCloseHandling: this.notesCloseHandling,
          buttonSubmitHandling() {
            that.notes = this.notes
            that.notesCloseHandling()
          },
        },
      }
      this.$parent.$parent.$emit('app-bottom-open', notesExtended)
    },
    clearHandler() {
      this.value = []
      this.result = []
      this.buffer = 0
      this.input = 'C'
      this.$parent.$parent.$emit('app-modal-close')
    },
    notesCloseHandling() {
      this.$parent.$parent.$emit('app-bottom-close')
    },
    totalHandling() {
      this.buttonPlusHandling(null)
      this.$store.commit('transactions/storeResult', this.result)
      this.$router.push('/transactions')
    },
  },
}

export { CalculatorMixin }
