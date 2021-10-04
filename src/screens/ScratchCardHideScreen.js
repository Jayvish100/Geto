import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import ScratchCardHideSvg from '../assets/svg/ScratchCardHide.svg';
import ScratchHideCard from '../assets/svg/ScratchHide.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class ScratchCardHideScreen extends Component {

    componentDidMount() {
        this.props.navigation.setOptions({
            headerShown: false
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <ScratchCardHideSvg height={windowHeight} width={windowWidth} />
                <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: windowHeight * 0.280
                }}
                onPress={() => this.props.navigation.replace('ScratchCardShow')}
                >
                    <ScratchHideCard height={windowHeight * 0.465} width={windowWidth * 0.465} />
                </TouchableOpacity>
            </View>
        );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#fff'
    }
});

export default ScratchCardHideScreen;

