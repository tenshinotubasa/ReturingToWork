import React, { Component } from 'react';
import '../style.css'
import InfoName from './InfoName'
import PropTypes from 'prop-types'

class InfoItem extends Component {
    
    constructor(props){
        super(props);
        this.state = {}
    }

    render() { 
        return ( 
            <div className="infoItem">
                <InfoName Name={this.props.Name} IsNeccessary={this.props.IsNeccessary} />
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
    Mark:PropTypes.string,
    IsNeccessary:PropTypes.bool
}

InfoItem.defaultProps={
    Mark:'请输入',
    IsNeccessary:true
}

export default InfoItem;