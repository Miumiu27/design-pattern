import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts'; 

const Graphique: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: ApexCharts | null = null;

    // Logique de configuration du graphique ApexCharts (Graphique des profits)
    const profitChartOptions: ApexCharts.ApexOptions = {
      series: [
        { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
        { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
      ],
      chart: {
        type: "bar",
        height: 352,
        offsetX: -15,
        toolbar: { show: true },
        foreColor: "#adb0bb",
        fontFamily: 'inherit',
        sparkline: { enabled: false },
      },
      colors: ["#5D87FF", "#49BEFF"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
          borderRadius: 6,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all'
        },
      },
      markers: { size: 0 },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        borderColor: "rgba(0,0,0,0.1)",
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        type: "category",
        categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
        labels: {
          style: { cssClass: "grey--text lighten-2--text fill-color" },
        },
      },
      yaxis: {
        show: true,
        min: 0,
        max: 400,
        tickAmount: 4,
        labels: {
          style: {
            cssClass: "grey--text lighten-2--text fill-color",
          },
        },
      },
      stroke: {
        show: true,
        width: 3,
        lineCap: "butt",
        colors: ["transparent"],
      },
      tooltip: { theme: "light" },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            plotOptions: {
              bar: {
                borderRadius: [5],
              }
            },
          }
        },
        {
          breakpoint: 600,
          options: {
            plotOptions: {
              bar: {
                borderRadius: [3],
              }
            },
          }
        },
      ]
    };

    // Render the profit chart
    const renderProfitChart = () => {
      if (chartRef.current) {
        chart = new ApexCharts(chartRef.current, profitChartOptions);
        chart.render();
      }
    };

    renderProfitChart();

    // Cleanup function to destroy the chart
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className="col-span-2">
      <div className="card">
        <div className="card-body">
          <div className="sm:flex block justify-between mb-5">
            <h4 className="text-gray-600 text-lg font-semibold sm:mb-0 mb-2">Sales Overview</h4>
            <select name="cars" id="cars" className="border-gray-400 text-gray-500 rounded-md text-sm border-[1px] focus:ring-0 sm:w-auto w-full">
              <option value="volvo">March2023</option>
              <option value="saab">April2023</option>
              <option value="mercedes">May2023</option>
              <option value="audi">June2023</option>
            </select>
          </div>
          <div ref={chartRef}></div> {/* Only the first chart is rendered here */}
        </div>
      </div>
    </div>
  );
}

export default Graphique;
