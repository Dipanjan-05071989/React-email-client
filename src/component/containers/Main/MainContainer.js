import React, { Component } from 'react';
import EmailLabels from './EmailLabels/EmailLabels';
import EmailList from './EmailList/EmailList';
import EmptyBox from '../../Layout/EmptyBox';
import ActionsRow from '../../Layout/ActionRows';
import * as data from '../../../assets/inbox.json';
import * as spamData from '../../../assets/spam.json';
import * as customData from '../../../assets/custom.json';
import EmailView from './EmailView/emailView';
import { Route} from "react-router-dom";



/**
 * Main class which contains the labels and the email list.
 */
class MainContainer extends React.Component {
  
    constructor(props){
      super(props);
      this.flaggedEmails = [];
      this.flagged = false;
      this.state = {
        selectedLabel : 1,
        emails: data.concat(spamData,customData)
      }
    }
    
    handleLabelClick(labelId){
      this.filteredEmails = [];
      this.readStatus = [];
      this.flagged = false;
      this.setState({
        selectedLabel: labelId
      });
    }


    /***handling the read count of msg */
    handleEmail(emailContent){
      const modifiedReadCount = [...this.state.emails].map(e => {
        if(emailContent.Id === e.Id && emailContent.mId === e.mId){
         e['unread'] = emailContent.unread;
        }
        return e;
    })
    this.setState({
      emails: modifiedReadCount
    });
    }
 /***handling the flagged  messages */
    flaggedemails(emailsObj) {
      this.flaggedEmails = [...this.state.emails].map(e => {
        if(emailsObj.Id === e.Id && emailsObj.mId === e.mId){
         e.flagged = emailsObj.flagged;
        }
        return e;
    })  
    this.setState({
      emails: this.flaggedEmails
    });
    }

    /**filtering by flag */

    filterByFlag(){
      if(this.flaggedEmails.length > 0){
        this.flagged = true;
     this.setState({
      emails: this.flaggedEmails
    });
      }
     
    }
    /***deleting items and moving to trash */

    deleteItems(items){
      const modifiedArr = [...this.state.emails].map(e => {
          if(items.Id === e.Id && items.mId === e.mId){
            e['Id'] = 3;
            e['mId'] = 'guid'+Math.random() * 10;
          }
          return e;
      })
      this.setState({
        emails:modifiedArr
      })
    }
    
  
    render() {
      if(this.flagged){
        this.filteredEmails = this.state.emails.filter(e =>  e.Id && e.Id === this.state.selectedLabel &&  e.flagged);
        this.readStatus = this.state.emails.filter(e =>  e.Id  && e.unread);
      }
      else{
        this.filteredEmails = this.state.emails.filter(e =>  e.Id && e.Id === this.state.selectedLabel);
        this.readStatus = this.state.emails.filter(e =>  e.Id && e.unread);
      }
      
     
      
      let content = null;
      if(this.filteredEmails.length > 0){
         content = <EmailList emails={this.filteredEmails} deleteLabels={this.deleteItems.bind(this)} flaggedEmails={this.flaggedemails.bind(this)} handleEmail={this.handleEmail.bind(this)}/>;
      } 
      else if(this.filteredEmails.length === 0 && this.flagged){

        content = <EmailList emails={this.state.emails.filter(e =>  e.Id && e.Id === this.state.selectedLabel)} deleteLabels={this.deleteItems.bind(this)} flaggedEmails={this.flaggedemails.bind(this)} handleEmail={this.handleEmail.bind(this)}/>;
        this.flagged = false;
      }
      else {
         content = <EmptyBox />;
      }

      
      return (
        <div className="container-fluid">
          <ActionsRow filterByFlag={this.filterByFlag.bind(this)}/>
          <hr />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-2">
              <EmailLabels unread={this.readStatus} onLabelClick={this.handleLabelClick.bind(this)}/>
            </div> 
            <div className="col-6 col-sm-6 col-md-5 col-lg-5">
              {content}        
            </div>
            <div className="col-6 col-sm-6 col-md-4 col-lg-5">
            <Route path="/emailView" component={EmailView}/>       
            </div>
          </div>
        </div>
      )
    }
  }

  export default MainContainer;