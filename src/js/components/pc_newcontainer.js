import React from 'react';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block.js';
import NewImgBlock from './pc_img_block.js'

export default class PCNewsContainer extends React.Component {
    render() {

    const settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow:1,
        autoplay:true
    };
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
          <div className='left-contains'>
                <Carousel {...settings}>
                   <div><img src="http://img4.imgtn.bdimg.com/it/u=1741114194,2661513872&fm=11&gp=0.jpg"/></div>
                   <div><img src="http://img0.imgtn.bdimg.com/it/u=2995398665,2507124287&fm=26&gp=0.jpg"/></div>
                   <div><img src="http://img0.imgtn.bdimg.com/it/u=3126607402,4264686894&fm=26&gp=0.jpg"/></div>
                   <div><img src="http://img0.imgtn.bdimg.com/it/u=3511527348,3258609760&fm=26&gp=0.jpg"/></div>
                </Carousel>
                <NewImgBlock  count={6} type="guoji" width="400px" cartTitle="国际新闻" imagesWidth="110px"/>
            </div>
            <div className="contains">
              <Tabs className="imgblock" defaultActiveKey="5" >
                <TabPane tab="今日头条" key="1">
                    <PCNewsBlock count={22} type="top" width="100%"  bordered="true"/>
                </TabPane>  
                <TabPane tab="国际" key="2">
                    <PCNewsBlock count={22} type="guoji" width="100%"  bordered="true"/>
                </TabPane>  
                <TabPane tab="社会" key="3">
                    <PCNewsBlock count={22} type="shehui" width="100%"  bordered="true"/>
                </TabPane>  
                <TabPane tab="科技" key="4">
                    <PCNewsBlock count={22} type="keji" width="100%"  bordered="true"/>
                </TabPane>
                <TabPane tab="国内" key="5">
                    <PCNewsBlock count={22} type="guonei" width="100%"  bordered="true"/>
                </TabPane>    
            </Tabs>
            </div>
            <div className="right-contains">
               <NewImgBlock  count={10} type="yule" width="316px"  cartTitle="最新资讯" imagesWidth="110px"/>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}