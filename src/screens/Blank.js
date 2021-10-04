import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TouchableHighlight } from "react-native";
import { Spinner, Button } from '../components/common';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Blank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Prof')} underlayColor="#555555">
                    <Text style={styles.text}>Go To Profile</Text>
                </TouchableHighlight>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: windowHeight * 0.060,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.080,
        borderRadius: 15,
        borderColor: '#6399EC'
    },
    text: {
        fontSize: windowWidth * 0.060,
        fontWeight: 'bold',
        color: '#6399EC'
    }
})

export default Blank;