import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { navigate } from "../navigationRef";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MainScreen = (props) => {
    console.log(props);
    return (
        <View style={{ flex: 1 }}>
            <Text>MainScreen</Text>
            <Button title="Tabs" onPress={() => navigate('Tabs')} />
        </View>
    );
};

MainScreen.navigationOptions = () => {
    return {
        title: 'MainScreen',
        headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigate('Scanner')} >
                    <MaterialIcons name="qr-code-scanner" size={32} color="#6299EC" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigate('Notify')} >
                    <Ionicons name="notifications" size={32} color="#6299EC" />
                </TouchableOpacity>
            </View>
        )
    }
}

export default MainScreen;