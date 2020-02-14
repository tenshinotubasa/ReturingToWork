import React, {Component} from 'react';
import Person from './Person'
import TouchStat from './TouchStat'
import BackStat from './BackStat'
import Constant from './Constant'
import './style.css'

class App extends Component {

    /// < 数据初始化
    constructor(props){
        super(props);
        this.state={
            Personal_Info:null,
            p_status:false,
            Touch_Hist:null,
            t_status:false,
            Back_Info:null,
            b_status:false
        }
        this.setData = this.setData.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    /// < 渲染
    render() {
        return (
            <div className="back">
                <p className="title0">返程复工情况登记</p>
                <div className="content">
                    <p className="title1">返程复工情况登记表</p>
                    <p className="text-desc1">为加强新型冠状病毒疫情防控和应对工作，确保员工返程安全，请尽快填报以下情况，带“*”为必填项，信息填报完毕请点击“提交”。</p>
                    <Person setData={this.setData}/>
                    <TouchStat  setData={this.setData}/>
                    <BackStat  setData={this.setData}/>
                    {
                        this.checkData() ? <button className="SubmitBtn" onClick={this.OnSubmit}>提交</button> : 
                                           <button className="SubMitBtnInvalid">提交</button>
                    }
                </div>
            </div>
        )
    }

    // @brief 用于子组件更新数据
    // @param name string-数据名称
    // @param value obj-数据值
    // @param status bool-数据状态
    setData(name, value, status){
        if (name===Constant.Personal_Info){
            this.setState({Personal_Info:value, p_status:status})
        }
        else if (name===Constant.Touch_Hist){
            this.setState({Touch_Hist:value, t_status:status})
        }
        else if (name===Constant.Back_Info){
            this.setState({Back_Info:value, b_status:status})
        }
    }

    /// < 检查数据合法性
    checkData(){
        return this.state.p_status && this.state.t_status && this.state.b_status;
    }

    /// < 提交按钮响应
    OnSubmit(){
        if (this.checkData())
        {
            this.submitData();
        }
    }

    /// < 提交数据
    submitData(){
        console.log(this.state.Personal_Info)
        console.log(this.state.Touch_Hist)
        console.log(this.state.Back_Info)
    }
}

export default App;