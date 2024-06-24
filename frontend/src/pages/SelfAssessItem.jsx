import React from 'react'

function SelfAssessItem(props) {
  const {name,topicImg}=props
  console.log("Name:",name)
  console.log("Img:",topicImg)
  return (
    <>
        <div className="card" style={{"width": "18rem"}}>
                <img src={topicImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <a href="#" className="btn btn-primary">Start Test</a>
                </div>
            </div>
    </>
  )
}

export default SelfAssessItem
