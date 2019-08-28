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
                    total={500}
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
                {/* <MyButton
                    text="Purchase"
                    bck="#ffa800"
                    color="#fff"
                    // link="https://checkout.stripe.com/pay/ppage_1FCT40FKnpzPB0MXS6sT3baf#fidkdWxOYHwnPyd1blpxYHZxWm9CPHY2XUhhVm9fQzxOYWgwYjA8f2lcYScpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKip2cXdsdWArZmpoJyknaWpmZGlgJz9rcGlpKSdobGF2Jz9%2BJ2JwbGEnPydkMGY3YT0yPSg3NDVhKDFgYGYoPTY2YSgzNjI3ZzM0MjA9MWcnKSdocGxhJz8nZ2RnNzA9PDEoNDBkMCgxMGE2KGQ3Zz0oYWRjZGQxZ2Q9MzMyJykndmxhJz8nZGNjNzE1ZDIoZjI9PSgxMWE3KGRgMzQoPGFgPWA8ZzBnMTdgJ3gpJ2dgcWR2Jz9eWHgl"
                /> */}
            </div>
        );
    }
}

export default Paypal;