import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

export const addCount = (payload) => ({
    type: ADD_COUNT,
    payload
})

export const subCount = (payload) => ({
    type: SUB_COUNT,
    payload
})