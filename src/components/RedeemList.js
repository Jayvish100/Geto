import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CarServiceSvg from '../assets/svg/CarService.svg';
import FoodsSvg from '../assets/svg/Foods.svg';
import LifeStyleSvg from '../assets/svg/LifeStyle.svg';
import ChildFunSvg from '../assets/svg/ChildFun.svg';
import StoreSvg from '../assets/svg/Store.svg';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class RedeemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCity: ''
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginBottom: windowHeight * 0.015 }}>
                <View style={{
                    flex: 1,
                    paddingVertical: windowHeight * 0.015,
                    paddingLeft: windowWidth * 0.020,
                    borderWidth: 1,
                    marginHorizontal: windowWidth * 0.040,
                    borderColor: '#d5d5d5',
                    borderRadius: 5,
                    marginBottom: 10,
                    backgroundColor: '#ffffff'
                }}>
                    <Picker
                        style={{ flex: 1, color: '#838383' }}
                        selectedValue={this.state.selectedCity}
                        onValueChange={(itemValue) => this.setState({ selectedCity: itemValue})}
                        // selectedValue={this.props.shift}
                        // onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label='Mumbai' value='Mumbai' />
                        <Picker.Item label='New Delhi' value='New Delhi' />
                        <Picker.Item label='Bangalore' value='Bangalore' />
                        <Picker.Item label='Hyderabad' value='Hyderabad' />
                        <Picker.Item label='Bhopal' value='Bhopal' />
                        <Picker.Item label='Chennai' value='Chennai' />
                        <Picker.Item label='Visakhapatnam' value='Visakhapatnam' />
                        <Picker.Item label='Patna' value='Patna' />
                        <Picker.Item label='Jaipur' value='Jaipur' />
                        <Picker.Item label='Lucknow' value='Lucknow' />
                        <Picker.Item label='Ranchi' value='Ranchi' />
                        <Picker.Item label='Srinagar' value='Srinagar' />
                    </Picker>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingVertical: windowHeight * 0.015,
                    paddingLeft: windowWidth * 0.020,
                    borderWidth: 1,
                    marginHorizontal: windowWidth * 0.040,
                    borderColor: '#d5d5d5',
                    borderRadius: 5,
                    marginBottom: 10,
                    backgroundColor: '#ffffff'
                }}>
                    <CarServiceSvg height={windowHeight * 0.100} width={windowWidth * 0.180} />
                    <FoodsSvg height={windowHeight * 0.100} width={windowWidth * 0.180} />
                    <LifeStyleSvg height={windowHeight * 0.100} width={windowWidth * 0.180} />
                    <ChildFunSvg height={windowHeight * 0.100} width={windowWidth * 0.180} />
                    <StoreSvg height={windowHeight * 0.100} width={windowWidth * 0.180} />
                </View>
            </View>
        );
    };
};

export default RedeemList;