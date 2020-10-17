import {
  required,
  minLength,
  numeric,
  email,
  sameAs,
} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import { Model } from '~/assets/js/model'

export const checkEmailExist = (item, context) => {
  if (!item.error) {
    // check to api
  }
  return false
}
export const register = async (context) => {
  context.$v.$touch()
  if (!context.emailFlag && !context.$v.$invalid) {
    const user = new User({
      email: context.$v.email.$model,
      password: context.$v.password.$model,
      passwordConfirmation: context.$v.passwordConfirmation.$model,
      name: context.$v.name.$model,
      phone: context.$v.phone.$model,
    })
    const result = await context.$store.dispatch(
      'users/register',
      user.getState()
    )
    return result
  }
}

export const login = (context) => {
  context.$v.$touch()
  if (!context.$v.$invalid) {
    // login
    // const result = await context.$store.dispatch(
    //   'users/register',
    //   user.getState()
    // )
    return false
  }
}

export const forgot = (context) => {
  context.$v.$touch()
  if (!context.$v.$invalid) {
    // forgot
    return false
  }
}

export const change = (context) => {
  context.$v.$touch()
  if (!context.$v.$invalid) {
    // change
    return false
  }
}

export class User extends Model {
  constructor({ email, password, passwordConfirmation, name, phone }) {
    super({
      email,
      password,
      passwordConfirmation,
      name,
      phone,
    })
  }
}

export const RegisterMixin = {
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
      passwordConfirmation: '',
      name: '',
      phone: '',
      emailFlag: false,
    }
  },
  methods: {
    handleSubmit() {
      register(this)
    },
    async handleCheckEmailExist(e) {
      this.emailFlag = await checkEmailExist(e, this)
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    email: {
      required,
      minLength: minLength(4),
      email,
    },
    phone: {
      required,
      minLength: minLength(6),
      numeric,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    passwordConfirmation: {
      required,
      minLength: minLength(6),
      sameAs: sameAs('password'),
    },
  },
}

export const ForgotMixin = {
  mixins: [validationMixin],
  data() {
    return {
      password: '',
      passwordConfirmation: '',
    }
  },
  methods: {
    handleSubmit() {
      forgot(this)
    },
  },
  validations: {
    email: {
      required,
      minLength: minLength(4),
      email,
    },
  },
}

export const LoginMixin = {
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      login(this)
    },
  },
  validations: {
    email: {
      required,
      minLength: minLength(4),
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
}

export const ChangeMixin = {
  mixins: [validationMixin],
  data() {
    return {
      email: '',
    }
  },
  methods: {
    handleSubmit() {
      change(this)
    },
  },
  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    passwordConfirmation: {
      required,
      minLength: minLength(6),
      sameAs: sameAs('password'),
    },
  },
}
