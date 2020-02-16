import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.css'
import InfoItem from './subcomp/InfoItem'
import MulSelItem from './subcomp/MulSelItem'
import {TH_Touch, TH_Other, TH_Health, Touch_Hist} from './Constant'

/**!
 * @brief 疫情接触情况组件
 */
class TouchStat extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Touch_Hist:[],
            Health:[],
            Other:""
        }
        this.updateValue = this.updateValue.bind(this)
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
            <div>
                <p className="title2">疫情接触情况统计</p>
                <hr className="split_line"></hr>
                <MulSelItem Name="假期疫情接触情况排查"
                            List={['本人或亲属去过武汉或湖北其他地区',
                                   '本人或亲属去过湖北武汉以外地区',
                                   '本人或亲属途经、中转武汉或湖北其他地区',
                                   '本人或亲属接触过来自武汉或湖北其他地区的亲友',
                                   '本人或亲属乘坐过飞机、火车等长途交通工具',
                                   '以上接触均无']}
                            Key={TH_Touch}
                            updateData={this.updateValue}
                />
                <MulSelItem Name="假期身体健康情况"
                            List={['咳嗽',
                                   '发热',
                                   '乏力',
                                   '呼吸困难',
                                   '其他不适症状',
                                   '无任何不适']}
                            Key={TH_Health}
                            updateData={this.updateValue}
                />
                <InfoItem Name="其他接触情况说明"
                          Tip="如存在疫情接触可能或身体不适，请详细说明" 
                          IsNeccessary={false} 
                          IsMultText={true} 
                          Key={TH_Other}
                          updateData={this.updateValue}
                />
            </div>
         );
    }
    
    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name, value){

        if (name === TH_Touch){
            this.setState({Touch_Hist:value}, ()=>{this.props.setData(Touch_Hist, this.state,this.checkValid())});
        }
        else if(name === TH_Health){
            this.setState({Health:value}, ()=>{this.props.setData(Touch_Hist, this.state,this.checkValid())});
        }
        else if(name === TH_Other){
            this.setState({Other:value}, ()=>{this.props.setData(Touch_Hist, this.state,this.checkValid())});
        }
    }

    /// @brief 数据有效性检验
    checkValid(){
        return this.state.Touch_Hist.length > 0 &&
               this.state.Health.length > 0;
    }
}

TouchStat.propTypes = {
    setData:PropTypes.func.isRequired
}

export default TouchStat;