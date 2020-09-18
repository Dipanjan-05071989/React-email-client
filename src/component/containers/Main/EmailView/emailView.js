import React from 'react';
import Wrapper from "../../../hoc/Wrapper";
import { withRouter } from "react-router";
const emailView = props => {

/***the email msg conataining details of sender and all other stuff */
        return (
        <Wrapper>
        <div className="emailcontentBox">
         <div className="email-view-sender-holder">
             <div className="fa fa-user-circle increase-font"></div>
             <div><span>DIPANJAN</span></div>
         </div>
         <span className="date-holder-mail">Mon 24th Dec</span>
        <div>Subject:{props.location.state?props.location.state.subject: 'DEMO'}</div>
        <div><span className="mail-content">{props.location.state?props.location.state.content:'demo'}</span></div>
        </div>
          
          </Wrapper>
      )

 }

  export default withRouter(emailView);