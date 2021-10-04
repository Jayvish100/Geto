import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import VoucherDetailSvg from '../assets/svg/VoucherDetail.svg';
import RedeemButtonSvg from '../assets/svg/RedeemNowButton.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class VoucherDetailsScreen extends Component {

    render() {

        console.log(this.props.route.params);

        const { discount, minBill } = this.props.route.params;

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flex: 1, marginTop: windowHeight * 0.050 }}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        marginVertical: windowHeight * 0.050,
                        marginHorizontal: windowWidth * 0.050,
                        borderColor: '#000',
                        borderRadius: 5,
                        elevation: 3
                    }}>
                        <VoucherDetailSvg style={{
                            flex: 1,
                            position: 'absolute',
                            marginLeft: windowWidth * 0.020
                        }}
                            height={windowHeight * 0.870} width={windowWidth * 1}
                        />

                        <Text
                            style={{
                                top: windowHeight * 0.140,
                                fontSize: windowWidth * 0.070,
                                fontWeight: 'bold',
                                color: '#6A9EEC'
                            }}
                        >
                            ₹{discount} OFF
                        </Text>

                        <Text
                            style={{
                                top: windowHeight * 0.270,
                                width: windowWidth * 0.700,
                                textAlign: 'center',
                                fontSize: windowWidth * 0.050,
                                color: '#777777'
                            }}
                        >
                            We offer ₹{discount}/- off on minimum billing of ₹{minBill}/-
                        </Text>

                        <TouchableOpacity style={{ top: windowHeight * 0.310 }} onPress={() => this.props.navigation.replace('ScratchCardHide')} >
                            <RedeemButtonSvg height={windowHeight * 0.050} width={windowWidth * 0.500} />
                        </TouchableOpacity>

                        <Image style={{ height: windowHeight * 0.200, width: windowWidth * 0.410, position: 'absolute', top: windowHeight * 0.550 }} source={require('../assets/images/QRCode.png')} />
                    </View>
                </View>
            </View>
        );
    };
};

export default VoucherDetailsScreen;