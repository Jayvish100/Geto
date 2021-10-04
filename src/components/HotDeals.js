import React from "react";
import { Dimensions, TouchableOpacity, StyleSheet, View } from 'react-native';
import HotDeal from '../assets/svg/HotDeals.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HotDeals = () => {
    return (
        <View>
            <HotDeal height={windowHeight * 0.325} width={windowWidth * 1.000} />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: windowHeight * .001,
        borderWidth: 1,
        flex: 1
    }
});


export default HotDeals;