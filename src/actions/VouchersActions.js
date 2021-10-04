import { VOUCHERS_CREATE, VOUCHERS_FETCH_SUCCESS, VOUCHERS_UPDATE } from './types';
import firebase from 'firebase';
import { navigate } from '../navigationRef';

export const vouchersUpdate = ({ prop, value }) => {
    return {
        type: VOUCHERS_UPDATE,
        payload: { prop, value }
    };
};

export const vouchersCreate = ({ discount, minBill }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/vouchers`)
            .push({ discount, minBill })
            .then(() => {
                dispatch({ type: VOUCHERS_CREATE });
            })
    };
};

export const vouchersFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {

        firebase.database().ref(`baseData/vouchers`)
            .on('value', snapshot => {
                dispatch({ type: VOUCHERS_FETCH_SUCCESS, payload: snapshot.val() })
            })
    };
};