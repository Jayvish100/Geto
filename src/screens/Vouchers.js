import React, { Component } from "react";
import { Text, View, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import HotDealSwiperComponent from "../components/HotDealSwiperComponent";
import _ from 'lodash';
import Voucher from "../components/Voucher";
import { connect } from 'react-redux';
import { vouchersFetch } from '../actions/VouchersActions';
import SwitchSelector from "react-native-switch-selector";
import RedeemList from "../components/RedeemList";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class Vouchers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: false,
            disabled: false
        }
    }

    componentDidMount() {
        this.props.vouchersFetch();
        this.setState({ toggle: false })
    };

    showRedeemList() {
        if (this.state.toggle === false) {
            return null;
        } else  return <View>
            <RedeemList />
        </View>
    }

    componentWillUnmount() {
        this.setState({ toggle: false, disabled: false })
    }

    render() {

        const vouchers = Object.assign({}, ...this.props.vouchers);

        const { navigation } = this.props;


        return (
            <ScrollView>
                <View style={{ marginTop: windowHeight * 0.015 }}>
                    <HotDealSwiperComponent />
                </View>

                <SwitchSelector
                    style={{ marginHorizontal: windowWidth * 0.030, marginBottom: windowHeight * 0.020, flex: 1 }}
                    initial={0}
                    onPress={() => this.setState({ toggle: true, disabled: true })}
                    textColor="#669CEC"
                    selectedColor="#ffffff"
                    buttonColor="#6299EC"
                    borderColor="#7DAAED"
                    hasPadding
                    height={windowHeight * 0.050}
                    fontSize={windowWidth * 0.040}
                    options={[
                        { label: "Voucher List", value: "v" },
                        { label: "Redeem List", value: "r" }
                    ]}
                    disabled={this.state.disabled}
                />

                {this.showRedeemList()}

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: windowWidth * 0.050 }}>
                        <Text style={{ fontSize: windowWidth * 0.050, fontWeight: 'bold' }} >Vouchers</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: windowWidth * 0.040, color: '#6399EC' }} >View All</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Voucher
                        bkOnPress={() => {navigation.navigate('VoucherDetail', { discount: vouchers.bkdiscount, minBill: vouchers.bkminBill })}}
                        dpOnPress={() => {navigation.navigate('VoucherDetail', { discount: vouchers.dpdiscount, minBill: vouchers.dpminBill })}}
                        bbOnPress={() => {navigation.navigate('VoucherDetail', { discount: vouchers.bbdiscount, minBill: vouchers.bbminBill })}}
                        bkdiscount={vouchers.bkdiscount}
                        bkminbill={vouchers.bkminBill}
                        dpdiscount={vouchers.dpdiscount}
                        dpminbill={vouchers.dpminBill}
                        bbdiscount={vouchers.bbdiscount}
                        bbminbill={vouchers.bbminBill}
                    />
                </View>
            </ScrollView>
        );
    };
};


const mapStateToProps = (state) => {

    const vouchers = _.map(state.vouchers, (val, uid) => ({ ...val, key: uid }));

    return { vouchers };
};


export default connect(mapStateToProps, { vouchersFetch })(Vouchers);