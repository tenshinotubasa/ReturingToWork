import React, { Component } from 'react';
import './style.css'
import InfoItem from './subcomp/InfoItem'
import MulSelItem from './subcomp/MulSelItem'

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
                <MulSelItem Name="假期疫情接触情况排查"
                            List={['本人或亲属去过武汉或湖北其他地区',
                                   '本人或亲属去过湖北武汉以外地区',
                                   '本人或亲属途经、中转武汉或湖北其他地区',
                                   '本人或亲属接触过来自武汉或湖北其他地区的亲友',
                                   '本人或亲属乘坐过飞机、火车等长途交通工具',
                                   '以上接触均无']}
                />
                <MulSelItem Name="假期身体健康情况"
                            List={['咳嗽',
                                   '发热',
                                   '乏力',
                                   '呼吸困难',
                                   '其他不适症状',
                                   '无任何不适']}
                />
                <InfoItem Name="其他接触情况说明" Tip="如存在疫情接触可能或身体不适，请详细说明" IsNeccessary={false} IsMultText={true}/>
            </div>
         );
    }
}
 
export default TouchStat;