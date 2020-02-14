import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.css'
import InfoItem from './subcomp/InfoItem'
import InfoName from './subcomp/InfoName';
import Constant from './Constant'

/**!
 * @brief 返程信息组件
 */
class BackStat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Back_Date:"",
            Transport:"",
            Via_WH:false,
            Other:""
        }
        this.updateValue = this.updateValue.bind(this)
        this.onDateChange = this.onDateChange.bind(this)
    }
    
    shouldComponentUpdate(nextProps, nextState){
        if (nextState !== this.state){
            return true;
        }
        return false;
    }

    render() { 
        return ( 
            <div>
                <p className="title2">返程情况统计</p>
                <hr className="split_line"></hr>
                <div className="infoItem">
                    <InfoName Name="计划返程日期"/>
                    <input name={Constant.BI_Date} className='edit' type="date" onChange={this.onDateChange}></input>
                </div>
                <InfoItem
                    Name="拟乘坐交通工具"
                    Tip='若自驾，请填写 "自驾" ; 如已订票，请准确到班次'
                    Key={Constant.BI_Transport}
                    updateData={this.updateValue}
                />
                <InfoItem 
                    Name="其他情况说明" 
                    Tip="如有其他情况或需要协助，请在下方补充" 
                    IsNeccessary={false} 
                    IsMultText={true}
                    Key={Constant.BI_Other}
                    updateData={this.updateValue}
                />
            </div>
         );
    }
    
    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name, value){

        if (name === Constant.BI_Date){
            this.setState({Back_Date:value}, ()=>{this.props.setData(Constant.Back_Info, this.state,this.checkValid())});
        }
        else if(name === Constant.BI_Transport){
            this.setState({Transport:value}, ()=>{this.props.setData(Constant.Back_Info, this.state,this.checkValid())});
        }
        else if(name === Constant.BI_Via_WH){
            this.setState({Via_WH:value}, ()=>{this.props.setData(Constant.Back_Info, this.state,this.checkValid())});
        }
        else if(name === Constant.BI_Other){
            this.setState({Other:value}, ()=>{this.props.setData(Constant.Back_Info, this.state,this.checkValid())});
        }
    }

    /// @brief 数据有效性检验
    checkValid(){
        return this.state.Back_Date != null &&
               this.state.Transport.length > 0 &&
               (this.state.Via_WH === true ||
                this.state.Via_WH === false);
    }
    
    /// @brief 日期更新
    onDateChange(item){
        this.setState({Back_Date:item.target.value}, ()=>{this.props.setData(Constant.Back_Info, this.state,this.checkValid())})
    }
}
 
BackStat.propTypes = {
    setData:PropTypes.func.isRequired
}

export default BackStat;