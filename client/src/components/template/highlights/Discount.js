import React, { Component } from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

class Discount extends Component {
    constructor(props){
        super(props);

    this.state = {
        discountStart: 0,
        discountEnd: props.percentOff,
        discDate: props.discDate
    }
}
    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=> {
            this.percentage()
        }, 30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper" >

                    <Fade
                        onReveal={() => this.percentage()}
                    >
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>off</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before {this.state.discDate}.</h3>
                            <p>Don't wait, these tickets will sell out!</p>
                            <MyButton 
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#fff"
                                link="https://material-ui.com/"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;