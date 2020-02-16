import React, { Component } from 'react';
import InfoName from './InfoName'
import PropTypes from 'prop-types'

class MulSelItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CheckedList:[]
         }
        this.onChange = this.onChange.bind(this)
    }

    render() { 
        return ( 
            <div className="infoItem">
                <InfoName  name={this.props.name} isNeccessary={this.props.isNeccessary} />
                {this.props.List.map((item, index) => {
                    return (
                    <label
                        key={index + item} 
                    >
                        <input
                            name={this.props.nameKey}
                            value={item}
                            key={index + item} 
                            type="checkbox" 
                            onChange={this.onChange}
                        />
                        {item}<br></br>
                    </label>
                    );
                })}     
            </div>
        );
    }

    onChange(item){
        if (this.props.updateData){
            let list = this.state.CheckedList;

            let pos = list.indexOf(item.target.value);
            if (pos === -1){
                list.push(item.target.value);
            }
            else{
                list.splice(pos, 1);
            }
            this.setState({CheckedList:list}, ()=>{this.props.updateData(this.props.nameKey, this.state.CheckedList)})
        }
    }
}

MulSelItem.propTypes={
    name:PropTypes.string.isRequired,
    List:PropTypes.array.isRequired,
    isNeccessary:PropTypes.bool,
    updateData:PropTypes.func,
    nameKey:PropTypes.string.isRequired
}

MulSelItem.defaultProps={
    isNeccessary:true
}

export default MulSelItem;