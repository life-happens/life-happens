import React, { Component } from 'react';
// import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";
import "./style.css";

// 
import Paypal from "../utils/paypal"

class Pricing extends Component {
    

        state = {
            prices: [this.props.price],
            positions: [this.props.ticketTitle],
            desc: [this.props.ticketDesc],
            linkto: ["https://checkout.stripe.com/pay/ppage_1FBNRiFKnpzPB0MXWdSCbfk4#fidkdWxOYHwnPyd1blpxYHZxWm9CPHY2XUhhVm9fQzxOYWgwYjA8f2lcYScpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKip2cXdsdWArZmpoJyknaWpmZGlgJz9rcGlpKSdobGF2Jz9%2BJ2JwbGEnPydkMGY3YT0yPSg3NDVhKDFgYGYoPTY2YSgzNjI3ZzM0MjA9MWcnKSdocGxhJz8nZ2RnNzA9PDEoNDBkMCgxMGE2KGQ3Zz0oYWRjZGQxZ2Q9MzMyJykndmxhJz8nNzVkZ2Y1ZzYoYzY8NigxNDIzKD02MzYoZjwxNTc9ZzcwMDxkJ3gpJ2dgcWR2Jz9eWHgl"],
            delay: [500, 0, 500]

        }
  
    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={500}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.props.price}</span>
                            <span>{this.props.ticketTitle}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.props.ticketDesc}</span>
                        </div>
                        <div className="pricing_buttons">
                            <Paypal
                                toPay={this.state.price}
                                transactionError={(data)=> this.transactionError(data)}
                                transactionCanceled={(data)=> this.transactionCanceled(data)}
                                onSuccess={(data)=> this.transactionSuccess(data)}
                            />
                            
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    transactionError = () => {

    }
    
    transactionCanceled = () => {
        
    } 

    transactionSuccess = () => {
        alert("Success!!")
    }

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>

            </div>
        );
    }
}


export default Pricing;