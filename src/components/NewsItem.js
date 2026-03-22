import React from 'react'

const NewsItem = (props) => {
    let {title, desc, imgUrl, newsUrl, source, author, date} = props;
    return (
      <div  className='my-3'>
        <div className="card">
          <div style = {{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
            <span className='badge rounded-pill bg-danger'> {source}</span>
          </div>
          <img src={imgUrl?imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCPi2Cs_Flg6V7tL-QR9OOkfddsfvsO8pwA&s"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItem
