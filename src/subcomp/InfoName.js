import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InfoName extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div className="infoName">
                <span className="text-name">{this.props.Name}</span>
                
                {
                    this.props.IsNeccessary ? <span className='star'><sup>*</sup></span> : null
                }
            </div>
         );
    }
}

InfoName.propTypes={
    Name:PropTypes.string.isRequired,
    IsNeccessary:PropTypes.bool
}
 
InfoName.defaultProps={
    IsNeccessary:true
}
export default InfoName;