import React from 'react';
import Highcharts from 'highcharts'
// import highchartsStock from "highcharts/modules/stock";
import HighchartsReact from 'highcharts-react-official'
import styles from './Graph.module.css'


const Graph = (props) => {

  const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  };


  return (<
    div styles={
      styles.maingraph
    } >
    <
      HighchartsReact highCharts={
        Highcharts
      }
      options={
        options
      }
    /> <
    /div>

  )

}

export default Graph;