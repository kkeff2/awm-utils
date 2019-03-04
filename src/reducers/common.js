import {
  UPDATE_COMMON_APP_VALUE,
} from '../constants/actionTypes'

const initialState = {
  commonAppValue: 'halloj',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_COMMON_APP_VALUE: {
      return {
        ...state,
        commonAppValue: action.commonAppValue
      }
    }
    default: {
      return state
    }
  }
}
