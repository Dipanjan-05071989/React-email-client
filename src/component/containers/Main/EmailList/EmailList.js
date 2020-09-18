
import React, { Component } from 'react';
import EmailItem from './Emailitem/emailItem';
import { withRouter } from "react-router";
class EmailList extends Component {
  /**method to propagate email msg item click to parent */
    handleEmailClick = (id) => {
      this.props.handleEmail({...id});
      this.props.history.push({pathname:'/emailView', state: {...id}});

    };
/**method to propagate flagged item to parent */
    setflaggedItem = (flaggedEmail) => {
      this.props.flaggedEmails(flaggedEmail);
    }
   /**method to propagate item to delete to parent */
    childData = (data) => {
       this.props.deleteLabels(data);
    }
  
    render(){
      return (
        <div>
          <div className="list-group">
            {/* EmailItem creation: */}
            {this.props.emails.map((email) => (
                <EmailItem
                 key={email.mId}
                  email={email}
                  childDataItem={this.childData}
                  setflaggedItem={this.setflaggedItem}
                  handleEmailClick={this.handleEmailClick}/>
            ))}
          </div>
        </div>
      )
    }
  }
  export default withRouter(EmailList);