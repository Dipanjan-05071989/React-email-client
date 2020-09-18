import React from 'react';

const navBar = props => {

    return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          {/* <img className="nav-logo" src="https://facebook.github.io/react/img/logo.svg" width="36" height="36" /> */}
          <a className="navbar-brand" href="#">{props.title}</a>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item active">
            <a className="nav-link" href="#">&nbsp;<i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;</a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#">&nbsp;<i className="fa fa-th" aria-hidden="true"></i>&nbsp;</a>
            </li>
            <li className="nav-item active">
            <a className="nav-link" href="#">{props.user} <span className="sr-only">(current)</span><i className="fa fa-angle-down" aria-hidden="true"></i></a>
            </li>
          </ul>
          </div>
        </nav>
      ) 
}

export default navBar;