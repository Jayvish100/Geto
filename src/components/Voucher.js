import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import BBVoucher from "./BBVoucher";
import BKVoucher from "./BKVoucher";
import DPVoucher from "./DPVoucher";
import { navigate } from "../navigationRef";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Voucher extends Component {

    render() {

        const {  bkOnPress, dpOnPress, bbOnPress, bkdiscount, bkminbill, dpdiscount, dpminbill, bbdiscount, bbminbill } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginHorizontal: windowWidth * 0.025, borderRadius: 15, marginTop: 20, marginBottom: 20 }}>
                    <TouchableOpacity onPress={bkOnPress} activeOpacity={0.9} >
                        <BKVoucher bkdiscount={bkdiscount} bkminBill={bkminbill} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: windowWidth * 0.025, borderRadius: 15, marginBottom: 20 }}>
                    <TouchableOpacity onPress={dpOnPress} activeOpacity={0.9} >
                        <DPVoucher dpdiscount={dpdiscount} dpminBill={dpminbill} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: windowWidth * 0.025, borderRadius: 15, marginBottom: 20 }}>
                    <TouchableOpacity onPress={bbOnPress} activeOpacity={0.9} >
                        <BBVoucher bbdiscount={bbdiscount} bbminBill={bbminbill} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
};

export default Voucher;