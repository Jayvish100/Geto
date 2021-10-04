import { PLEDGE_CREATE, PLEDGE_FETCH_SUCCESS, PLEDGE_UPDATE } from './types';
import firebase from 'firebase';
import { navigate } from '../navigationRef';

export const pledgeUpdate = ({ prop, value }) => {
    return {
        type: PLEDGE_UPDATE,
        payload: { prop, value }
    };
};

export const pledgeCreate = ({ pledgeCost, pledgeDescription }) => {
    const { currentUser } = firebase.auth();
    console.log(currentUser);
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/pledges`)
            .push({ pledgeCost, pledgeDescription })
            .then(() => {
                dispatch({ type: PLEDGE_CREATE });
                navigate('Dash');
            })
    };
};

export const pledgeFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`baseData/pledges`)
            .on('value', snapshot => {
                dispatch({ type: PLEDGE_FETCH_SUCCESS, payload: snapshot.val() })
            })
    };
};