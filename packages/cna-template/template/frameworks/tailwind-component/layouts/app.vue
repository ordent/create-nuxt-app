<template>
  <div class="is-layout-wrapper flex items-stretch min-h-screen">
    <app-container
      background="white"
      :active-modal="activeModal"
      :active-bottom="activeBottom"
      :active-left="activeLeft"
    >
      <app-header v-if="headerVisibility" background="blue" color="white">
        <template slot="leftButton">
          <component :is="leftHeader" v-if="leftHeader" />
        </template>
        <component :is="centerHeader" v-if="centerHeader" />
        <!-- <template slot="centerHeader"> -->
        <template slot="rightButton">
          <component :is="rightHeader" v-if="rightHeader" />
        </template>
      </app-header>
      <div
        class="body-wrapper min-h-screen flex flex-col pt-12"
        :class="footerVisibility ? 'pb-12' : ''"
      >
        <app-notification v-if="notificationVisibility" background="gray-600">
          <component :is="notificationVisibility" />
        </app-notification>
        <div class="content-wrapper flex-grow flex">
          <Nuxt
            @app-modal-open="appModalOpen"
            @app-modal-close="appModalClose"
            @app-bottom-open="appBottomOpen"
            @app-bottom-close="appBottomClose"
            @app-left-open="appLeftOpen"
            @app-left-close="appLeftClose"
          />
        </div>
      </div>
      <app-footer
        v-if="footerVisibility"
        background="white"
        color="gray"
        :navigations="navigations"
      ></app-footer>
    </app-container>
  </div>
</template>

<script>
import AppContainer from '~/components/App/AppContainer.vue'
import AppHeader from '~/components/App/AppHeader.vue'
import AppFooter from '~/components/App/AppFooter.vue'
import AppNotification from '~/components/App/AppNotification.vue'
export default {
  components: {
    AppContainer,
    AppHeader,
    AppFooter,
    AppNotification,
  },
  data() {
    return {
      activeComponent: null,
      activeModal: false,
      activeBottom: false,
      activeLeft: false,
    }
  },
  computed: {
    navigations() {
      return this.$store.state.application.navigations
    },
    headerVisibility() {
      return this.$store.state.application.headerVisibility
    },
    footerVisibility() {
      return this.$store.state.application.footerVisibility
    },
    notificationVisibility() {
      return this.$store.state.application.notificationVisibility
    },
    leftHeader() {
      return this.$store.state.application.leftHeader
    },
    rightHeader() {
      return this.$store.state.application.rightHeader
    },
    centerHeader() {
      return this.$store.state.application.centerHeader
    },
  },
  mounted() {
    // check auth for footer
    // if auth false send out registration confirmation
    // this.activeComponent = () =>
    //   import('~/components/Notification/RegisterNotification')
  },
  methods: {
    appModalOpen(e) {
      this.activeModal = e
    },
    appBottomOpen(e) {
      this.activeBottom = e
    },
    appBottomClose(e) {
      this.activeBottom = null
    },
    appLeftOpen(e) {
      this.activeLeft = e
    },
    appLeftClose(e) {
      this.activeLeft = null
    },
    appModalClose(e) {
      this.activeModal = null
    },
  },
}
</script>

<style></style>
