import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Animated,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import Notifications from '../components/Notifications';
import { Feather } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const NotificationScreen = () => {

    const [listData, setListData] = useState(
        Notifications.map((NotificationItem, index) => ({
            key: `${index}`,
            title: NotificationItem.title
        }))
    );

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    };

    const VisibleItem = props => {

        const { data, rowHeightAnimatedValue, removeRow, rightActionState } = props;

        if(rightActionState){
            Animated.timing(rowHeightAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => {
                removeRow();
            });
        }

        return (
            <Animated.View style={[styles.rowFront, { height: rowHeightAnimatedValue }]}>
                <TouchableHighlight
                    style={styles.rowFrontVisible}
                >
                    <View>
                        <Text style={styles.title} numberOfLines={1}>{data.item.title}</Text>
                    </View>
                </TouchableHighlight>
            </Animated.View>
        )
    }

    const renderItem = (data, rowMap) => {

        const rowHeightAnimatedValue = new Animated.Value(60);

        return (
            <VisibleItem data={data} rowHeightAnimatedValue={rowHeightAnimatedValue} removeRow={() => deleteRow(rowMap, data.item.key)} />
        )
    };

    const HiddenItemWithActions = (props) => {
        const { swipeAnimatedValue, onClose, onDelete, rightActionActivated, rowActionAnimatedValue, rowHeightAnimatedValue } = props;

        if (rightActionActivated) {
            Animated.spring(rowActionAnimatedValue, {
                toValue: 500,
                useNativeDriver: false
            }).start();
        }

        return (
            <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
                <Text></Text>
                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnLeft]} onPress={onClose}>
                    <Feather name="x-circle" size={24} color="white" style={styles.trash} />
                </TouchableOpacity>

                <Animated.View style={[styles.backRightBtn, styles.backRightBtnRight, {
                    flex: 1, 
                    width: rowActionAnimatedValue
                }]}>
                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
                        <Animated.View style={[styles.trash, {
                            transform: [{
                                scale: swipeAnimatedValue.interpolate({
                                    inputRange: [-90, -45],
                                    outputRange: [1, 0],
                                    extrapolate: 'clamp'
                                })
                            }]
                        }]}>
                            <Feather name="trash-2" size={24} color="white" style={{ alignSelf: 'center'}} />
                        </Animated.View>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        )
    }

    const renderHiddenItem = (data, rowMap) => {

        const rowActionAnimatedValue = new Animated.Value(75);
        const rowHeightAnimatedValue = new Animated.Value(60);

        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
                rowActionAnimatedValue={rowActionAnimatedValue}
                rowHeightAnimatedValue={rowHeightAnimatedValue}
            />
        )
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-150}
                    disableRightSwipe
                    rightActionValue={-500}
                    rightActivationValue={-200}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: 120,
      },
      backTextWhite: {
        color: '#FFF',
      },
      rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        margin: 5,
        marginBottom: 15,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
      },
      rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
      },
      backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,
      },
      backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
      },
      backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
      trash: {
        height: 25,
        width: 25,
        marginRight: 7,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
      },
      details: {
        fontSize: 12,
        color: '#999',
      },
});

export default NotificationScreen;