import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import ScratchCardShowSvg from '../assets/svg/ScratchCardShow.svg';
import ScratchShowCard from '../assets/svg/ScratchShow.svg';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class ScratchCardShowScreen extends Component {

    componentDidMount() {
        this.props.navigation.setOptions({
            headerShown: false
        })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
                <View style={styles.container}>
                    <ScratchCardShowSvg height={windowHeight} width={windowWidth} />
                    <View style={{
                        position: 'absolute',
                        top: windowHeight * 0.280
                    }}>
                        <ScratchShowCard height={windowHeight * 0.465} width={windowWidth * 0.465} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
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

export default ScratchCardShowScreen;

