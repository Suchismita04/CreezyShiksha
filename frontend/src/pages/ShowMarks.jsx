import React from 'react'
import { PieChart,Pie } from 'recharts'

function ShowMarks(props) {
  const {data}=props;
  console.log("Data from show marks",data)
  return (
    <>
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
      </PieChart>
    </>
  )
}

export default ShowMarks
