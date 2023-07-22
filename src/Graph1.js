import React from "react";
import Chart from 'react-apexcharts';

function Stackedbarchart()
{
  const categories1 = [];
  for (let i = 0; i <= 300; i += 100) {
    categories1.push(i);
  }
  const categories2 = [];
  for (let i = 20; i <= 65; i += 5) {
    categories2.push(i);
  }
    return(

            <div className="container-fluid mb-3">

                <Chart
                type="bar"
                width={450}
                height={200}
                series={[

                    {
                        name:"",
                        data:[30,60,150],
                        color: '#06387F'
                    },

                    {
                        name:"",
                        data:[20,30,40],
                        color: '#7f00ff'
                    },
                    {
                        name:"",
                        data:[40,50,60],
                        color: '#87CDEE'
                    },



                ]}

                options={{
                    title:{
                        text:""
                    },
                    chart:{
                        stacked:true,
                    },
                    plotOptions:{
                        bar:{
                            horizontal:false,
                            columnWidth:'40%'
                          }
                    },
                    stroke: {
                        width: 0.4,
                    },
                    xaxis:{
                        title:{},
                        categories: categories2,
                    },
                    yaxis:{
                        title:{

                        },
                          categories: categories1,
                    },
                    legend:{
                        position: 'top'
                    },
                    dataLabels:{
                        enabled:false,
                    },
                    grid: {
                        show:true,
                        xaxis:{
                            lines:{
                                show:false
                            }
                        },
                        yaxis:{
                            lines:{
                                show:true
                            }
                        },borderColor: '#DADADA',
            strokeDashArray: 5,

                    }

                }}

                />
            </div>

    );
}
export default Stackedbarchart;
