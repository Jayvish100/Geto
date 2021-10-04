import React, { Component, useRef } from "react";
import { Text, View, Dimensions, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import SubmitButton from '../assets/ProfileAssets/Submit.svg';
import { profileUpdate, profileSave } from "../actions/ProfileEditActions";
import { connect } from "react-redux";
import _ from 'lodash';
import ProfileEditForm from "../components/ProfileComponents/ProfileEditForm";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class ProfileEditScreen extends Component {

    componentDidMount(){
        const profile = Object.assign({}, ...this.props.navigation.state.params.profile)
        _.each(profile, (value, prop) => {
            this.props.profileUpdate({ prop, value });
        });
    };

    onButtonPress(){

        const profile = Object.assign({}, ...this.props.navigation.state.params.profile)
        console.log(profile);

        const { name, email, mobile, address1, address2, city, states, pincode } = this.props;

        const pop = this.props.navigation.pop();

        this.props.profileSave({ name, email, mobile, address1, address2, city, states, pincode, uid: profile.key, pop });
    };

    render() {

        console.log(this.props);

        return (
            <View style={{ flex: 1, marginTop: windowHeight * 0.100 }}>
                <ScrollView>
                    <ProfileEditForm {...this.props} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: windowHeight * 0.040, marginBottom: 50 }}>
                        <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                            <SubmitButton height={windowHeight * 0.060} width={windowWidth * 0.800} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: windowHeight * 0.020,
        borderRadius: 10
    }
});

const mapStateToProps = (state) => {

    const { name, email, mobile, address1, address2, city, states, pincode } = state.profileEdit;

    return { name, email, mobile, address1, address2, city, states, pincode };

}

export default connect(mapStateToProps, { profileUpdate, profileSave })(ProfileEditScreen);