import React from "react";
import { Dimensions, Text, StyleSheet, View } from 'react-native';
import Redeem from '../assets/svg/Redeem.svg';
import Group389 from '../assets/svg/Group 389.svg';
import Group390 from '../assets/svg/Group 390.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RedeemVouchers = ({ activeVouchers, rewardBalance }) => {
    return (
        <View style={styles.containerStyle}>
            <Redeem height={windowHeight * 0.400} width={windowWidth * 1.000} />
            <View style={{ flexDirection: 'row', position: 'absolute', paddingTop: windowHeight * 0.140, paddingLeft: windowWidth * 0.090 }}>
                <View style={{ flexDirection: 'column', height: windowHeight * 0.200, width: windowWidth * 0.400 }} >
                    <Group389 height={windowHeight * 0.200} width={windowWidth * 0.400} />
                    <Text style={{ alignSelf: 'center', position: 'absolute', paddingTop: windowHeight * 0.050, fontSize: 40, fontWeight: 'bold' }} >{activeVouchers}</Text>
                </View>
                <View style={{ flexDirection: 'column', height: windowHeight * 0.200, width: windowWidth * 0.400 }} >
                    <Group390 height={windowHeight * 0.200} width={windowWidth * 0.400} />
                    <Text style={{ alignSelf: 'center', position: 'absolute', paddingTop: windowHeight * 0.050, fontSize: 40, fontWeight: 'bold' }} >{rewardBalance}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: windowHeight * .015,
    }
});


export default RedeemVouchers;