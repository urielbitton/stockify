import React, { useEffect, useContext } from 'react'
import Chart from 'chart.js';

function Charts(props) { 

  useEffect(() => {

    //bar chart    
    new Chart(document.getElementById("line-chart"), {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{ 
            data: [14,16,18,11,21,23,27,23,11,20,14,13],
            label: "Watched",
            borderColor: "#fafafa", 
            fill: true,
            backgroundColor: "#a7ff83"
          }, {  
            data: [5,3,17,18,14,13,14,15,6,19,26,4],
            label: "Rising",
            borderColor: "#fafafa",
            fill: true,
            backgroundColor: "#17b978"  
          }, { 
            data: [23,25,27,28,24,23,4,5,16,19,3,4],
            label: "Falling",
            borderColor: "#fafafa",
            fill: true,
            backgroundColor: "#086972"   
          }
        ]   
      },      
      options: { 
        responsive:true,
        maintainAspectRatio: false,
        title: {
          display: false,
        },
        scales:{
          xAxes: [{
            barPercentage: 0.1, 
            gridLines: {
              color: '#f5f5f5'
            },
          }],
          yAxes: [{
            gridLines: {
              color: '#f5f5f5'
            },
          }]
        }
      }
    });  
    
 
  },[])

  return (
    <>
      <canvas id={props.type}></canvas>
    </> 
  )
}

export default Charts