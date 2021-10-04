import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
        >
            <Text style={{ fontSize: 20, color: '#fff' }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        marginHorizontal: 20,
        backgroundColor: '#6299EC',
        borderRadius: 50,
        borderWidth: 0.6,
        borderColor: '#6299EC',
        alignItems: 'center',
        paddingVertical: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.5,
        elevation: 10
    }
});

export { Button };