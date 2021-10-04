import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import DPBackImg from '../assets/svg/DPassets/DPBackImg.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DPVoucher = ({ dpdiscount, dpminBill }) => {
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
                    <Image source={require('../assets/svg/DPassets/DPLogo.png')} style={{ height: windowHeight * 0.100, width: windowWidth * 0.200 }} />
                </View>
                <View style={{ position: 'absolute', left: windowWidth * 0.280 }} >
                    <DPBackImg height={windowHeight * 0.220} width={windowWidth * 0.700} />
                    <Text style={{
                        position: 'absolute',
                        left: windowWidth * 0.1,
                        top: windowHeight * 0.025,
                        color: '#fff',
                        fontSize: windowWidth * 0.080,
                        fontWeight: 'bold',
                        textShadowColor: '#000',
                        textShadowOffset: { width: 1, height: 1 },
                        textShadowRadius: 10
                    }}>₹{dpdiscount} OFF</Text>
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
                    }}>We offer ₹{dpdiscount}/- off on minimum billing of ₹{dpminBill}/-</Text>
                </View>
            </View>
        </View>
    );
};

export default DPVoucher;