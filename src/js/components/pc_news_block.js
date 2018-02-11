import React from 'react';
import {Card} from 'antd';
import { Router,Route,Link,browserHistory } from 'react-router';

export default class NewBlock extends React.Component{

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
        const {news} = this.state;
        const newsList = news.length
        ?
        news.map((newsItem,index)=>(
            <li key={index}>
                <Link to={`/details/${newsItem.uniquekey}`} >
                        {newsItem.title}
                </Link>
            </li>
        ))
        :
        '没有加载新闻'
        return(
            <div className="newsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}