import { GET_PRICE } from '../types/getPrice'
import { createAction } from 'redux-actions'
import { getLatest } from '@/request/api'

export const getPrice = createAction(GET_PRICE, () => {
  return getLatest()
})
