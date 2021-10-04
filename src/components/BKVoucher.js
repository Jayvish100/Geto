import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import BKBackImg from '../assets/svg/BKassets/BKBackImg.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BKVoucher = ({ bkdiscount, bkminBill }) => {

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
                <View style={{ height: windowHeight, width: windowWidth * 0.200, position: 'absolute', left: windowWidth * 0.050, top: windowHeight * 0.050 }}>
                    <Image source={require('../assets/svg/BKassets/BKLogo.png')} style={{ height: windowHeight * 0.100, width: windowWidth * 0.200 }} />
                </View>
                <View style={{ position: 'absolute', left: windowWidth * 0.280 }} >
                    <BKBackImg height={windowHeight * 0.220} width={windowWidth * 0.700} />
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
                    }}>₹{bkdiscount} OFF</Text>
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
                        textShadowRadius: 10
                    }}>We offer ₹{bkdiscount}/- off on minimum billing of ₹{bkminBill}/-</Text>
                </View>
            </View>
        </View>
    );
};

export default BKVoucher;