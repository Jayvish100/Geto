import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { vouchersUpdate } from '../actions';
import { CardSection, Input } from './common';

class VoucherForm extends Component {

    render(){
        return (
            <View>
                <CardSection>
                    <Input 
                    label="discount" 
                    placeholder="00"
                    value={this.props.discount}
                    onChangeText={value => this.props.vouchersUpdate({ prop: 'discount', value })}
                    />
                </CardSection>


                <CardSection>
                    <Input 
                    label="minimum billing"
                    placeholder="00"
                    value={this.props.minBill}
                    onChangeText={value => this.props.vouchersUpdate({ prop: 'minBill', value })}
                    />
                </CardSection>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingRight:90,
        paddingVertical:10
    }
});

const mapStateToProps = (state) => {
    const { discount, minBill } = state.voucherForm;

    return { discount, minBill };
}

export default connect(mapStateToProps, { vouchersUpdate })(VoucherForm);