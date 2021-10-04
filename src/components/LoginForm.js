import React, { Component } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Dimensions } from "react-native";
import { Button, Input, Spinner } from './common';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


class LoginForm extends Component {


    renderError() {
        if (this.props.error) {
            return (
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    };


    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        } else return (
            <Button style={styles.button} title={this.props.buttonTitle} onPress={this.props.onPress} />
        )
    };

    render() {

        const { header, subHeader, placeholder1, placeholder2, linkText, link, linkPress, onChangeTextEmail, onChangeTextPassword } = this.props

        return (
            <KeyboardAvoidingView 
            style={styles.containerStyle}
            >
                <Text style={styles.headerTextStyle} >
                    {header}
                </Text>
                <Text style={styles.subHeaderTextStyle}>
                    {subHeader}
                </Text>





                <View style={{ flexDirection: 'column',  marginTop: 50 }}>

                    <View style={styles.inputViewStyle} >
                        <View style={{  paddingLeft: 15 }}>
                            <Text style={{ fontSize: 19, marginVertical: 15 }}>Email: </Text>
                        </View>
                        <View>
                            <Input
                                placeholder={placeholder1}
                                onChangeText={onChangeTextEmail}
                            />
                        </View>
                    </View>


                    <View style={styles.inputViewStyle} >
                        <View style={{ paddingLeft: 15 }}>
                            <Text style={{ fontSize: 19, marginVertical: 15 }}>Password: </Text>
                        </View>
                        <View>
                            <Input
                                placeholder={placeholder2}
                                onChangeText={onChangeTextPassword}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                </View>


                {this.renderError()}


                <View style={{ marginVertical: 30 }}>
                    {this.renderButton()}
                </View>



                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18 }}>{linkText}</Text>
                    <TouchableOpacity onPress={linkPress}>
                        <Text style={{ color: '#6299EC', fontSize: 18 }}>{link}</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        );
    };
};

const styles = StyleSheet.create({
    containerStyle: {
        marginHorizontal: 20
    },
    headerTextStyle: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    subHeaderTextStyle: {
        fontSize: 20,
        paddingVertical: 5,

    },
    inputViewStyle: {
        flexDirection: 'row',
        borderColor: '#000000',
        borderWidth: 0.8,
        borderRadius: 30,
        marginBottom: 10

    },
    button: {
        marginTop: 20
    },
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    },
});


export default LoginForm;