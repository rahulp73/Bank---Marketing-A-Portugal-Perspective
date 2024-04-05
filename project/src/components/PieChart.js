import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ ones, zeroes }) => {
  const options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: "Yes vs No's"
    },
    series: [{
      name: 'Count',
      colorByPoint: true,
      data: [{
        name: 'Yes',
        y: ones
      }, {
        name: 'No',
        y: zeroes
      }]
    }]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
