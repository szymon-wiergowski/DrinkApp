import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";

const data = [
  {
    name: "styczeń",
    pv: 12
  },
  {
    name: "luty",
    pv: 15
  },
  {
    name: "marzec",
    pv: 20
  },
  {
    name: "kwiecień",
    pv: 40
  },
  {
    name: "maj",
    pv: 50
  },
  {
    name: "czerwiec",
    pv: 80
  }
];

export default class BarChartHasBackground extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/q4eonc12/";

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <p
          style={{
            marginBottom: "15%"
          }}
        >
          Planowana liczba drinków w I kw. 2020 r.
        </p>
        <BarChart
          width={600}
          height={270}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <Legend verticalAlign="top" height={30} />

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" name="DRINKI" fill="#0088FE">
            <LabelList dataKey="pv" position="top" />
          </Bar>
        </BarChart>
      </div>
    );
  }
}
