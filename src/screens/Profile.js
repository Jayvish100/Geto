import React, { Component } from "react";
import { Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity } from "react-native";
import LinearGradientComponent from "../components/LinearGradient";
import ProfileCard from "../components/ProfileComponents/ProfileCard";
import { connect } from "react-redux";
import _ from 'lodash';
import { profileFetch, logout } from "../actions/ProfileActions";
import ProfileDetailList from "../components/ProfileComponents/ProfileDetailList";
import ProfileEditButton from '../assets/ProfileAssets/edit.svg';
import ProfileExitButton from '../assets/ProfileAssets/exit.svg';
import { navigate } from "../navigationRef";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class Profile extends Component {

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigate('ProfileEdit', { profile: this.props.profile } )} >
                    <ProfileEditButton height={20} width={20} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginRight: 10 }} onPress={this.props.logout} >
                    <ProfileExitButton height={20} width={20} />
                  </TouchableOpacity>
                </View>
              ),
        })
        this.props.profileFetch();
    };

    render() {

        const data = this.props.profile;

        const profileCard = Object.assign({}, ...this.props.profile);

        return (
            <>
                <ScrollView style={{ backgroundColor: '#fff' }}>
                    <View style={{ height: windowHeight * 0.580, backgroundColor: '#fff' }}>
                        <View style={{ height: windowHeight * 0.350 }}>
                            <LinearGradientComponent color={['#8FBAF8', '#6299EC']} />
                            <View style={{ flex: 1, position: 'absolute', top: windowHeight * 0.160, left: windowWidth * 0.050 }}>
                                <ProfileCard name={profileCard.name} email={profileCard.email} />
                            </View>
                        </View>
                    </View>
                    <View style={{
                        marginHorizontal: windowWidth * 0.050,
                        backgroundColor: '#fff',
                        marginBottom: 50
                    }}>
                        <Text style={{ fontSize: windowWidth * 0.050, fontWeight: 'bold', marginLeft: windowWidth * 0.020, marginBottom: windowHeight * 0.010 }}>Profile Info</Text>
                        <ScrollView horizontal>
                            <FlatList
                                data={data}
                                keyExtractor={(prof) => prof.key}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ flex: 1, width: windowWidth * 0.900 }}>
                                            
                                            <ProfileDetailList mobile={item.mobile} email={item.email} address1={item.address1} address2={item.address2} city={item.city} state={item.states} pincode={item.pincode} />
                                            
                                        </View>
                                    )
                                }}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>


            </>
        );
    };
};

const mapStateToProps = (state) => {

    const profile = _.map(state.profile, (val, uid) => ({ ...val, key: uid }));

    return { profile };
};

export default connect(mapStateToProps, { profileFetch, logout })(Profile);