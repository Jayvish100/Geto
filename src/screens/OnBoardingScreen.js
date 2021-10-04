import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = (props) => {
    return (
        <TouchableOpacity 
            style={{ marginHorizontal: 10 }}
            {...props}
        >
            <Text style={{ fontSize: 16 }}>Done</Text>
        </TouchableOpacity>
    )
}

const OnBoardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        onSkip={() => navigation.navigate('loginFlow')}
        onDone={() => navigation.navigate('loginFlow')}
            pages={[
                {
                    backgroundColor: '#fb9191',
                    image: <Image source={require('../assets/images/onboarding-img1.png')} />,
                    title: 'Heading Text 1',
                    subtitle: 'Lorem Ipsum that helps to create dummy text for all layout needs.',
                },
                {
                    backgroundColor: '#5ceea1',
                    image: <Image source={require('../assets/images/onboarding-img2.png')} />,
                    title: 'Heading Text 2',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis',
                },
                {
                    backgroundColor: '#55d9ec',
                    image: <Image source={require('../assets/images/onboarding-img3.png')} />,
                    title: 'Heading Text 3',
                    subtitle: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient',
                }
            ]}
        />
    );
};

OnBoardingScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 1010,
        width: 550
    }
});

export default OnBoardingScreen;