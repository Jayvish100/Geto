import { VOUCHERS_CREATE, VOUCHERS_UPDATE, VOUCHERS_FETCH_SUCCESS } from "../actions/types";


const INITIAL_STATE = {
    discount: '',
    minBill: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VOUCHERS_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };
        case VOUCHERS_CREATE:
            return INITIAL_STATE;
        // case VOUCHERS_FETCH_SUCCESS:
        //     return INITIAL_STATE;
        default:
            return state;
    };
};