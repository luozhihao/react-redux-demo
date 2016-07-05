import { INCREASE, DECREASE } from '../../constants'

const initialState = {
    number: 1,
    lists: [{text: '111'}, {text: '222'}]
}

export default function update(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return { number: state.number + action.amount }
            break
        case DECREASE:
            return { number: state.number - action.amount }
            break
        default:
            return state
    }
}
