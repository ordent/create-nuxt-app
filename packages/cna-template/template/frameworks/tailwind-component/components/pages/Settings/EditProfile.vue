<template>
  <div
    class="is-component-wrapper w-full flex flex-col text-left justify-center py-8"
  >
    <app-form class="px-8">
      <app-input
        id="email"
        v-model.trim="$v.email.$model"
        label="Email"
        type="email"
        class="mb-6"
      />
      <app-input
        id="password"
        v-model.trim="$v.password.$model"
        :error="$v.email.$error"
        label="Current Password"
        type="password"
        edit="Edit"
        url="/settings/edit-password"
        class="mb-6"
      />
    </app-form>
    <section id="bottom-section">
      <div class="flex items-center justify-center">
        <app-button
          width="1/2"
          background="red"
          color="white"
          class="mt-6 py-2"
          @click="logout"
        >
          <span class="inline-flex items-center">
            <sad-icon
              class="w-4 h-4 text-white fill-current flex-grow-0 mr-2"
            />
            Keluar Akun
          </span>
        </app-button>
      </div>
    </section>
  </div>
</template>

<script>
import { LoginMixin } from '~/assets/js/users.js'
import { AppButton, AppInput, AppForm } from '~/components/Form'
import SadIcon from '~/assets/icons/mood-sad-solid.svg?inline'
export default {
  components: {
    AppInput,
    AppForm,
    AppButton,
    SadIcon,
  },
  mixins: [LoginMixin],
  mounted() {},
  methods: {
    logout() {},
  },
}
</script>

<style scoped>
#bottom-section {
  background: #3a3a3a;
  min-height: 120px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
