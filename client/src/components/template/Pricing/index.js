import React, { Component } from 'react';
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";
import "./style.css";

class Pricing extends Component {

    
    state = {
        prices: [100, 175, 250],
        positions: ["Item 1", "Item 2", "Item 3"],
        desc: [
            "Words",
            "More Words",
            "Most Words"
        ],
        linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
        delay: [500, 0, 500]

    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={this.state.linkto[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )


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