import React from 'react'
import {Link} from 'react-router-dom'


function SelfAssessItem(props) {
  const {name,topicImg,link}=props
  // console.log("link from SAI",link)
  return (
    <>
        <div className="card" style={{"width": "18rem"}}>
                <img src={topicImg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>You have given total 15 questions</p>
                    <Link to={`/QuestionSet/${link}`} className="btn btn-primary">
                       Start Test
                    </Link>
                </div>
            </div>
    </>
  )
}

export default SelfAssessItem
