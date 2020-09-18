import React,{useState} from 'react';
import { withRouter } from "react-router";

const emailItem = props => {
  const [toggleFlag, setToggleFlag] = useState(props.email.flagged);
  const [toggleReadMsg, settoggleReadMsg] = useState(props.email.unread);

    const handleEmailClick = () => {
        //Call to the parent's method passed through properties.
        props.email.unread = false;
         props.handleEmailClick(props.email);
         settoggleReadMsg(false);

        // console.log("Clicked",props);
      }
      /**toggling msg flag click and propagating to parent msg selected to be flagged */
      const setMsgFlag = (flag,e) => {
        e.stopPropagation();
        let flaggedEmail = {};
        flaggedEmail = {...props.email};
        flaggedEmail.flagged = flag;
        props.setflaggedItem(flaggedEmail);
        setToggleFlag(!toggleFlag);
        }
        
 /**Deleting the msg items by propagting to parent */
      const deleteItems = (e) =>{

        e.stopPropagation();
        if(props.location.pathname === '/emailView' && props.email.Id != 3){  
        props.history.replace({pathname:'/'});
        }
        props.childDataItem({"mId":props.email.mId,"Id":props.email.Id});

      }
      return (
        <li className={"list-group-item d-flex justify-content-start "+ (toggleReadMsg ? 'bg-dark' : 'bg-transparent')} onClick={handleEmailClick}>
            <div onClick={(e) => setMsgFlag(!toggleFlag,e)}>
            <i className={"fa fa-flag "+ (toggleFlag ? 'red-flag' : 'normal')}></i>
            </div>
  
            &nbsp;&nbsp;<span className="fa fa-star-o"></span>&nbsp;&nbsp;
            <div>Accenture</div> 
            <div className="subject_spec">{props.email.subject}</div>
            <div className="email-item-content">{props.email.content}</div>
           
            
            <span className="ml-auto p-2">
            <span className="fa fa-trash custom-delete-button" onClick={deleteItems}></span>
              <span className="badge badge-default badge-pill">12:52</span>
            </span>
          </li>
          
      )
  
  } 

  export default withRouter(emailItem);
  