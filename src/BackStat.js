import React, { Component } from 'react';
import PropTypes from 'prop-types'
import InfoItem from './subcomp/InfoItem'
import InfoName from './subcomp/InfoName';
import {BI_Date, BI_Transport, BI_Via_WH, Back_Infos, BI_Other} from './Constant'

/**!
 * @brief 返程信息组件
 */
class BackStat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Back_Date:"",
            Transport:"",
            Via_WH:"",
            Other:""
        }
        this.updateValue = this.updateValue.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    
    render() { 
        return ( 
            <div>
                <p className="title2">返程情况统计</p>
                <hr className="split_line"></hr>
                <div className="infoItem">
                    <InfoName Name="计划返程日期"/>
                    <input name={BI_Date} className='edit' type="date" onChange={this.onChange}></input>
                </div>
                <InfoItem
                    Name="拟乘坐交通工具"
                    Tip='若自驾，请填写 "自驾" ; 如已订票，请准确到班次'
                    Key={BI_Transport}
                    updateData={this.updateValue}
                />
                <div className="infoItem">
                    <InfoName Name="是否途径、中转武汉?"/>
                    <label><input name={BI_Via_WH} type="radio" onChange={this.onChange} value="是"></input> 是</label>
                    <label><input name={BI_Via_WH}  type="radio" onChange={this.onChange} value="否"></input> 否</label>
                </div>
                <InfoItem 
                    Name="其他情况说明" 
                    Tip="如有其他情况或需要协助，请在下方补充" 
                    isNeccessary={false} 
                    IsMultText={true}
                    Key={BI_Other}
                    updateData={this.updateValue}
                />
            </div>
         );
    }
    
    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name, value){

        if (name === BI_Date){
            this.setState({Back_Date:value}, ()=>{this.props.setData(Back_Infos, this.state,this.checkValid())});
        }
        else if(name === BI_Transport){
            this.setState({Transport:value}, ()=>{this.props.setData(Back_Infos, this.state,this.checkValid())});
        }
        else if(name === BI_Via_WH){
            this.setState({Via_WH:value}, ()=>{this.props.setData(Back_Infos, this.state,this.checkValid())});
        }
        else if(name === BI_Other){
            this.setState({Other:value}, ()=>{this.props.setData(Back_Infos, this.state,this.checkValid())});
        }
    }

    /// @brief 数据有效性检验
    checkValid(){
        return this.state.Back_Date.length > 0 &&
               this.state.Transport.length > 0 &&
               (this.state.Via_WH === "是" ||
                this.state.Via_WH === "否");
    }
    
    /// @brief 数据更新
    onChange(item){
        if (item.target.name === BI_Via_WH)
        {
            this.setState({Via_WH:item.target.value}, ()=>{this.props.setData(Back_Infos, this.state,this.checkValid())})
        }
        else if (item.target.name === BI_Date)
        {
            this.setState({Back_Date:item.target.value}, ()=>{this.props.setData(Back_Infos, this.state,this.checkValid())})
        }
    }
}
 
BackStat.propTypes = {
    setData:PropTypes.func.isRequired
}

export default BackStat;