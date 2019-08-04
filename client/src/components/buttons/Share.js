import React, { Component } from 'react';
import { FacebookShareButton, FacebookIcon, } from "react-share";
import { EmailShareButton, EmailIcon, } from "react-share";
class Share extends Component {
   constructor(props) {
       super(props)
       console.log("this" + props)
       this.state = {
           title: props.name,
           id: props.id,
           description: props.description,
           image: props.image
       }
   }
   render() {
       const shareUrl = "https://eventize-123.herokuapp.com/user/event/page/" + this.state.id;
       // const title = 'GitHub';
       return (
           <div>
               <div >
                   <FacebookShareButton
                       url={shareUrl}
                       quote={this.state.title}
                   >
                       <FacebookIcon
                           size={32}
                           round />
                   </FacebookShareButton>
               </div>
               <div>
                   <EmailShareButton
                       url={shareUrl}
                       subject={this.state.title}
                       body={this.state.description}
                   >
                       <EmailIcon
                           size={32}
                           round />
                   </EmailShareButton>
               </div>
           </div>
       );
   }
}

export default Share;