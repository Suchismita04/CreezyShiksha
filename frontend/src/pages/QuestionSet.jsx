import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/QuestionSet.css';
import ShowMarks from './ShowMarks';

function QuestionSet(props) {
    const { link } = useParams()
    const [question, setQuestion] = useState([])
    const [error, setError] = useState(null)
    const [totalQ, setTotalQ] = useState(0)
    const [page, setPage] = useState()
    const [checkedOption,setCheckedOption]=useState({})
    const [correctOption,setCorrectOption]=useState()
    const [marks,setMarks]=useState(0)


    const fatchQuestion = async () => {
        try {
            const url = await axios.get(link)
            // console.log("Data:", url.data)
            setQuestion(url.data.jsQSet)
            setTotalQ(url.data.totalQ)
            setPage(0)
          
            // console.log("Using normal way:",url.data.jsQSet[0])
        } catch (error) {
            setError(error)
        }
    }

    //next and previous btns
useEffect(()=>{
  if (question.length>0) {
    // console.log("current q:",question[page])
  }
},[question,page])

    function handleNext () {
    //   console.log("Next")
      if (page<=question.length-1) {
        setPage(prevPage => prevPage + 1)
      
      }
    //   console.log("page from next",question[page+1])
    }

    function handlePrev () {
        // console.log("Previous")
        if (page>0) {
            setPage(prevPage => prevPage - 1)
          }
    }

    useEffect(() => {
        fatchQuestion()
        // console.log("using state:",page)
    }, [link])

    // Options Change Function
   const onSelectHandeler= (event,questionIndex) =>{
       const selectedOption=event.target.value
       
        setCheckedOption(prevCheckedOptions=>({
            ...prevCheckedOptions,[questionIndex]:selectedOption
        }))
        if (selectedOption === question[questionIndex].correctOption ) {
            if (checkedOption[questionIndex] !== question[questionIndex].correctOption  ) {
                
                setMarks(preMarks=>preMarks+1)
            }
           }
           else{
            if (checkedOption[questionIndex] === question[questionIndex].correctOption  ) {
                
                setMarks(preMarks=>preMarks-1)
            }
           }
       
        // console.log("correct Option:",question[questionIndex].correctOption)
        // console.log("Total Marks:",marks)
        // console.log("Option change for question", questionIndex);
        // console.log("Selected option:", selectedOption===question[questionIndex].correctOption);
    }
    
    useEffect(()=>{
        console.log("Marks from useEffect:",marks)
    },[marks])
    useEffect(() => {
        // console.log("checked:", checkedOption); 
    }, [checkedOption]);
    return (
        <>
            {question.length>0 && 
                 (<div className="container text-white" key={page}>
                    <h5 className='question'>{page + 1}){question[page].qName}</h5>
                    {/* <p>{totalQ}</p> */}
                    <ul>
                        {Array.isArray(question[page].options) && question[page].options.map((element, index) => {
                            return <div key={index}>
                                <div className="form-check my-3">
                                    <input onChange={(e)=>onSelectHandeler(e,page)}
                                       value={element}
                                       checked={checkedOption[page] === element}
                                        className="form-check-input dark"
                                        type="radio"
                                        name={`flexRadioDefault${page}`}
                                        id={`flexRadioDefault${page}-${index}`}
                                    />
                                    <label className="form-check-label mx-3" htmlFor={`flexRadioDefault${page}-${index}`}>
                                        {element}
                                    </label>
                                </div>
                            </div>
                        })}
                    </ul>
                </div>
                )
            }
                    <div className="container">
                        <button disabled={page>=question.length-1} type="button" className="btn btn-primary prev" onClick={handleNext}>Next</button>
                        <button disabled={page<=0} type="button" className="btn btn-primary next" onClick={handlePrev}>Previous</button>
                        {page>=question.length-1 && (
                             <Link  type="button" to={`/ShowMarks/:${marks}`} className="btn btn-primary submitQ" data-bs-toggle="tooltip" data-bs-placement="top"
                             data-bs-custom-class="custom-tooltip"
                             data-bs-title="Do you want to submit this exam.">
                             Submit
                             
                         </Link>
                        )}
                    </div>


        </>
    )
}

export default QuestionSet
