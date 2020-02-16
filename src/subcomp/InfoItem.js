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
                    this.props.isMultText ?
                        <textarea name={this.props.nameKey} onChange={this.onChange}  placeholder={this.props.mark} value={this.state.Value}></textarea>: 
                        <input name={this.props.nameKey} onChange={this.onChange} className="edit" placeholder={this.props.mark} value={this.state.Value}></input> 
                }
                
            </div>
         );
    }

    onChange(item){
        this.setState({Value:item.target.value},
                      ()=>{this.props.updateData(this.props.nameKey, this.state.Value)})
    }
}

InfoItem.propTypes={
    name:PropTypes.string.isRequired,
    tip:PropTypes.string,
    mark:PropTypes.string,
    isNeccessary:PropTypes.bool,
    isMultText:PropTypes.bool,
    updateData:PropTypes.func,
    nameKey:PropTypes.string.isRequired
}

InfoItem.defaultProps={
    mark:'请输入',
    isNeccessary:true,
    isMultText:false
}

export default InfoItem;