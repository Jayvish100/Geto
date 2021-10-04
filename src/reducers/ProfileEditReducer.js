import { PROFILE_UPDATE, PROFILE_CREATE, PROFILE_SAVE_SUCCESS, GO_BACK } from "../actions/types";


const INITIAL_STATE = {
    name: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    city: '',
    states: '',
    pincode: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value };
        case PROFILE_CREATE:
            return INITIAL_STATE;
        case PROFILE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    };
};