import React, { useEffect, useContext } from 'react'
import Chart from 'chart.js';

function Charts(props) { 

  useEffect(() => {

    //bar chart    
    new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{ 
            data: [3,5,7,8,4,3,4,5,6,9,3,4],
            label: "Watched",
            borderColor: "#fafafa", 
            fill: true,
            backgroundColor: "#a7ff83"
          }, { 
            data: [5,5,7,8,4,3,4,5,6,9,3,4],
            label: "Rising",
            borderColor: "#fafafa",
            fill: true,
            backgroundColor: "#17b978"  
          }, { 
            data: [3,5,7,8,4,3,4,5,6,9,3,4],
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
            stacked: true,
            barPercentage: 0.1, 
            gridLines: {
              color: '#f5f5f5'
            },
          }],
          yAxes: [{
            stacked: true,
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