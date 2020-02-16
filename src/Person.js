import React, { Component } from 'react';
import PropTypes from 'prop-types'
import InfoItem from './subcomp/InfoItem'
import {PI_Name, PI_Depart, PI_Pos, PI_Addr, Personal_Info, PI_Phone} from './Constant'

/*!
* @brief 用户信息组件
*/
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            depart:"",
            phoneNum:"",
            addr:"",
            pos:""
        };
        this.updateValue = this.updateValue.bind(this);
    }

    /// < 渲染数据
    render() { 
        return ( 
            <div >
                <InfoItem name="姓名" nameKey={PI_Name} updateData={this.updateValue} />
                <InfoItem name="部门" tip="例如：质检部" nameKey={PI_Depart} updateData={this.updateValue} />
                <InfoItem name="手机号"  nameKey={PI_Phone} updateData={this.updateValue} />
                <InfoItem name="现居住地址"  nameKey={PI_Addr} updateData={this.updateValue} />
                <InfoItem name="当前所在位置" isMultText={true} nameKey={PI_Pos} updateData={this.updateValue} />
            </div>
         );
    }

    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name, value){

        if (name === PI_Name){
            this.setState({name:value}, ()=>{this.props.setData(Personal_Info, this.state,this.checkValid())});
        }
        else if(name === PI_Depart){
            this.setState({depart:value}, ()=>{this.props.setData(Personal_Info, this.state,this.checkValid())});
        }
        else if(name === PI_Phone){
            this.setState({phoneNum:value}, ()=>{this.props.setData(Personal_Info, this.state,this.checkValid())});
        }
        else if(name === PI_Addr){
            this.setState({addr:value}, ()=>{this.props.setData(Personal_Info, this.state,this.checkValid())});
        }
        else if(name === PI_Pos){
            this.setState({pos:value}, ()=>{this.props.setData(Personal_Info, this.state,this.checkValid())});
        }
    }

    /// @brief 数据有效性检验
    checkValid(){
        return this.state.name.length > 0 &&
               this.state.depart.length > 0 &&
               this.state.phoneNum.length > 0 &&
               this.state.addr.length > 0 &&
               this.state.pos.length > 0;
    }
}

Person.propTypes = {
    setData:PropTypes.func.isRequired
}

export default Person;