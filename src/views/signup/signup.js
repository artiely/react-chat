import React, {Component} from 'react'
import {Button, List, InputItem, WhiteSpace, WingBlank, Radio} from 'antd-mobile'

const RadioItem = Radio.RadioItem

class Signup extends Component {
  constructor(props) {
      super(props)

  }
  back(){
    this.props.history.goBack()
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <WingBlank>
          <h2>注册页</h2>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
            <RadioItem>牛人</RadioItem>
            <RadioItem>Boss</RadioItem>
            <WhiteSpace></WhiteSpace>
            <Button type='primary'>注册</Button>
            <span onClick={this.back.bind(this)}>返回</span>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default Signup