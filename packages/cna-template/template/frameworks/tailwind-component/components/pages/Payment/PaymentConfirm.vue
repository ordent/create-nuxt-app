<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 h-screen flex items-start justify-center bg-semi-75"
      style="z-index: 101"
    >
      <div class="relative card-modal-wrapper bg-white">
        <div class="flex flex-row">
          <button
            class="absolute top-0 close-button bg-transparent"
            aria-label="close"
            @click.prevent="close"
          >
            <h1 class="font-medium text-3xl">×</h1>
          </button>
          <a class="absolute top-0 right-0" @click="isPaid = true">
            <h1
              class="text-base px-8 py-6 bg-blue-700 text-white"
              style="letter-spacing: 0.5px"
            >
              Bayar
            </h1>
          </a>
        </div>
        <section
          class="is-content flex flex-col items-center justify-center h-full my-auto p-10"
        >
          <h2 class="text-2xl">Pembelanjaan</h2>
          <h1 v-if="withDiscount" class="font-bold text-4xl mb-20">
            {{ withDiscount }}
          </h1>
          <h1 v-else class="font-bold text-4xl mb-20">
            {{ total }}
          </h1>
          <h2 class="text-2xl text-blue-500">Dibayar</h2>
          <h1 class="font-bold text-4xl text-blue-500">{{ paid }}</h1>
        </section>
        <!-- <slot /> -->
      </div>

      <payment-paid :showing="isPaid" @close="isPaid = false" />
    </div>
  </Transition>
</template>

<script>
import { currencyFormatter } from '~/assets/js/utilities.js'
import PaymentPaid from '~/components/pages/Payment/PaymentPaid.vue'
export default {
  components: {
    PaymentPaid,
  },
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      isPaid: false,
    }
  },
  computed: {
    items() {
      return this.$store.state.transactions.result
    },
    total() {
      if (this.items.length > 0) {
        return currencyFormatter.format(
          this.$store.state.transactions.totalManual
        )
      } else
        return currencyFormatter.format(
          this.$store.state.transactions.totalCart.totalPrice
        )
    },
    paid() {
      return currencyFormatter.format(this.$store.state.transactions.cash)
    },
    discount() {
      return this.$store.state.transactions.totalDiscount
    },
    withDiscount() {
      if (this.discount) {
        return currencyFormatter.format(this.discount)
      }
      return null
    },
  },
  // mounted() {
  //   console.log(this.withDiscount)
  // },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.bg-semi-75 {
  background-color: rgba(0, 0, 0, 0.75);
}
.card-modal-wrapper {
  width: 100vw;
  height: 100%;
  padding: 2rem;
}
.card-modal-wrapper .close-button {
  left: 1rem;
  border: none;
  font-size: 26px;
  margin-right: 0.5rem !important;
  color: black;
  margin-top: 0.5rem;
  padding: 0 0.65rem;
}
.close-button:hover,
.close-button:focus {
  border-radius: 50%;
  background-color: rgba(211, 209, 209, 0.6);
  outline: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
