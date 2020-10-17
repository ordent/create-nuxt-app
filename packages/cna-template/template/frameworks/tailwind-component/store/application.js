export const state = () => ({
  navigations: [
    { content: 'x', url: '/' },
    { content: 'x', url: '/' },
    { content: 'x', url: '/' },
    { content: 'x', url: '/' },
  ],
  headerVisibility: true,
  leftHeader: false,
  centerHeader: false,
  rightHeader: false,
  footerVisibility: false,
  notificationVisibility: false,
  modal: '',
  toggle: false,
})

export const mutations = {
  setToggle(state, payload) {
    state.toggle = payload
  },
  setNotification(state, payload) {
    state.notificationVisibility = payload
  },
  setHeader(state, { visible, left, center, right }) {
    if (visible !== null) {
      state.headerVisibility = visible
    }
    if (left !== null) {
      state.leftHeader = left
    }
    if (center !== null) {
      state.centerHeader = center
    }
    if (right !== null) {
      state.rightHeader = right
    }
  },
}
