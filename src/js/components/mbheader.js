import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col ,Modal, Button, Menu, Icon, Input,Form,Tabs,message } from 'antd';

import 'antd/dist/antd.css';
const FormItem = Form.Item;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
 class MBHeader extends React.Component{ 
  constructor(){
     super();
     this.state={
      current:'shehui',
      modalVisible: false,
      action:'login',
      hasLogin:'false',
      userName:'',
      userId:0
     }
  } 
    handleClick(e){
      if (e.key="register") {
        this.setState({
          current:'register'
        });
        this.setModalVisible(true);
      }else{
        this.setState({current:e.key}) 
      }
    };
    setModalVisible(value){
      this.setState({
        modalVisible:value
      })
    }
    handleSubmit(e){
      e.preventDefault();
      var myFetch = {
        method:'GET'
      }
      var formData = this.props.form.getFieldsValue();
      console.log(formData);
      fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
    + "&username="+formData.userName+"&password="+formData.password
    +"&r_userName=" + formData.r_userName + "&r_password="
    + formData.r_password + "&r_confirmPassword="
    + formData.r_confirmPassword, myFetch).
    then(response=>response.json()).then(json=>{
      this.setState({
        userName:json.NickUserName,userId:json.Userid
      });
      message.success("操作成功");
      this.setModalVisible(false);

    })
    }
    login(){
        this.setModalVisible(true);
    }
    callback(key){
        if (key == 1) {
            this.setState({
                action: 'login'
            })
        }else if (key == 2){
            this.setState({
                action: 'register'
           })
        }
    }
    render(){
      let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined?
        <Link>
            <Icon type="inbox" />
        </Link>
        :
        <Icon type="appstore" onClick={this.login.bind(this)}/>
        return (
            <header className="mb_header">
              <a href="/">
                <img src="./src/images/mb_news.png" alt="logo" />
                <h1>ReactNews</h1>
              </a>
                {userShow}
            <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() =>this.setModalVisible(false)} okText = "关闭">
            <Tabs type="card" onClick={this.callback.bind(this)}>
            <TabPane tab="登录" key="1">
                  <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                      <Input placeholder="请输入您的账号" {...getFieldProps('userName')}/>
                    </FormItem>
                    <FormItem label="密码">
                      <Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">登录</Button>
                  </Form>
                </TabPane>
              <TabPane tab="注册" key="2">
                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                  <FormItem label="账户">
                    <Input placeholder="请输入您的帐号" {...getFieldProps('r_userName')} />
                  </FormItem>
                  <FormItem label="密码">
                    <Input placeholder="请输入您的密码" type="password" {...getFieldProps('r_password')} />
                  </FormItem>
                  <FormItem label="在此输入密码">
                    <Input placeholder="请确认您的密码" type="password" {...getFieldProps('r_confirmPassword')} />
                  </FormItem>
                  <Button type="primary" htmlType="submit">注册</Button>
                </Form>
              </TabPane>
              </Tabs>
            </Modal>
            </header>
        );
    };
}
export default MBHeader = Form.create({})(MBHeader);