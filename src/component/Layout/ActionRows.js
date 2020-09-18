import React,{useState} from 'react';

const actionRows = props => {

  const [toggleClass, setToggleClass] = useState(false);

    return (
    
        <div className="row margin-top-2"> 
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <a href="#" className="btn btn-danger btn-primary btn-block">
              <i className="fa fa-edit"></i> Compose
            </a>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
            <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
              <button type="button" className="btn btn-secondary">&nbsp;<i className="fa fa-refresh" aria-hidden="true"></i>&nbsp;</button>
              <button type="button" className="btn btn-secondary">&nbsp;<i className="fa fa-star" aria-hidden="true"></i>&nbsp;</button>
            </div>
            <div className={"btn-group dropdown "+ (toggleClass ? 'show' : 'hidden')} role="group">
              <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setToggleClass(!toggleClass)}>
                Filter
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item anchor-dropdown excluded-anchor"  onClick={()=>{
                  props.filterByFlag(true)
                  setToggleClass(false)}}>By Flag</a>
              </div>
            </div>
        
            <div className="pull-right">
                    <button type="button" className="btn btn-secondary">&nbsp;<i className="fa fa-cog" aria-hidden="true"></i>&nbsp;</button>
              <button type="button" className="btn btn-secondary">&nbsp;<i className="fa fa-bars" aria-hidden="true"></i>&nbsp;</button>
                  </div>
          </div>
        </div>
      )

}

export default actionRows;