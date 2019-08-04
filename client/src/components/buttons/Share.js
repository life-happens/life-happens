import React, { Component } from 'react';
import { FacebookShareButton, FacebookIcon, } from "react-share";

class Share extends Component {
    constructor(props) {
        super(props)
        console.log("this" + props)

        this.state = {
            title: props.name,
            
        }
    }


    render() {
        const shareUrl = process.env.PORT + '/user/event/page/' + this.props.id;
        // const title = 'GitHub';

        return (

            <div>
                <FacebookShareButton
                    url={shareUrl}
                    quote={this.state.title}
                    >
                    <FacebookIcon
                        size={32}
                        round />
                </FacebookShareButton>

               
            </div>
        );
    }
}

export default Share;