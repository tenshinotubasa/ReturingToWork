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
                <InfoName Name={this.props.Name} isNeccessary={this.props.isNeccessary} />
                {
                    this.props.Tip ? <div className="text-desc1">{this.props.Tip}</div> : null
                }
                {
                    this.props.IsMultText ?
                        <textarea name={this.props.Key} onChange={this.onChange}  placeholder={this.props.Mark} value={this.state.Value}></textarea>: 
                        <input name={this.props.Key} onChange={this.onChange} className="edit" placeholder={this.props.Mark} value={this.state.Value}></input> 
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
    Name:PropTypes.string.isRequired,
    Tip:PropTypes.string,
    Mark:PropTypes.string,
    isNeccessary:PropTypes.bool,
    IsMultText:PropTypes.bool,
    updateData:PropTypes.func,
    Key:PropTypes.string.isRequired
}

InfoItem.defaultProps={
    Mark:'请输入',
    isNeccessary:true,
    IsMultText:false
}

export default InfoItem;