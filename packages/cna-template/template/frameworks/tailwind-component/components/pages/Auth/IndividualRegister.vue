<template>
  <div class="is-component-wrapper w-full flex flex-col justify-start">
    <app-form>
      <h2>Daftar mudah di Gerai</h2>
      <p>Yuk daftar untuk dapatkan kemudahan dalam mengelola toko anda.</p>
      <!-- HARUSNYA TAMBAHKAN INFORMASI BENEFIT APA SAJA -->
      <h4>Identitas Akun</h4>
      <app-input
        id="email"
        v-model.trim="$v.email.$model"
        label="Silahkan masukkan email Anda"
        :error="$v.email.$error"
        @blur="handleCheckEmailExist"
      ></app-input>
      <app-input
        id="password"
        v-model.trim="$v.password.$model"
        type="password"
        label="Buat password"
        help="Minimum 6 karakter"
        :error="$v.password.$error"
      ></app-input>
      <app-input
        id="passwordConfirmation"
        v-model.trim="$v.passwordConfirmation.$model"
        type="password"
        label="Ulangi password"
        help="Harus sama dengan kolom password."
        :error="$v.passwordConfirmation.$error"
      ></app-input>
      <h4>Informasi Diri</h4>
      <app-input
        id="name"
        v-model.trim="$v.name.$model"
        label="Nama lengkap"
        :error="$v.name.$error"
      >
      </app-input>
      <app-input
        id="phone"
        v-model.trim="$v.phone.$model"
        label="Nomor telepon yang bisa dihubungi"
        prefix="+62"
        :error="$v.phone.$error"
      >
      </app-input>
      <app-button background="blue" class="py-2 mt-8" @click="handleSubmit">
        Daftar
      </app-button>
      <p class="mt-2 text-center">
        Sudah punya akun?
        <nuxt-link to="/auth/login" class="text-red-400">
          Login disini
        </nuxt-link>
      </p>
    </app-form>
  </div>
</template>

<script>
import { RegisterMixin } from '~/assets/js/users.js'
import { AppButton, AppInput, AppForm } from '~/components/Form'

export default {
  components: {
    AppInput,
    AppForm,
    AppButton,
  },
  mixins: [RegisterMixin],
  data() {
    return {}
  },
  mounted() {
    if (!this.$route.query.company) {
      this.$router.push('/auth/register')
    }
  },
  methods: {},
}
</script>
