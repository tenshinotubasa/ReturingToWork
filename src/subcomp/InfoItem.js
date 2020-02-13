import React, { Component } from 'react';
import '../style.css'
import InfoName from './InfoName'
import PropTypes from 'prop-types'

class InfoItem extends Component {
    
    state = {  }

    constructor(props){
        super(props);
    }

    render() { 
        return ( 
            <div className="infoItem">
                <InfoName Name={this.props.Name}/>
                {
                    this.props.Tip ? <div>{this.props.Tip}</div> : null
                }
                <input className="edit" placeholder={this.props.Mark}></input>
            </div>
         );
    }
}

InfoItem.propTypes={
    Name:PropTypes.string.isRequired,
    Tip:PropTypes.string,
    Mark:PropTypes.string
}

InfoItem.defaultProps={
    Mark:'请输入'
}

export default InfoItem;