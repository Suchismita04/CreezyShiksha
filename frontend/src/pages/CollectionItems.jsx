import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const CollectionItems = (props) => {

const {title,description,publisher,imageLinks,bookUrl}=props


  return (
    <>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imageLinks} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h5 className="card-title">Created By-{publisher}</h5>
              <p className="card-text">{description}</p>
               <a href={bookUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>

            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default CollectionItems;