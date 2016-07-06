import { INCREASE, DECREASE, LOADDATA } from '../../constants'
import 'whatwg-fetch'

const initialState = {
    number: 1,
    lists: [{text: '111'}, {text: '222'}],
    data: []
}

export default function update(state = initialState, action) {
    switch(action.type) {
        case INCREASE:
            return Object.assign({}, state, { number: state.number + action.amount })
            break
        case DECREASE:
            return Object.assign({}, state, { number: state.number - action.amount })
            break
        case LOADDATA:
            let obj = fetch('data.json')
                .then((res) => { console.log(res.status); return res.json() })
                .then((data) => {
                    return Object.assign({}, state, { data: data.listData })
                })
                .catch((e) => { console.log(e.message) })

            console.log(obj)
            return  obj
            break
        default:
            return state
    }
}