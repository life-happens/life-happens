import React, { Component } from 'react';
// import MyButton from './MyButton';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {
    render() {

        const onSuccess = (payment) => {
            console.log(JSON.stringify(payment))
        }

        const onCancel = (data) => {
            console.log(JSON.stringify(data))
        }
        const onError = (err) => {
            console.log(JSON.stringify(err))
        }

        let env = 'sandbox';
        let currency = 'USD';
        // let total = this.props.toPay;

        const client = {
            sandbox: 'AT2DqOWJ66NZ9aJkJJCqecYNzcx2hei0PplQooK_tXHtV_W_3Twsde0ltIAPPQ0fIlmOcSfRzzYJ1UmE',
            production: ''
        }

        return (
            <div>
                <PaypalExpressBtn
                    env={env}
                    client={client}
                    currency={currency}
                    total={this.props.toPay}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                    style={{
                        size:'medium',
                        color: 'gold',
                        label: 'paypal',
                        shape: 'pill'
                    }}


                />
               
            </div>
        );
    }
}

export default Paypal;