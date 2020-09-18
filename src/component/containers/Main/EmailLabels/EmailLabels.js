import React, { Component } from 'react';


import LabelItem from './labelItem/labelItem';

class EmailLabels extends Component {
    
    static defaultProps = {
      //Labels will be static for this example.
      labels: [{
        id : 1,
        name: 'Inbox',
        emailNumber:0
      },{
        id : 2,
        name: 'Spam',
        emailNumber:0
      },{
        id : 3,
        name: 'Deleted Items',
        emailNumber:0
      },{
        id : 4,
        name: 'Custom Folder',
        emailNumber:0
        
      }]
    }; //Babel v6.4 Requires semicolons after class properties

    
    
    render() {
      const readArr = [...this.props.unread];
      const updateArr = this.props.labels.map(e => {

       e['emailNumber']= readArr.filter(t=> t.Id===e.id);
         return e;
      })
      
      return (
        <ul className="list-group">
          {/* Iterate to create labels from the props */}
          {updateArr.map((label) => (
              <LabelItem
                key={label.id}
                id={label.id}
                label={label}
                onClick={this.props.onLabelClick}/>
          ))}
        </ul>
      )
    }
  }

  export default EmailLabels;
  