import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../style.css'

class InfoName extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <span className="text-name">{this.props.Name}</span>
                <span className='star'><sup>*</sup></span>
            </div>
         );
    }
}

InfoName.propTypes={
    Name:PropTypes.string
}
 
export default InfoName;