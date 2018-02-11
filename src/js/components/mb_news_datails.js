import React from 'react';
import MBHeader from './mbheader.js';
import MBFooter from './mbfoot.js';
import {Row, Col,BackTop} from 'antd';

export default class MbNewsDetails extends React.Component{
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
    render(){
        return(
            <div>
              <MBHeader/>
              <Row> 
                <Col span={24} className="container">
                  <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                  <hr/>
                </Col>
              </Row>
              <MBFooter />
              <BackTop /> 
            </div>
        )
    }
}