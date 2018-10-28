import diaData from '../DIAStockData';
import bseStockData from '../BSEStockData';

function DataService() {
    
    this.getData = function() {
        let stockData = [];
        diaData.forEach((item,i)=>{
            stockData.push(Object.assign({},item,bseStockData[i]))
        })
        return stockData;
    }

  }
  
 export default DataService;