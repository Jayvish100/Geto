import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProfileCard extends Component {
    render() {

        const { name, email } = this.props;

        return (
            <View>
                <View style={{ width: windowWidth * 0.900, alignSelf: 'center', alignItems: 'center' }}>
                    <Image
                        style={styles.imageBackStyle}
                        source={require('../../assets/ProfileAssets/Subtract.png')}
                    />
                    <Image
                        style={styles.photo}
                        source={require('../../assets/ProfileAssets/Photo.png')}
                    />
                    <View style={{
                        borderTopWidth: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        width: windowWidth * 0.815,
                        height: windowHeight * 0.120,
                        position: 'absolute',
                        top: windowHeight * 0.262,
                        borderColor: '#DCDCDC'
                    }}>
                        <View style={{ borderRightWidth: 1, borderColor: '#DCDCDC' }} />
                        <View style={{ borderLeftWidth: 1, borderColor: '#DCDCDC' }} />
                    </View>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.100,
                    left: windowWidth * 0.150,
                    width: windowWidth * 0.600
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.065,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#292929'
                    }}>
                        {name}
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.160,
                    left: windowWidth * 0.100,
                    width: windowWidth * 0.700
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.045,
                        textAlign: 'center',
                        color: '#838383'
                    }}>
                        {email}
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.200,
                    left: windowWidth * 0.100,
                    width: windowWidth * 0.700
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.070,
                        color: '#639AEC',
                        textAlign: 'center',
                    }}>
                        Congratulations!
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.275,
                    left: windowWidth * 0.100,
                    width: windowWidth * 0.130
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.070,
                        color: '#639AEC',
                        textAlign: 'center'
                    }}>
                        20
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.325,
                    left: windowWidth * 0.100,
                    width: windowWidth * 0.140
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.035,
                        color: '#838383',
                        textAlign: 'center'
                    }}>
                        Planted Tree
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.275,
                    left: windowWidth * 0.380,
                    width: windowWidth * 0.130
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.070,
                        color: '#639AEC',
                        textAlign: 'center'
                    }}>
                        300
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.325,
                    left: windowWidth * 0.380,
                    width: windowWidth * 0.150
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.035,
                        color: '#838383',
                        textAlign: 'center'
                    }}>
                        Saved Ltr of Water
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.275,
                    left: windowWidth * 0.660,
                    width: windowWidth * 0.130
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.070,
                        color: '#639AEC',
                        textAlign: 'center'
                    }}>
                        20
                    </Text>
                </View>

                <View style={{
                    position: 'absolute',
                    top: windowHeight * 0.325,
                    left: windowWidth * 0.660,
                    width: windowWidth * 0.150
                }}>
                    <Text style={{
                        fontSize: windowWidth * 0.035,
                        color: '#838383',
                        textAlign: 'center'
                    }}>
                        Days of Clean Air
                    </Text>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    imageBackStyle: {
        height: windowHeight * 0.400,
        width: windowWidth * 0.850,
        borderRadius: 20
    },
    photo: {
        position: 'absolute',
        height: windowHeight * 0.180,
        width: windowWidth * 0.380,
        top: windowHeight * -0.080
    }
})

export default ProfileCard;