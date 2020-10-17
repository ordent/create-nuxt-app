<template>
  <div
    draggable="false"
    class="is-component-wrapper min-h-screen w-full max-w-full overflow-x-hidden overflow-y-hidden relative"
  >
    <div class="shadow-screen w-full min-h-screen" :class="classesShadow"></div>
    <div
      class="off-screen-left w-3/4 bg-blue-500 min-h-screen absolute z-10"
      :class="classesLeft"
      style="top: 60px"
    >
      <component :is="activeLeft">
        <div class="mt-10 mx-4">
          <app-button
            v-for="data in menu"
            :key="data.link"
            v-model="menu.goTo"
            background="none"
            color="white"
            border="none"
            block
            class="py-4"
            style="text-align-last: start"
            @click="menuAction"
          >
            <nuxt-link class="text-xl" :to="data.goTo">
              {{ data.link }}
            </nuxt-link>
          </app-button>
        </div>
      </component>
    </div>
    <div
      class="main-screen w-full min-h-screen flex flex-col justify-start items-stretch"
      :class="`${bg}`"
    >
      <slot />
    </div>
    <div
      class="off-screen-right w-1/2 bg-green-500 min-h-screen absolute top-0"
    ></div>
    <div
      class="off-screen-bottom absolute w-full bg-white min-h-screen"
      :class="classesBottom"
    >
      <component :is="activeBottom" />
    </div>
    <modal
      name="app"
      :width="'90%'"
      :min-height="100"
      :adaptive="true"
      classes="is-modal-app"
    >
      <component :is="activeModal" />
    </modal>
    <!-- <modal
      name="app"
      :width="'90%'"
      :min-height="100"
      :adaptive="true"
      class="menu-toggle off-screen-left"
      classes="is-modal-app"
    >
      <component :is="activeModal" />
    </modal> -->
  </div>
</template>

<style scoped>
.off-screen-left {
  left: -100%;
}
.off-screen-right {
  right: -50%;
}
.off-screen-bottom {
  background: white;
  /* top: 0; */
  top: 100%;
  transition: all 0.2s ease-in;
}
.off-screen-bottom.is-active-bottom {
  top: 0;
  transition: all 0.3s ease-in;
}
.off-screen-left.is-active-left {
  left: 0;
  transition: all 0.3s ease-in;
}
.is-modal-app {
  position: absolute !important;
  /* top: 60px !important; */
  bottom: 5% !important;
  border-radius: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}
.shadow-screen {
  background: black;
  opacity: 0;
  position: absolute;
  top: 0;
  display: none;
  transition: all 0.2s ease-in;
}
.shadow-screen.is-active-shadow {
  opacity: 0.5;
  display: block;
  transition: all 0.3s ease-in;
}

/* .menu-toggle.vm--container .vm--modal {
  left: 0 !important;
  width: 70% !important;
  height: 100vh !important;
}
.menu-toggle.vm--container .vm--overlay {
  background: none !important;
} */
.bg-red-700 {
  background: #2b6cb0 !important;
}
</style>

<script>
import { bg } from '~/assets/js/mixins.js'
import AppHeader from '~/components/App/AppHeader.vue'
import AppButton from '~/components/Form/AppButton.vue'
export default {
  components: {
    AppHeader,
    AppButton,
  },
  mixins: [bg],
  props: {
    background: {
      type: [String],
      default() {
        return 'red'
      },
    },
    // link: {
    //   type: [String],
    //   default() {
    //     return 'Default Menu'
    //   },
    // },
    activeModal: {
      type: [Object, Boolean],
      default() {
        return false
      },
    },
    activeBottom: {
      type: [Object, Boolean],
      default() {
        return false
      },
    },
    activeLeft: {
      type: [Object, Boolean],
      default() {
        return false
      },
    },
  },
  data() {
    return {
      classesBottom: '',
      classesLeft: '',
      classesShadow: '',
      menu: [
        {
          goTo: '/main/products',
          link: 'Penjualan',
        },
        {
          goTo: '/accountancy',
          link: 'Pembukuan',
        },
        {
          goTo: '/customer',
          link: 'Customer',
        },
      ],
    }
  },
  computed: {
    bgl() {
      const list = ['transparent', 'black', 'white', 'current']
      if (this.background.slice(-1) !== 0 && !list.includes(this.background)) {
        const button = this.isButton
          ? `hover:bg-${this.background}-800 active:bg-${this.background}-900 focus:shadow-outline`
          : ''
        return `bg-${this.background}-700 ${button}`
      }
      return `bg-${this.background}`
    },
  },
  watch: {
    activeModal(n) {
      if (n) {
        this.$modal.show('app')
      } else {
        this.$modal.hide('app')
      }
    },
    activeBottom(n) {
      if (n) {
        this.classesBottom = 'is-active-bottom'
        this.classesShadow = 'is-active-shadow'
      } else {
        this.classesBottom = ''
        this.classesShadow = 'test'
      }
    },
    activeLeft(n) {
      if (n) {
        this.classesLeft = 'is-active-left'
        this.classesShadow = 'is-active-shadow'
      } else {
        this.classesLeft = ''
        this.classesShadow = 'test'
      }
    },
  },
  methods: {
    menuAction() {
      // console.log('baba', this.menu.goTo)
      // this.$router.push(`/${this.menu.goTo}`)
      this.classesLeft = ''
      this.classesShadow = 'test'
      this.$store.commit('application/setToggle', false)
    },
  },
}
</script>
