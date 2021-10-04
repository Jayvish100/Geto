import { PROFILE_FETCH_SUCCESS, LOGOUT } from './types';
import firebase from 'firebase';
import { navigate } from '../navigationRef';

// export const pledgeUpdate = ({ prop, value }) => {
//     return {
//         type: PLEDGE_UPDATE,
//         payload: { prop, value }
//     };
// };

// export const pledgeCreate = ({ pledgeCost, pledgeDescription }) => {
//     const { currentUser } = firebase.auth();
//     console.log(currentUser);
//     return (dispatch) => {
//         firebase.database().ref(`users/${currentUser.uid}/pledges`)
//             .push({ pledgeCost, pledgeDescription })
//             .then(() => {
//                 dispatch({ type: PLEDGE_CREATE });
//                 navigate('Dash');
//             })
//     };
// };

export const profileFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/profile`)
            .on('value', snapshot => {
                dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() })
            })
    };
};

export const logout = () => {

    return (dispatch) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: LOGOUT });
                navigate('loginFlow');
            })
    }
}