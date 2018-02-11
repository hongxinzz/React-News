import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCHeader from './pcheader.js';
import PCFooter from './pcfoot.js';
import NewImgBlock from './pc_img_block.js';

export default class NewsDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      newsItem: ''
    };
  };
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + " - React News | 基于React的新闻平台 "
    })
  }
  createMarkup() {
    return {__html: this.state.newsItem.pagecontent}
  }
  render() {
    return (
      <div>
        <PCHeader/>
        <Row> 
          <Col span={2}></Col>
          <Col span={14} className="container">
            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            <hr/>
          </Col>
          <Col span={1}></Col>
          <Col span={6}>
            <NewImgBlock count={20} type="keji" width="80%" cartTitle="相关新闻" />
          </Col>
        </Row>
        <PCFooter />
        <BackTop /> 
      </div>
    );
  }
}