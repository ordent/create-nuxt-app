// import CheveronLeft from '~/assets/icons/cheveron-left.svg?inline'

// import Vue from 'vue'
const getTitle = async (title) => {
  const AppTitle = (
    await import('~/components/App/Navigations/AppTitleInterface')
  ).default
  return {
    name: 'AppTitleExtended',
    extends: AppTitle,
    data() {
      return {
        title,
      }
    },
  }
}

const getLeftButton = async (url) => {
  const LeftButton = (
    await import('~/components/App/Navigations/LeftButtonInterface')
  ).default
  return {
    name: 'LeftButtonExtended',
    extends: LeftButton,
    data() {
      return {
        url,
      }
    },
  }
}

const getToggle = async (payload) => {
  const BurgerToggle = (
    await import('~/components/App/Navigations/BurgerToggleInterface.vue')
  ).default
  return {
    name: 'BurgerToggleExtended',
    extends: BurgerToggle,
    methods: {
      toggle: payload.toggle,
    },
  }
}

const getRightButton = async (payload) => {
  const PayButton = (await import('~/components/pages/Payment/PayButton.vue'))
    .default
  return {
    name: 'PayButtonExtended',
    extends: PayButton,
    data() {
      return {
        text: payload.text,
      }
    },
    methods: {
      open: payload.open,
    },
  }
}
const getBottomBar = async () => {
  const BottomBar = (await import('~/components/App/AppFooter.vue')).default
  return BottomBar
}
//
const startActivity = async (ctx, i, callback = false) => {
  ctx.page = i
  if (callback) {
    const result = await Promise.resolve(callback).catch((e) =>
      // eslint-disable-next-line no-console
      console.error(e)
    )
    result()
  }
}
const resolveHashPage = async (items = [], hash) => {
  const match = items.find((item) => item.hash === hash)
  // console.log(match, hash)
  const item = await Promise.resolve(match.page).catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e)
  })
  if (item.default) {
    return [item.default, match]
  }
  return [item, match]
}
const hashModule = async (context, items = []) => {
  const [item, match] = await resolveHashPage(items, context.$route.hash)
  await startActivity(context, item, match.callback)
  context.$router.afterEach(async (to) => {
    const [itemr, matchr] = await resolveHashPage(items, to.hash)
    await startActivity(context, itemr, matchr.callback)
  })
}
const hashActivity = async (
  context = false,
  visible = true,
  left = false,
  center = false,
  right = false
) => {
  const items = await Promise.all([left, center, right]).catch((e) =>
    // eslint-disable-next-line no-console
    console.error(e)
  )
  return () => {
    const [l, c, r] = items
    context.$store.commit('application/setHeader', {
      visible,
      left: l,
      center: c,
      right: r,
    })
  }
}
export {
  getTitle,
  getLeftButton,
  getRightButton,
  getToggle,
  hashModule,
  hashActivity,
  getBottomBar,
}
