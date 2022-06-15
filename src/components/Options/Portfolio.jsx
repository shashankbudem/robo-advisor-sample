import {Doughnut} from 'react-chartjs-2';
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Portfolio = (props) => {
    const [show, setShow] = React.useState(false)
  
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true)
      }, 5000)
  
      return () => clearTimeout(timeout)
  
    }, [show])
  
    if (!show) return null
    return(
    <Doughnut
      data={{
        labels: ['Stocks', 'Mutual Funds', 'Debt', 'Cash'],
        datasets: [
          {
            label: 'Asset allocation',
            data: [19, 31, 40, 10],
            backgroundColor: ['rgba(215,40,40,255)',
            'rgba(246,127,0,255)',
            'rgba(0,46,72,255)',
            'rgba(38,50,56,255)'
            ],
            hoverOffset: 30,
            borderColor: ['#000000',
            '#000000',
            '#000000',
            '#000000'
            ],
            borderWidth: 0.1,
          },
        ]
        }}
        options={{
            tooltips: {
                enabled: true
            },
        // plugins:[ChartDataLabels],
        plugins: {
            datalabels: {
              color: 'white',
            //   labels: {
            //     title: {
            //       font: {
            //         weight: 'bold'
            //       }
            //     }
            //   }
            }
          },
          responsive:true,
          legend: {
            position: 'Right',
           },
          animation: {
            animateScale: true,
            animateRotate: true
           },
          title:{
              text:'Asset Allocation',
              display: true
          }
      }}
      />
      )
  }
  export default Portfolio;