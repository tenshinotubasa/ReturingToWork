import React, { Component } from 'react';
import './style.css'
import InfoItem from './subcomp/InfoItem'

class TouchStat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p className="title2">疫情接触情况统计</p>
                <hr className="split_line"></hr>
                <InfoItem Name="其他接触情况说明" Tip="如存在疫情接触可能或身体不适，请详细说明"/>
            </div>
         );
    }
}
 
export default TouchStat;