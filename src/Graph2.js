import React from "react";
import Chart from 'react-apexcharts';


export default function Donutchart({data}) {
   // A single data point, representing 75%
  data[1] = 100-data[0]; // Another single data point, representing 25%

  const colors = ['#66DFAB', 'rgb(229, 255, 246)'];



  return (
    <div style={{ width: '10%',paddingLeft:'60px', marginLeft:'30px',marginTop:'-116px'}}>
      <Chart
        type="donut"
        width={130}
        height={130}
        series={data}
        options={{
          plotOptions: {
            pie: {
              donut: {

                labels: {
                  show: true,
                  total: {
                    show: true,
                    showAlways: true,
                    fontSize: '0px',
                    textAlign:'center',
                    formatter: function (val) {
                      // Display the text "70" in the total label
                      return `${data[0]}%`;
                  }
                }
                }
              }
            }
          },
          stroke: {
            width: 4, // Adjust this value to control the thickness of the donut chart
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          colors: colors,
        }}
      />
    </div>
  );
}
