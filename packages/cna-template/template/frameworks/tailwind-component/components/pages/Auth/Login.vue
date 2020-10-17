<template>
  <div class="is-component-wrapper w-full flex flex-col justify-start">
    <app-form>
      <p class="mt-4 text-center">
        Belum punya akun?
        <nuxt-link to="/auth/register" class="text-red-400"
          >Register disini.
        </nuxt-link>
      </p>
      <app-input
        id="email"
        v-model.trim="$v.email.$model"
        label="Email"
        type="email"
        :error="$v.email.$error"
        @blur="handleCheckEmailExist"
      />
      <app-input
        id="password"
        v-model.trim="$v.password.$model"
        :error="$v.email.$error"
        label="Password"
        type="password"
        help="Minimum 6 karakter"
      />
      <app-button background="blue" class="py-2" @click="handleSubmit">
        Masuk
      </app-button>
      <p class="text-center mt-4">
        <nuxt-link to="/auth/forgot" class="text-gray-600"
          >Lupa Password</nuxt-link
        >
      </p>
    </app-form>
  </div>
</template>

<script>
import { LoginMixin } from '~/assets/js/users.js'
import { AppButton, AppInput, AppForm } from '~/components/Form'
export default {
  components: {
    AppInput,
    AppForm,
    AppButton,
  },
  mixins: [LoginMixin],
  mounted() {},
}
</script>
