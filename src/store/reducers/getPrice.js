import { handleActions } from 'redux-actions'
import { GET_PRICE } from '../types/getPrice'

export default handleActions({
  [GET_PRICE] (state, action) {
    return {
      ...state,
      priceList: action.payload.data
    }
  }
}, {
  priceList: {}
})
