import React, { Component } from 'react';
import InfoName from './InfoName'
import PropTypes from 'prop-types'
import '../style.css'

class MulSelItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="infoItem">
                <InfoName Name={this.props.Name} IsNeccessary={this.props.IsNeccessary} />
                {this.props.List.map((item, index) => {
                    return (
                    <label
                        key={index + item} 
                    >
                        <input name="1" value={item}
                            key={index + item} 
                            type="checkbox" 
                        />
                        {item}<br></br>
                    </label>
                    );
                })}     
            </div>
        );
    }
}

MulSelItem.propTypes={
    Name:PropTypes.string.isRequired,
    List:PropTypes.array.isRequired,
    IsNeccessary:PropTypes.bool
}

MulSelItem.defaultProps={
    IsNeccessary:true
}

export default MulSelItem;