import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {

  const [articles,setArticles] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);

  const capitalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsed = await data.json();

    setArticles(parsed.articles || []);
    setLoading(false);
    setTotalResults(parsed.totalResults || 0)
    
    props.setProgress(10);
    let progressData = await fetch(url);

    props.setProgress(50);
    // eslint-disable-next-line
    let progressParsed = await progressData.json();

    props.setProgress(100);
  }

  useEffect(()=>{
    document.title = `${capitalized(props.category)} - Universe News`
    updateNews();
    // eslint-disable-next-line
  },[]);
  

  // const handlePrev = async ()=> {
  //   setPage(page - 1);
  //   updateNews();

  // }

  // const handleNxt = async ()=> {

  //   if(page + 1 > Math.ceil(totalResults/props.pageSize)){

  //   }
  //   else{

  //   setPage(page + 1);
  //   updateNews();
  // }
  // }

  const fetchMoredata = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsed = await data.json();

    setArticles(articles.concat(parsed.articles) || []);
    setTotalResults(parsed.totalResults || 0);
    setLoading(false);
  }

    return (
      <>
        <h1 className='text-center' style={{margin: '40px',marginTop: '90px'}}>Daily {capitalized(props.category)} Topheadlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
        dataLength = {articles.length}
            next = {fetchMoredata}
            hasMore = {articles.length !== totalResults}
            loader = {<Spinner/>}
        >   
        <div className='container'>
        <div className='row'>
          {articles.map((elem)=>{
            return <div className='col-md-4' key={elem.url}>
            <NewsItems title={elem.title?elem.title.slice(0,45):""} desc={elem.description?elem.description.slice(0,88):""} imgUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name}/>
          </div>
          })}
      </div>
      </div>
      </InfiniteScroll> 
    </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

export default News
