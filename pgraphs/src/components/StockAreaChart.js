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
     const  {stockData} = this.props;
     return(
     <div>
        <AreaChart width={600} height={400} data={stockData} className="AreaChart">
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='Date' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='diaOpen' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='diaHigh' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='diaLow' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='diaClose' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='bseOpen' stackId="1" stroke='#ffc658' fill='#ffc658' />
            <Area type='monotone' dataKey='bseHigh' stackId="1" stroke='#ffc658' fill='#ffc658' />
            <Area type='monotone' dataKey='bseLow' stackId="1" stroke='#ffc658' fill='#ffc658' />
            <Area type='monotone' dataKey='bseClose' stackId="1" stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
    </div>)
    }
}

StockAreaChart.propType={
    stockData: PropTypes.any
}

export default StockAreaChart;