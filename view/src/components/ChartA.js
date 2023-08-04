import React ,{ PureComponent } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  const data = [
    {
      name: "Sat",
      JobView: 22,
      JobApplied: 32,
      amt: 2400
    },
    {
      name: "Sun",
      JobView: 12,
      JobApplied: 10,
      amt: 2210
    },
    {
      name: "Mon",
      JobView: 42,
      JobApplied: 20,
      amt: 2290
    },
    {
      name: "Tue",
      JobView: 33,
      JobApplied: 15,
      amt: 2000
    },
    {
      name: "Wed",
      JobView: 12,
      JobApplied: 10,
      amt: 2181
    },
    {
      name: "Thu",
      JobView: 43,
      JobApplied: 15,
      amt: 2500
    },
    {
      name: "Fri",
      JobView: 23,
      JobApplied: 10,
      amt: 2100
    }
  ];
  


export default function CahrtA() {

  return (
    <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="JobApplied" fill="#8884d8" />
    <Bar dataKey="JobView" fill="#82ca9d" />
  </BarChart>
);
}
