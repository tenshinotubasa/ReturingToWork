import React, { Component } from 'react';
import './style.css';
import InfoItem from './subcomp/InfoItem'

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div >
                <InfoItem Name="姓名" />
                <InfoItem Name="部门" Tip="例如：质检部"/>
                <InfoItem Name="手机号" />
                <InfoItem Name="现居住地址" />
                <InfoItem Name="当前所在位置" IsMultText={true}/>
            </div>
         );
    }
}



export default Person;