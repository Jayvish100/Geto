import React from "react";
import { Dimensions, StyleSheet, View, Text, ScrollView } from 'react-native';
import Pledges from '../assets/svg/PledgeFrame.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Pledge = ({ pledgeCost, pledegeDescription }) => {
    return (
        <View>
            <Pledges height={windowHeight * 0.250} width={windowWidth * 1.000} />
            <View style={{ position: 'absolute',
                    left: windowWidth * 0.780,
                    top: windowHeight * 0.045,
                    }}>
            <Text
                style={{
                    
                    fontSize: windowWidth * 0.040,
                    fontWeight: 'bold',
                    color: '#669BEC',
                    
                }}>₹{pledgeCost}/-</Text>
            </View>
            
            <ScrollView style={{
                flex: 1,
                position: 'absolute',
                left: windowWidth * 0.260,
                top: windowHeight * 0.075,
            }}
            showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        fontSize: windowWidth * 0.040,
                        fontWeight: '400',
                        color: '#838383',
                        width: windowWidth * 0.650,
                        height: windowHeight * 0.100,
                    }}>
                    {pledegeDescription}
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: windowHeight * 0.001 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
        elevation: 10,
        borderColor: 'black',

    }
});


export default Pledge;