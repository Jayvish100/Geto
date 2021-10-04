import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import HotDeals from './HotDeals';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class HotDealSwiperComponent extends Component {

    render(){
        return (
            <View style={{
                height: windowHeight * 0.350,
                width: windowWidth * 1.000
            }}>
                <Swiper
                horizontal
                index={1}
                autoplay={true}
                showsPagination
                activeDotColor= '#6399EC'
                >

                    <View>
                        <HotDeals />
                    </View>

                    <View>
                        <HotDeals />
                    </View>

                    <View>
                        <HotDeals />
                    </View>

                </Swiper>
            </View>
        );
    };
};

export default HotDealSwiperComponent;