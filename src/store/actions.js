import * as types from './mutation-types'

export const setIsShowMask = function ({commit}) {
  commit(types.SET_ISSHOWMASK, true)
  let timer = setTimeout(() => {
    commit(types.SET_ISSHOWMASK, false)
    clearTimeout(timer)
  },2000)
}

export const showAddressList = function ({commit}) {                 
  commit(types.SET_ISSHOWADDRESSLIST, true)
}

export const hideAddressList = function ({commit}) {
  commit(types.SET_ISSHOWADDRESSLIST, false)
}