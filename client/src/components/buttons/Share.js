import React, { Component } from 'react';
import { FacebookShareButton, FacebookIcon, } from "react-share";
import { EmailShareButton, EmailIcon, } from "react-share";
class Share extends Component {
   constructor(props) {
       super(props)
       
       this.state = {
           title: props.name,
           id: props.id,
           description: props.description,
           image: props.image
       }
   }
   render() {
       const shareUrl = "https://eventize-123.herokuapp.com/user/event/page/" + this.state.id;
       const name = this.state.image + this.state.title + this.state.description;
       // const title = 'GitHub';
       return (
           <div>
               <div >
                   <FacebookShareButton
                       url={shareUrl}
                       quote={name}
                   >
                       <FacebookIcon
                           size={32}
                           round />
                   </FacebookShareButton>
               </div>
               <div>
                   <EmailShareButton
                       url={shareUrl}
                       subject={name}
                    //    body={this.state.image}
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