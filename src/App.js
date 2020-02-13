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