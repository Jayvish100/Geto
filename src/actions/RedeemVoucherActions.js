import { REDEEM_VOUCHERS_CREATE, REDEEM_VOUCHERS_FETCH_SUCCESS, REDEEM_VOUCHERS_UPDATE } from './types';
import firebase from 'firebase';
import { navigate } from '../navigationRef';

export const redeemVoucherUpdate = ({ prop, value }) => {
    return {
        type: REDEEM_VOUCHERS_UPDATE,
        payload: { prop, value }
    };
};

export const redeemVoucherCreate = ({ activeVouchers, rewardBalance }) => {
    const { currentUser } = firebase.auth();
    console.log(currentUser);
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/redeemVoucher`)
            .push({ activeVouchers, rewardBalance })
            .then(() => {
                dispatch({ type: REDEEM_VOUCHERS_CREATE });
            })
    };
};

export const redeemVoucherFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/redeemVoucher`)
            .on('value', snapshot => {
                dispatch({ type: REDEEM_VOUCHERS_FETCH_SUCCESS, payload: snapshot.val() })
            })
    };
};