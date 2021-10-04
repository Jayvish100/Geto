import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const LinearGradientComponent = ({ children, color }) => {
    return (
        <LinearGradient colors={color} style={styles.gradient} >
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    container: {
        flex: 1
    }
});

export default LinearGradientComponent;