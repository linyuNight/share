import * as types from './mutation-types'

const mutations = {
  [types.SET_ISSHOWMASK](state, isShowMask) {
    state.isShowMask = isShowMask
  },
  [types.SET_ISSHOWADDRESSLIST](state, flag) {
    state.isShowAddressList = flag
  }
}

export default mutations