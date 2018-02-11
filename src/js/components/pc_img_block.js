import React from 'react';
import {Card} from 'antd';
import { Router,Route,Link,browserHistory } from 'react-router';

export default class NewImgBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            news:''
        }
    }

    componentWillMount(){
        var myFetch = {
            method:'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count,myFetch)
        .then(response=>response.json())
        .then(json=>this.setState({news:json}))
    }

    render(){
        const styleImages={
            display:'block',
            width:this.props.imagesWidth,
            height:'90px'
        };
        const styleH3={
            width:this.props.imagesWidth,
            whiteSpace:'nowrap',
            overflow:'hidden',
            textOverflow:'ellipsis'
        };
        const {news} = this.state;
        const newsList = news.length
        ?
        news.map((newsItem,index)=>(
            <div key={index} className="pcImages">
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    <div className="custom-img">
                        <img src={newsItem.thumbnail_pic_s} style={styleImages} />
                    </div>
                    <div className="custom-card">
                      <h3 style={styleH3}>{newsItem.title}</h3>
                      <p>{newsItem.author_name}</p>
                    </div>
                </Link>
            </div>
        ))
        :
        '没有加载新闻'
        return(
            <div className="topList">
                <Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
                    {newsList}
                </Card>
            </div>
        )
    }
}