import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import ScanSvg from '../assets/svg/Scan1.svg';
import ValidateButton from '../assets/svg/Validate.svg';
import ScanCodeButton from '../assets/svg/ScanCode.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Scan extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
                <ScanSvg height={windowHeight * 0.600} width={windowWidth * 0.900} style={{ marginTop: windowHeight * 0.100 }} />
                <Image style={{ height: windowHeight * 0.220, width: windowWidth * 0.450, position: 'absolute', top: windowHeight * 0.235 }} source={require('../assets/images/QRCode.png')} />
                <TextInput
                    style={{
                        color: '#838383',
                        position: 'absolute',
                        top: windowHeight * 0.597,
                        width: windowWidth * 0.475,
                        paddingVertical: windowHeight * 0.011,
                        borderTopLeftRadius: windowHeight * 0.025,
                        borderBottomLeftRadius: windowHeight * 0.025,
                        textAlign: 'center',
                        left: windowWidth * 0.125,
                        fontSize: windowWidth * 0.040,
                    }}
                    placeholder="Enter Code"
                    onChangeText={() => { }}
                />
                <TouchableOpacity
                    style={{ position: 'absolute', top: windowHeight * 0.592, left: windowWidth * 0.590 }}
                    onPress={() => { }}
                >
                    <ValidateButton height={windowHeight * 0.060} width={windowWidth * 0.280} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginTop: windowHeight * 0.020
                    }}
                    onPress={() => {}}
                >
                    <ScanCodeButton height={windowHeight * 0.080} width={windowWidth * 0.750} />
                </TouchableOpacity>
            </View>
        );
    };
};

export default Scan;