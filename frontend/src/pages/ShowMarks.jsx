import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Tooltip, Legend, Pie, PieChart, Cell } from 'recharts'

function ShowMarks(props) {
  const { marks } = useParams();
  let parsedMarks = []
  const navigate=useNavigate()

  console.log("Marks only:", marks)
  try {
    parsedMarks = JSON.parse(marks)
  } catch (error) {
    console.log("Invalid json format in marks", marks)
  }
  console.log("parsedMarks from show marks", parsedMarks)
  const colorPicker = ['#ffc107', '#0dcaf0']
  const fillColor = colorPicker.map((element, index) => {
    console.log(element)
    return element
  })

  useEffect(()=>{
   const handlePopState=(event)=>{
    navigate('/selfAssessment')
   }
   window.addEventListener('popstate',handlePopState)

   return ()=>{
    window.removeEventListener('popstate',handlePopState)
   }
  },[navigate])

  useEffect(() => {
    if (location.action === 'POP') {
      navigate('/self-assessment');
    }
  }, [location, navigate]);

  return (
    <>
      <h3 style={{'color':'white'}}>Your Progress report</h3>
      {/* <div>{doughnutData}</div> */}
      {/* <DoughnutChart width={400} height={400}>
      <Doughnut data={parsedMarks}/>
      <Legend/>
      <Tooltip/>
    </DoughnutChart> */}


      {parsedMarks.length > 0 ? (<PieChart width={400} height={400}>
        <Pie
          data={parsedMarks}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius={100} // This makes it a doughnut chart
          label
        >
        {parsedMarks.map((element, index) => (
          <Cell key={`cell-${index}`} fill={colorPicker[index % colorPicker.length]}></Cell>
        ))}
        
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>) : (
        <p>No data available to display the chart.</p>
      )}
      {/* {Array.isArray(parsedMarks) && parsedMarks.map((element,index)=>{
        return <div key={index}>{element.value}</div>
      })} */}
    </>
  )
}

export default ShowMarks
