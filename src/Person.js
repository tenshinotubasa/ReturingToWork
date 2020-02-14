import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.css';
import InfoItem from './subcomp/InfoItem'
import Constant from './Constant'

/*!
* @brief 用户信息组件
*/
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name:"",
            Depart:"",
            PhoneNum:"",
            Addr:"",
            Pos:""
        };
        this.updateValue = this.updateValue.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
        if (nextState !== this.state){
            return true;
        }
        return false;
    }

    /// < 渲染数据
    render() { 
        return ( 
            <div >
                <InfoItem Name="姓名" Key={Constant.PI_Name} updateData={this.updateValue} />
                <InfoItem Name="部门" Tip="例如：质检部" Key={Constant.PI_Depart} updateData={this.updateValue} />
                <InfoItem Name="手机号"  Key={Constant.PI_Phone} updateData={this.updateValue} />
                <InfoItem Name="现居住地址"  Key={Constant.PI_Addr} updateData={this.updateValue} />
                <InfoItem Name="当前所在位置" IsMultText={true} Key={Constant.PI_Pos} updateData={this.updateValue} />
            </div>
         );
    }

    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name, value){

        if (name === Constant.PI_Name){
            this.setState({Name:value}, ()=>{this.props.setData(Constant.Personal_Info, this.state,this.checkValid())});
        }
        else if(name === Constant.PI_Depart){
            this.setState({Depart:value}, ()=>{this.props.setData(Constant.Personal_Info, this.state,this.checkValid())});
        }
        else if(name === Constant.PI_Phone){
            this.setState({PhoneNum:value}, ()=>{this.props.setData(Constant.Personal_Info, this.state,this.checkValid())});
        }
        else if(name === Constant.PI_Addr){
            this.setState({Addr:value}, ()=>{this.props.setData(Constant.Personal_Info, this.state,this.checkValid())});
        }
        else if(name === Constant.PI_Pos){
            this.setState({Pos:value}, ()=>{this.props.setData(Constant.Personal_Info, this.state,this.checkValid())});
        }
    }

    /// @brief 数据有效性检验
    checkValid(){
        return this.state.Name.length > 0 &&
               this.state.Depart.length > 0 &&
               this.state.PhoneNum.length > 0 &&
               this.state.Addr.length > 0 &&
               this.state.Pos.length > 0;
    }
}

Person.propTypes = {
    setData:PropTypes.func.isRequired
}

export default Person;