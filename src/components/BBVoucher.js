import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import BBBackImg from '../assets/svg/BBassets/BBBackImg.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BBVoucher = ({ bbdiscount, bbminBill }) => {
    return (
        <View style={{
            height: windowHeight * 0.220, width: windowWidth * 0.935, backgroundColor: '#fff', borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 15,
            elevation: 3
        }}>

            <View style={{ flexDirection: 'row' }} >
                <View style={{ flex: 1, borderWidth: 0, position: 'absolute', left: windowWidth * 0.100, top: windowHeight * 0.005, height : windowHeight * 0.220, justifyContent: 'center' }}>
                    <Image source={require('../assets/svg/BBassets/BBLogo.png')} style={{ alignSelf: 'center', height: 160, width: 50, bottom: 5 }} />
                </View>
                <View style={{ position: 'absolute', left: windowWidth * 0.280 }} >
                    <BBBackImg height={windowHeight * 0.220} width={windowWidth * 0.700} />
                    <Text style={{
                        position: 'absolute',
                        left: windowWidth * 0.100,
                        top: windowHeight * 0.025,
                        color: '#fff',
                        fontSize: windowWidth * 0.080,
                        fontWeight: 'bold',
                        textShadowColor: '#000',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 10
                    }}>₹{bbdiscount} OFF</Text>
                    <Text style={{
                        width: windowWidth * 0.500,
                        position: 'absolute',
                        left: windowWidth * 0.180,
                        top: windowHeight * 0.145,
                        color: '#fff',
                        fontSize: windowWidth * 0.038,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        textShadowColor: '#000',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 10,
                    }}>We offer ₹{bbdiscount}/- off on minimum billing of ₹{bbminBill}/-</Text>
                </View>
            </View>
        </View>
    );
};

export default BBVoucher;