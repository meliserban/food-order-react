import {create} from 'zustand'
import {orderReducer} from "./reducers/orderReducer";

export const useOrderStore = create(set => ({
    count: 1,
    inc: (amount) => {
        set(state => (
            {
                count: orderReducer(
                    state.count,
                    { type: 'add', amount: amount }
                )
            }
        ))
    },
}))