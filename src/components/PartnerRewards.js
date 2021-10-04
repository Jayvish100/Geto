import React from "react";
import { Dimensions, TouchableOpacity, StyleSheet, View } from 'react-native';
import PartnerReward from '../assets/svg/PartnerRewards.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PartnerRewards = ({ onPress }) => {
    return (
            <TouchableOpacity onPress={onPress} >
                <PartnerReward height={windowHeight * 0.140} width={windowWidth * 1.000} />
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: windowHeight * .001,
    }
});


export default PartnerRewards;