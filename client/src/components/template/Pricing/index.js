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
            desc: [this.props.ticketDesc]

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
                                toPay={this.props.price}
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