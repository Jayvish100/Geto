import React, { Component } from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import PledgeDetailSvgCard from '../assets/svg/PledgeDetailCard.svg';
import PledgeButton from '../assets/svg/PledgeButton.svg';
import LinearGradientComponent from "../components/LinearGradient";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class PledgeDetailScreen extends Component {

    render() {

        const pledgeDetail = this.props.route.params.pledgeDetail;
        const redeemVouchers = this.props.route.params.redeemVouchers;

        return (
            <LinearGradientComponent color={[ '#8FBAF8', '#6299EC' ]} >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <PledgeDetailSvgCard height={windowHeight} width={windowWidth} />
                        <Text
                            style={{
                                fontSize: windowWidth * 0.050,
                                position: 'absolute',
                                top: windowHeight * 0.290,
                                left: windowWidth * 0.100,
                                right: windowWidth * 0.100,
                                textAlign: 'center',
                                color: '#838383'
                            }}
                        >{pledgeDetail.pledgeDescription}</Text>
                        <Text
                            style={{
                                fontSize: windowWidth * 0.050,
                                position: 'absolute',
                                top: windowHeight * 0.450,
                                left: windowWidth * 0.090,
                                color: '#535353'
                            }}
                        >₹{pledgeDetail.pledgeAmount}/-</Text>
                        <Text
                            style={{
                                fontSize: windowWidth * 0.050,
                                position: 'absolute',
                                top: windowHeight * 0.450,
                                left: windowWidth * 0.300,
                                color: '#535353'
                            }}
                        >₹{pledgeDetail.rewardValue}/-</Text>
                        <Text
                            style={{
                                fontSize: windowWidth * 0.050,
                                position: 'absolute',
                                top: windowHeight * 0.450,
                                left: windowWidth * 0.620,
                                color: '#535353'
                            }}
                        >₹{redeemVouchers.rewardBalance}/-</Text>
                        <Text
                            style={{
                                fontSize: windowWidth * 0.050,
                                position: 'absolute',
                                top: windowHeight * 0.650,
                                left: windowWidth * 0.100,
                                right: windowWidth * 0.100,
                                textAlign: 'center',
                                color: '#838383'
                            }}
                        >{pledgeDetail.pledgeValidityDesc}</Text>
                        <TouchableOpacity
                            style={{ position: 'absolute', top: windowHeight * 0.725 }}
                            onPress={() => this.props.navigation.replace('ScratchCardHide')}
                        >
                            <PledgeButton height={windowHeight * 0.100} width={windowWidth * 1.000} />
                        </TouchableOpacity>
                    </View>


                </View>
            </LinearGradientComponent>
        );
    };
};

export default PledgeDetailScreen;