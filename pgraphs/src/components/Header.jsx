import React,{Component} from 'react';
import {Progress,Row,Col} from 'antd';
import PropTypes from 'prop-types';
import './Header.css';

class AppHeader extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Row style={{ boxShadow: 'rgb(136, 136, 136) 2px 3px 8px'}}>
                    <Col span={14} className="header-label">
                        <div>Stock Market Ananlasys</div>                        
                    </Col>
                    <Col span={10} style={{background:'#42f486',height:56,paddingLeft:20,paddingTop:15}}>
                    <Progress percent={75} type="circle"
                          strokeWidth ={5}  width={30}  showInfo={false} className="app-pb-bar" />
                    </Col>
                </Row>               
            </div>
        )
    }

}

AppHeader.propType={
    percent:PropTypes.number
}

export default AppHeader;