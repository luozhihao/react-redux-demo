import { INCREASE, DECREASE, GETSUCCESS, REFRESHDATA } from '../../constants'
import 'whatwg-fetch'  // 引入fetch

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

export const refreshData = () => {
    return {
        type: REFRESHDATA
    }
}

export const getSuccess = (json) => {
    return {
        type: GETSUCCESS,
        json
    }
}

function fetchPosts(subreddit) {
    return dispatch => {
        return fetch('data.json')
            .then((res) => { console.log(res.status); return res.json() })
            .then((data) => {
                dispatch(getSuccess(data))
            })
            .catch((e) => { console.log(e.message) })
        }
}

export function fetchPostsIfNeeded() {

    // 注意这个函数也接收了 getState() 方法
    // 它让你选择接下来 dispatch 什么。

    // 当缓存的值是可用时，
    // 减少网络请求很有用。

    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}

