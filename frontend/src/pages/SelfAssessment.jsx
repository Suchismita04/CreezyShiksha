import React, { useEffect, useState } from 'react'
import SelfAssessItem from './SelfAssessItem'
import axios from 'axios'

function SelfAssessment() {
    const [assessmentTopic, setAssessmentTopic] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [error, setError] = useState(null)

    const fatchData = async () => {
        try {
            const url = "http://localhost:5173/SampleTopicName.json"
            const res = await axios.get(url)
            // console.log("Data=", res.data)

            if (res.data && res.data.topicName && Array.isArray(res.data.topicName)) {
                setAssessmentTopic(res.data.topicName);
            } else {
                throw new Error("Invalid data structure");
            }

        } catch (err) {
            console.log("error:", err)
            setError(err)
        }
    }

    useEffect(() => {
        fatchData()
    }, [])

    return (
        <>
            {error && <div>Error:{error.message}</div>}
            <div className='d-flex flex-wrap justify-content-center my-3 p-3'>
                {Array.isArray(assessmentTopic) && assessmentTopic.map((element, index) => {
                return <div key={index} className='mx-5 p-1 my-2'>
                    <SelfAssessItem name={element.name} topicImg={element.topicImg} link={element.link} />
                </div>
                 })}
            </div>
           
        </>
    )
}

export default SelfAssessment
