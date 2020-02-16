import React, { Component } from 'react';
import InfoName from './InfoName'
import PropTypes from 'prop-types'

class InfoItem extends Component {
    
    constructor(props){
        super(props);
        this.state = {Value:""};
        this.onChange = this.onChange.bind(this);
    }
    
    render() { 
        return ( 
            <div className="infoItem">
                <InfoName  name={this.props.name} isNeccessary={this.props.isNeccessary} />
                {
                    this.props.tip ? <div className="text-desc1">{this.props.tip}</div> : null
                }
                {
                    this.props.IsMultText ?
                        <textarea name={this.props.Key} onChange={this.onChange}  placeholder={this.props.mark} value={this.state.Value}></textarea>: 
                        <input name={this.props.Key} onChange={this.onChange} className="edit" placeholder={this.props.mark} value={this.state.Value}></input> 
                }
                
            </div>
         );
    }

    onChange(item){
        this.setState({Value:item.target.value},
                      ()=>{this.props.updateData(this.props.Key, this.state.Value)})
    }
}

InfoItem.propTypes={
    name:PropTypes.string.isRequired,
    tip:PropTypes.string,
    mark:PropTypes.string,
    isNeccessary:PropTypes.bool,
    IsMultText:PropTypes.bool,
    updateData:PropTypes.func,
    Key:PropTypes.string.isRequired
}

InfoItem.defaultProps={
    mark:'请输入',
    isNeccessary:true,
    IsMultText:false
}

export default InfoItem;