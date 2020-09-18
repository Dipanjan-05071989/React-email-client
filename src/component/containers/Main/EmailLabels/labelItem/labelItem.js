import React from 'react';
import { withRouter } from "react-router";

/***this will hold the individual label items on the left side
 * With router is used to propagate the route props
 */
const labelItem = props => {


    const handleClick = () => {
        props.onClick(props.id);
        if(props.location.pathname === '/emailView'){  
          props.history.replace({pathname:'/'});
          }
      }

      return (
        <li className="list-group-item justify-content-between" onClick={handleClick}>
          {props.label.name}
         { props.label.emailNumber.length > 0 ?<span className="badge badge-default badge-pill">{props.label.emailNumber.length}</span>:null}
        </li>
    )
}

export default withRouter(labelItem);