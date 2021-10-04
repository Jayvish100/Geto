import React from "react";
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import ScanSvg from '../assets/svg/scan.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Scan = ({ onPress }) => {
    return (
        <View style={styles.containerStyle}>
            <TouchableOpacity onPress={onPress} >
                <ScanSvg height={windowHeight * 0.150} width={windowWidth * 1.000} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: windowHeight * .015,
    }
});


export default Scan;