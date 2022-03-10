import React from "react";
import {Bar,Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto'
function Gia(){
 
    return(
        <div className="chart-electron">
            <Line
            data={{
                labels:['Jan', 'feb','Mar' ,'Apr','May', 'Jun', 'July','Aug','Sep', 'Oct', 'Nov', 'Dec'],
                datasets:[{
                    data:[100,300,300,400,500,500,100,300,300,400,500,600],
                    backgroundColor:"orange",
                    borderColor:"black",
                    

                }]
            }}
            options ={{
                scales:{
                    xAxes:[
                        {
                            scaleLabel:{
                                lableString : 'Month',
                                display : true,


                            }
                        }
                    ],
                    yAxes:[
                        {
                            scaleLabel:{
                                labelString : 'dien nang tieu thu',
                                display : true,

                            },
                            ticks:{
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }}
            >
            </Line>
        </div>
       
    )
}
export default Gia;