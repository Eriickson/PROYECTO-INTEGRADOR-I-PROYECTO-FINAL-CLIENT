import React, { useState } from "react";

// NextJS
import dynamic from "next/dynamic";

// Packages
const ReactApexCharts = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// My Components
import { Card } from "@/components";

const HomePanel: React.FC = () => {
  const [data] = useState({
    options: {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [89, 89, 48, 55, 85, 48, 99, 96],
      },
    ],
  });

  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-12">
        <Card notBorderTop>
          <div className="grid grid-cols-5">
            <div>
              <h2 className="text-sm text-gray-500">Visitas</h2>
              <h4 className="text-3xl font-semibold text-pri-500">258</h4>
            </div>
            <div>
              <h2 className="text-sm text-gray-500">Vehículos</h2>
              <h4 className="text-3xl font-semibold text-pri-500">45</h4>
            </div>
            <div>
              <h2 className="text-sm text-gray-500">Valoración</h2>
              <h4 className="text-3xl font-semibold text-pri-500">
                8.5/<span className="text-xl text-gray-400">10</span>
              </h4>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-span-6">
        <Card notBorderTop>
          <ReactApexCharts series={data.series} options={data} type="area" />
        </Card>
      </div>
      <div className="col-span-6">
        <Card notBorderTop>
          <ReactApexCharts series={data.series} options={data} type="bar" />
        </Card>
      </div>
    </div>
  );
};

export default HomePanel;
