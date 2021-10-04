import { PROFILE_UPDATE, PROFILE_SAVE_SUCCESS } from './types';
import firebase from 'firebase';
import { navigate } from '../navigationRef';

export const profileUpdate = ({ prop, value }) => {
    return {
        type: PROFILE_UPDATE,
        payload: { prop, value }
    };
};

// export const profileCreate = ({ name, email, mobile, address1, address2, city, state, pincode }) => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`users/${currentUser.uid}/profile`)
//             .push({ name, email, mobile, address1, address2, city, state, pincode })
//             .then(() => {
//                 dispatch({ type: PROFILE_CREATE });
//                 navigate('EmpList');
//             })
//     };
// };

// export const profileFetch = () => {
//     const { currentUser } = firebase.auth();

//     return (dispatch) => {
//         firebase.database().ref(`users/${currentUser.uid}/profile`)
//             .on('value', snapshot => {
//                 dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() })
//             })
//     };
// };

export const profileSave = ({ name, email, mobile, address1, address2, city, states, pincode, uid, pop }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/profile/${uid}`)
            .set({ name, email, mobile, address1, address2, city, states, pincode })
            .then(()=> {
                dispatch({ type: PROFILE_SAVE_SUCCESS });
                pop;
            });
    };
};




// export const employeeDelete = ({ uid }) => {
//     const { currentUser } = firebase.auth();

//     return () => {
//         firebase.database().ref(`users/${currentUser.uid}/profile/${uid}`)
//             .remove()
//             .then(() => {
//                 navigate('Prof');
//             });
//     };
// };