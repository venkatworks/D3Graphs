import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import StockAnalasys from './components/StockAnalasys';
import AppHeader from './components/Header';


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      stockData:[]
    }
  }

  componentDidMount(){
       
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <AppHeader></AppHeader>
        </div>
        <div>
          <StockAnalasys></StockAnalasys>
        </div>
      </React.Fragment>      
    );
  }
}

export default App;
