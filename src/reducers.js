import { combineReducers } from 'redux'

let tabs = (state = [], action) => {
    switch (action.type) {
        default:
            return state
    }
}

const sampleApp = combineReducers({
    tabs
})

export default sampleApp