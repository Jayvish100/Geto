import React from "react";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";

const Input = ({ placeholder, onChangeText, secureTextEntry }) => {
    return (
        <TextInput
            style={styles.textInputStyle}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCapitalize='none'
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        flex: 1,
        paddingHorizontal: 5,
        fontSize: 20
    },
});

export { Input };