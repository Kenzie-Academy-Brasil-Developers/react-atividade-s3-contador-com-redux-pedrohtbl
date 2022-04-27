import { ADD_COUNT,SUB_COUNT } from "./actionTypes"

const reducerCounter = (state = 0, action) =>{
    console.log(action)

    switch (action.type){
        case ADD_COUNT:
            return state + action.payload

        case SUB_COUNT:
            return state - action.payload

        default:
            return state
    }
}

export default reducerCounter