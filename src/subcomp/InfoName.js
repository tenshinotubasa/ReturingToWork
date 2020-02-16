import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InfoName extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div className="infoName">
                <span className="text-name">{this.props.name}</span>
                
                {
                    this.props.isNeccessary ? <span className='star'><sup>*</sup></span> : null
                }
            </div>
         );
    }
}

InfoName.propTypes={
    name:PropTypes.string.isRequired,
    isNeccessary:PropTypes.bool
}
 
InfoName.defaultProps={
    isNeccessary:true
}
export default InfoName;