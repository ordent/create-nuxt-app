<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="fixed inset-0 h-screen flex items-start justify-center bg-semi-75"
      style="z-index: 101"
    >
      <div class="relative card-modal-wrapper bg-white">
        <section
          class="is-content flex flex-col items-center justify-center h-full my-auto p-10"
        >
          <img src="/icons/check-mark.png" class="mb-8" style="width: 150px" />
          <div class="is-paid-amount flex flex-col items-center pb-10">
            <h2 class="text-3xl font-bold">Selesai</h2>
            <h2 v-if="discount" class="text-3xl text-blue-500">
              {{ formattedDiscount }}
            </h2>
            <h2 v-else class="text-3xl text-blue-500">{{ formattedTotal }}</h2>
          </div>
          <div
            class="is-change flex flex-col bg-gray-300 py-4 px-16 mb-8 items-center"
          >
            <span>Kembalian</span>
            <h2 class="text-3xl">{{ formattedChange }}</h2>
          </div>
          <nuxt-link
            class="w-full flex justify-center"
            to="/transactions/receipt"
          >
            <app-button
              big
              radius="lg"
              background="white"
              border="blue"
              color="blue"
              class="mb-12"
              style="padding: 0.5rem; width: 85%"
            >
              <span class="text-lg tracking-wide"> Lihat Bon </span>
            </app-button>
          </nuxt-link>
          <app-link
            class="mx-6 text-center items-center"
            background="white"
            color="blue"
            flex
            url="/main"
          >
            <span class="text-lg underline" style="letter-spacing: 0.5px">
              Transaksi Baru
            </span>
          </app-link>
        </section>
        <!-- <slot /> -->
      </div>
    </div>
  </Transition>
</template>

<script>
import { currencyFormatter } from '~/assets/js/utilities.js'
import AppButton from '~/components/Form/AppButton.vue'
import AppLink from '~/components/Form/AppLink.vue'
export default {
  components: {
    AppButton,
    AppLink,
  },
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      formattedTotal: 0,
      formattedDiscount: 0,
      formattedChange: 0,
    }
  },
  computed: {
    items() {
      return this.$store.state.transactions.result
    },
    total() {
      if (this.items.length > 0) {
        return this.$store.state.transactions.totalManual
      } else return this.$store.state.transactions.totalCart.totalPrice
    },
    discount() {
      if (this.$store.state.transactions.totalDiscount) {
        return this.$store.state.transactions.totalDiscount
      }
      return null
    },
    paid() {
      return this.$store.state.transactions.cash
    },
    change() {
      if (this.discount) {
        if (this.paid > this.discount) {
          return this.paid - this.discount
        }
      } else if (this.paid > this.total) {
        return this.paid - this.total
      }
      return 0
    },
  },
  mounted() {
    window.asdf = this
    this.formattedTotal = currencyFormatter.format(this.total)
    this.formattedDiscount = currencyFormatter.format(this.discount)
    this.formattedChange = currencyFormatter.format(this.change)
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
  padding: 1rem;
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
