import React, { Component } from 'react';
import '../style.css'
import InfoName from './InfoName'
import PropTypes from 'prop-types'

class InfoItem extends Component {
    
    constructor(props){
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    render() { 
        return ( 
            <div className="infoItem">
                <InfoName Name={this.props.Name} IsNeccessary={this.props.IsNeccessary} />
                {
                    this.props.Tip ? <div className="text-desc1">{this.props.Tip}</div> : null
                }
                {
                    this.props.IsMultText ?
                        <textarea name={this.props.Key} onChange={this.onChange}  placeholder={this.props.Mark}></textarea>: 
                        <input name={this.props.Key} onChange={this.onChange} className="edit" placeholder={this.props.Mark}></input> 
                }
                
            </div>
         );
    }

    onChange(item){
        if (this.props.updateData){
            this.props.updateData(this.props.Key, item.target.value)
        }
    }
}

InfoItem.propTypes={
    Name:PropTypes.string.isRequired,
    Tip:PropTypes.string,
    Mark:PropTypes.string,
    IsNeccessary:PropTypes.bool,
    IsMultText:PropTypes.bool,
    updateData:PropTypes.func,
    Key:PropTypes.string.isRequired
}

InfoItem.defaultProps={
    Mark:'请输入',
    IsNeccessary:true,
    IsMultText:false
}

export default InfoItem;