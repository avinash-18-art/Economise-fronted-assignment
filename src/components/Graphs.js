import React, {useEffect} from 'react'
import Chart from 'chart.js'

const Graphs = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sample Data',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
          },
        ],
      },
    })
  }, [])

  return (
    <div className="graphs">
      <h2>Graphs</h2>
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  )
}

export default Graphs
