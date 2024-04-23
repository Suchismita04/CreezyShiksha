import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Cards.css"

const CollectionItems = (props) => {

  const { title, description, publisher, imageLinks, bookUrl } = props


  return (
    <>
    
      <div className="card mx-3 my-2 mb-3" style={{"width":"16rem","flex":"1" }}>
        <img src={imageLinks?imageLinks:""} className="card-img-top img-fluid fs-6" alt="..." style={{"height":"auto"}}/>
        <div className="card-body fs-6 ">
          <h5 className="card-title fs-6">{title}</h5>
          {/* <h4 className="card-text">Created By-{publisher}</h4> */}
          <p className="card-text fs-6">{description}...</p>
          <a href={bookUrl} className="btn btn-primary">Read More</a>
        </div>
      </div>

    </>
  )

}

export default CollectionItems;