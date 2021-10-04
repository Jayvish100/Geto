import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { profileUpdate } from '../../actions/ProfileEditActions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class ProfileEditForm extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: windowWidth * 0.020 }}>
                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>Name</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1,
                        }}
                        value={this.props.name}
                        placeholder="Name"
                        onChangeText={value => this.props.profileUpdate({ prop: 'name', value })}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>Email ID</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1
                        }}
                        value={this.props.email}
                        placeholder="Email ID"
                        onChangeText={value => this.props.profileUpdate({ prop: 'email', value })}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>Mobile No.</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1
                        }}
                        value={this.props.mobile}
                        placeholder="Mobile No."
                        onChangeText={value => this.props.profileUpdate({ prop: 'mobile', value })}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>Address Line 1</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1
                        }}
                        value={this.props.address1}
                        placeholder="Address Line 1"
                        onChangeText={value => this.props.profileUpdate({ prop: 'address1', value })}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>Address Line 2</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1
                        }}
                        value={this.props.address2}
                        placeholder="Address Line 2"
                        onChangeText={value => this.props.profileUpdate({ prop: 'address2', value })}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>City</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1
                        }}
                        value={this.props.city}
                        placeholder="City"
                        onChangeText={value => this.props.profileUpdate({ prop: 'city', value })}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>State</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1
                        }}
                        value={this.props.states}
                        placeholder="State"
                        onChangeText={value => this.props.profileUpdate({ prop: 'states', value })}
                    />
                </View>

                <View style={styles.viewStyle}>
                    <Text style={{ width: windowWidth * 0.260, paddingLeft: 10, fontSize: windowWidth * 0.040, borderRightColor: '#838383', borderRightWidth: 1 }}>Pincode</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            borderRadius: 10,
                            flex: 1
                        }}
                        value={this.props.pincode}
                        placeholder="Pincode"
                        onChangeText={value => this.props.profileUpdate({ prop: 'pincode', value })}
                    />
                </View>
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

};

export default connect(mapStateToProps, { profileUpdate })(ProfileEditForm);