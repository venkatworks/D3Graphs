import  React,{Component } from 'react';
import { Select,Row,Col,Radio,Checkbox } from 'antd';
import DataService from '../service/DataService';
import StockAreaChart from './StockAreaChart';


const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Open', 'High', 'Close'];
const defaultCheckedList = ['Open'];


class StockAnalasys extends Component {

    constructor(props){
        super(props);
        this.state={
            stockData:[],
            sensexType:''
        }
    }

    componentDidMount(){
        var dataService = new DataService();
        this.setState({
          stockData : dataService.getData()
        })
    }

    onSensexTypeChnge = (e) => {
        this.setState({
            sensexType:e.target.value
        },()=>{
            let filteredStock = [];
            switch(this.state.sensexType){
                case 1: 
                        filteredStock = this.state.stockData.filter((sData)=>{
                            if(sData.bsetype){
                                return sData;
                            }
                        });
                        this.setState({
                            stockData:filteredStock
                        })
                break;
                case 2:
                        filteredStock =  this.state.stockData.filter((diaData)=>{
                            if(diaData.diaType){
                                return diaData;
                            }
                        });
                        this.setState({
                            stockData:filteredStock
                        })
                break;
                case 3:
                        filteredStock =  this.state.stockData.map((diaData)=>{                           
                            return diaData;
                        });
                        this.setState({
                            stockData:filteredStock
                        })
                break;
                default:
                break;
            }
        })
    }

    render(){
        var date = new Date();
        var dateOptions = [];
        for(var year= date.getFullYear(); year >= date.getFullYear()-5;year--){
            dateOptions.push(<Option key={year}>{year}</Option>);
        }
        return(
            <div>
                <Row >
                    <Col span={6} style={{height:800,borderRight:'1px solid #dcdcdc',boxShadow:'rgb(136, 136, 136) 6px 5px 7px'}}>
                        <Row>
                            <Col style={{paddingLeft:'10px'}}>Filter</Col>
                        </Row>
                        <Row style={{borderBottom:'1px solid #dcdcdc',padding:'20px'}}>
                            <Col span={10}>
                                Year
                            </Col>
                            <Col span={14}>
                                <Select style={{ width: 120 }}>
                                    {dateOptions}
                                </Select>
                            </Col>                            
                        </Row>
                        <Row>
                            <Col style={{paddingLeft:'20px',paddingTop:'10px'}}>Sensex</Col>
                        </Row>
                        <Row style={{borderBottom:'1px solid #dcdcdc',padding:'20px'}}>
                            <RadioGroup onChange={this.onSensexTypeChnge}>
                                <Radio value={1}>BSE</Radio>
                                <Radio value={2}>DIA</Radio>
                                <Radio value={3}>BSE AND DIA</Radio>
                            </RadioGroup>
                        </Row>
                        <Row style={{padding:'20px'}}>
                            <Checkbox indeterminate={this.state.indeterminate}
                                onChange={this.onCheckAllChange}
                                checked={this.state.checkAll}>
                                Check all Parameters
                            </Checkbox>
                        </Row>
                        <Row style={{padding:'20px'}}>
                            <CheckboxGroup options={plainOptions} />
                        </Row>
                    </Col>
                    <Col span={18} style={{textAlign:'center',paddingTop:'60px',paddingLeft:'120px'}}>
                        <StockAreaChart stockData={this.state.stockData}></StockAreaChart>
                    </Col>
                </Row>    
            </div>
      )}

}

export default StockAnalasys;
