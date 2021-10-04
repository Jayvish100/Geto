import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { ListItem } from 'react-native-elements';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class ProfileDetailList extends Component {
    render() {

        const { mobile, email, address1, address2, city, state, pincode } = this.props;

        return (
            <>
                <ListItem style={styles.listItemStyles}>
                    <ListItem.Content style={styles.listItemContentStyle}>
                        <ListItem.Title style={styles.listItemHeaderStyle}>Mobile No.</ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <ListItem.Title style={styles.listItemDataStyle}>+91 {mobile}</ListItem.Title>
                            <ListItem.Chevron />
                        </View>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listItemStyles}>
                    <ListItem.Content style={styles.listItemContentStyle}>
                        <ListItem.Title style={styles.listItemHeaderStyle}>Email ID</ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <ListItem.Title style={styles.listItemDataStyle}>{email}</ListItem.Title>
                            <ListItem.Chevron />
                        </View>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listItemStyles}>
                    <ListItem.Content style={styles.listItemContentStyle}>
                        <ListItem.Title style={styles.listItemHeaderStyle}>Address</ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column' }}>
                                <ListItem.Title style={styles.listItemDataStyle}>{address1}</ListItem.Title>
                                <ListItem.Title style={styles.listItemDataStyle}>{address2}</ListItem.Title>
                            </View>
                            <ListItem.Chevron />
                        </View>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listItemStyles}>
                    <ListItem.Content style={styles.listItemContentStyle}>
                        <ListItem.Title style={styles.listItemHeaderStyle}>City</ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <ListItem.Title style={styles.listItemDataStyle}>{city}</ListItem.Title>
                            <ListItem.Chevron />
                        </View>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listItemStyles}>
                    <ListItem.Content style={styles.listItemContentStyle}>
                        <ListItem.Title style={styles.listItemHeaderStyle}>State</ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <ListItem.Title style={styles.listItemDataStyle}>{state}</ListItem.Title>
                            <ListItem.Chevron />
                        </View>
                    </ListItem.Content>
                </ListItem>

                <ListItem style={styles.listItemStyles}>
                    <ListItem.Content style={styles.listItemContentStyle}>
                        <ListItem.Title style={styles.listItemHeaderStyle}>Pincode</ListItem.Title>
                        <View style={{ flexDirection: 'row' }}>
                            <ListItem.Title style={styles.listItemDataStyle}>{pincode}</ListItem.Title>
                            <ListItem.Chevron />
                        </View>
                    </ListItem.Content>
                </ListItem>
            </>
        );
    };
};

const styles = StyleSheet.create({
    listItemStyles: {
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9'
    },
    listItemContentStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: windowHeight * 0.005
    },
    listItemHeaderStyle: {
        textAlign: 'left', 
        fontSize: windowWidth * 0.040
    },
    listItemDataStyle: {
        color: '#838383', 
        textAlign: 'right', 
        fontSize: windowWidth * 0.040
    },
})

export default ProfileDetailList;