import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { vouchersCreate } from '../actions/VouchersActions';
import VoucherForm from './VoucherForm';

class VoucherCreate extends Component {

    onButtonPress(){
        
        const { discount, minBill } = this.props;

        this.props.vouchersCreate({ discount, minBill });
    };

    render(){
        return (
            <Card>

                <VoucherForm {...this.props} />

                <CardSection>
                    <Button title="press" onPress={this.onButtonPress.bind(this)} />
                </CardSection>
            </Card>
        );
    };
};


const mapStateToProps = (state) => {
    const { discount, minBill } = state.voucherForm;

    return { discount, minBill };
}


VoucherCreate.navigationOptions = () => {
    return {
        title: 'Create Voucher data'
    };
};


export default connect(mapStateToProps, { vouchersCreate })(VoucherCreate);