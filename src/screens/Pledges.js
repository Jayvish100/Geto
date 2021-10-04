import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import _ from 'lodash';
import { connect } from 'react-redux';
import { pledgeFetch } from "../actions/PledgeActions";
import { redeemVoucherFetch } from "../actions/RedeemVoucherActions";
import { navigate } from "../navigationRef";
import Pledge from "../components/Pledge";
import Scan from "../components/Scan";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class Pledges extends Component {

    componentDidMount() {
        this.props.pledgeFetch();
        this.props.redeemVoucherFetch();
    }

    render() {

        const redeemVouchers = Object.assign({}, ...this.props.redeemVouchers)

        return (
            <>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Scan onPress={() => navigate('Scanner')} />
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={this.props.pledges}
                                keyExtractor={(pledge) => pledge.key}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{
                                            width: windowWidth * 1.000,
                                        }}>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('PledgeDetail', { pledgeDetail: item, redeemVouchers: redeemVouchers })}
                                            >
                                                <Pledge pledgeCost={item.pledgeAmount} pledegeDescription={item.pledgeDescription} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
            </>
        );
    };
};

const mapStateToProps = (state) => {

    const pledges = _.map(state.pledges, (val, uid) => ({ ...val, key: uid }));

    const redeemVouchers = _.map(state.redeemVouchers, (val, uid) => ({ ...val, key: uid }));

    return { pledges, redeemVouchers };
};

export default connect(mapStateToProps, { pledgeFetch, redeemVoucherFetch })(Pledges);