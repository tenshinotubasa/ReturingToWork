import React, { Component } from 'react';
import './style.css'
import InfoItem from './subcomp/InfoItem'

class BackStat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p className="title2">返程情况统计</p>
                <hr className="split_line"></hr>
                <InfoItem Name="拟乘坐交通工具" Tip='若自驾，请填写 "自驾" ; 如已订票，请准确到班次'/>
                <InfoItem Name="其他情况说明" Tip="如有其他情况或需要协助，请在下方补充" IsNeccessary={false} IsMultText={true}/>
            </div>
         );
    }
}
 
export default BackStat;