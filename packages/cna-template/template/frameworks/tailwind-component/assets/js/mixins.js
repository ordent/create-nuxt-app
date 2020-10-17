import { convertPropertiesToResponsiveCSS } from './utilities.js'
const bg = {
  props: {
    isButton: {
      type: Boolean,
      default() {
        return false
      },
    },
    background: {
      type: [String],
      default() {
        return 'red'
      },
    },
  },
  computed: {
    bg() {
      const list = ['transparent', 'black', 'white', 'current']
      if (
        this.background.slice(-1) !== 0 &&
        !list.includes(this.background) &&
        this.background.includes('-')
      ) {
        return `bg-${this.background}`
      } else if (
        this.background.slice(-1) !== 0 &&
        !list.includes(this.background)
      ) {
        const button = this.isButton
          ? `hover:bg-${this.background}-800 active:bg-${this.background}-900 focus:shadow-outline`
          : ''
        return `bg-${this.background}-700 ${button}`
      }
      return `bg-${this.background}`
    },
  },
}
const cl = {
  props: {
    color: {
      type: String || Object,
      default() {
        return 'white'
      },
    },
  },
  computed: {
    cl() {
      const list = ['transparent', 'black', 'white', 'current']
      if (
        this.color.slice(-1) !== 0 &&
        !list.includes(this.color) &&
        this.color.includes('-')
      ) {
        return `text-${this.color}`
      } else if (this.color.slice(-1) !== 0 && !list.includes(this.color)) {
        return `text-${this.color}-500`
      }
      return `text-${this.color}`
    },
  },
}
const clf = (val = false) => {
  return {
    props: {
      color: {
        type: String || Object,
        default() {
          return val || 'white'
        },
      },
    },
    computed: {
      cl() {
        const list = ['transparent', 'black', 'white', 'current']
        if (this.color.slice(-1) !== 0 && !list.includes(this.color)) {
          return `text-${this.color}-500`
        }
        return `text-${this.color}`
      },
    },
  }
}
const bd = {
  props: {
    border: {
      type: [String, Boolean],
      default() {
        return 'gray'
      },
    },
  },
  computed: {
    bd() {
      const list = ['transparent', 'black', 'white', 'current']
      if (!list.includes(this.border)) {
        return `border border-solid border-${this.border}-500`
      }
      return `border border-solid border-${this.border}`
    },
  },
}
const op = {
  props: {
    opacity: {
      type: String || Number,
      default() {
        return '100'
      },
    },
  },
  computed: {
    op() {
      return `bg-opacity-${this.opacity}`
    },
  },
}
const wg = {
  props: {
    weight: {
      type: String,
      default() {
        return 'medium'
      },
    },
  },
  computed: {
    wg() {
      return `font-${this.weight}`
    },
  },
}
const rd = {
  props: {
    radius: {
      type: String || Number || Object,
      default() {
        return 'sm'
      },
    },
  },
  computed: {
    rd() {
      if (this.radius !== '') {
        return `rounded-${this.radius}`
      }
      return 'rounded'
    },
  },
}
const sd = {
  props: {
    shadow: {
      type: String || Number || Object,
      default() {
        return 'none'
      },
    },
  },
  computed: {
    sd() {
      if (this.shadow !== '') {
        return `shadow-${this.shadow}`
      }
      return 'shadow-none'
    },
  },
}
const w = {
  props: {
    width: {
      type: [String, Array],
      default() {
        return 'full'
      },
    },
  },
  computed: {
    w() {
      if (Array.isArray(this.width)) {
        const result = convertPropertiesToResponsiveCSS(this.width, 'w')
        return result
      }
      return `w-${this.width}`
    },
  },
}
const d = {
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    d() {
      return this.disabled
        ? 'opacity-50 cursor-not-allowed focus:outline-none line-through'
        : ''
    },
  },
}
const b = {
  props: {
    big: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    b() {
      return this.big ? `text-xl py-2 px-4` : ``
    },
  },
}
export { bg, b, d, w, cl, op, rd, wg, bd, clf, sd }
