import React, {Component} from 'react'
import {Button, List, InputItem, WhiteSpace, WingBlank} from 'antd-mobile'

class Login extends Component {
  constructor(props) {
      super(props)

  }
  register(){
    this.props.history.push('/signup')
  }
  render() {
    return (
      <div>
        <WingBlank>
          <h2>登录页</h2>
          <List>
            <InputItem>用户</InputItem>
            <InputItem type='password'>密码</InputItem>
            <WhiteSpace></WhiteSpace>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type='primary'>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register.bind(this)}>注册</Button>
        </WingBlank>
      </div>

    )
  }
}

export default Login