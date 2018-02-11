var React = require('react');
var ReactDOM = require('react-dom');
import PCIndex from './components/pc_index.js';
import MBIndex from './components/mb_index.js';
import NewsDetails from './components/pc_news_datails.js';
import MbNewsDetails from './components/mb_news_datails.js'
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';

class Index extends React.Component{
    render(){
        return(
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                <Router  history ={hashHistory}>
                    <Route path="/" component={PCIndex}></Route>
                    <Route path="details/:uniquekey" component={NewsDetails}></Route>
                </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                <Router history={hashHistory}>
                    <Route path="/" component={MBIndex}></Route>
                    <Route path="details/:uniquekey" component={MbNewsDetails}></Route>
                </Router>
                </MediaQuery>
            </div>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('example'))