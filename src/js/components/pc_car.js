import React from 'react';
import {Row,Col,Carousel} from 'antd';
export default class PCFooter extends React.Component {
  render(){
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="imgCar">
            <Carousel autoplay>
                <div><img src="./src/images/1.jpg" /></div>
                <div><img src="./src/images/2.jpg" /></div>
                <div><img src="./src/images/3.jpg" /></div>
                <div><img src="./src/images/4.jpg" /></div>
              </Carousel>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}