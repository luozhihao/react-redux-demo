import { INCREASE, DECREASE, LOADDATA } from '../../constants'

export const increase = n => {
    return {
        type: INCREASE,
        amount: n
    }
}

export const decrease = n => {
    return {
        type: DECREASE,
        amount: n
    }
}

export const getData = () => {
    return {
        type: LOADDATA
    }
}
