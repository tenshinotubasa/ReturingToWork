import React, {Component} from 'react';
import Person from './Person'
import TouchStat from './TouchStat'
import BackStat from './BackStat'
import './style.css'

class App extends Component {
    render() {
        return (
            <div className="back">
                <p className="title0">返程复工情况登记</p>
                <div className="content">
                    <p className="title1">返程复工情况登记表</p>
                    <p className="text-desc1">为加强新型冠状病毒疫情防控和应对工作，确保员工返程安全，请尽快填报以下情况，带“*”为必填项，信息填报完毕请点击“提交”。</p>
                    <Person />
                    <TouchStat />
                    <BackStat />
                    <button className="SubmitBtn">提交</button>
                </div>
            </div>
        )
    }
}

export default App;