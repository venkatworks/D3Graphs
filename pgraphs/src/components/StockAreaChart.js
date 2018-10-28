import React,{Component} from 'react';
import { AreaChart,Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';


class StockAreaChart extends Component{

    constructor(props){
        super(props);
        this.setState({
            stockData:[]
        })
    }

    componentDidMount(){
        // this.setState({
        //     stockData:this.props.stockData 
        // })
    }

    componentWillReceiveProps(nextProps){
        // this.setState({
        //     stockData:nextProps.stockData 
        // })
    }
    
    render(){
     const  {stockData,keys,type} = this.props;     
     let areaChartKeys = keys.map((key)=>{ 
         let chart = '';
         switch(type){
            case 'bse':
                chart= <Area type='monotone' dataKey={key} stackId="1" stroke='#ffc658' fill='#ffc658' />
            break;
            case 'dia':
                chart = <Area type='monotone' dataKey={key} stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            break;
            case 'both':
                if(key.includes('bse')){
                    chart = <Area type='monotone' dataKey={key} stackId="1" stroke='#ffc658' fill='#ffc658' />
                }else{
                    chart = <Area type='monotone' dataKey={key} stackId="1" stroke='#82ca9d' fill='#82ca9d' /> 
                }
            break;
         } 
         return chart;
     });
     

     return(
     <div>
        <AreaChart width={600} height={400} data={stockData} className="AreaChart">
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            {areaChartKeys}
        </AreaChart>
    </div>)
    }
}

StockAreaChart.propType={
    stockData: PropTypes.any,
    keys: PropTypes.any,
    type: PropTypes.any
}

export default StockAreaChart;