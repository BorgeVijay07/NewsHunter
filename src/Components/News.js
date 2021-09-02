import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
      
    const updateNews = async() => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `NewsHunter - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
        // eslint-disable-next-line
    }, [])
    
    // const handleNextClick = async() => {
    //     setPage(page + 1);
    //     updateNews();
    // }

    // const handlePrevClick = async() => {
    //     setPage(page - 1);
    //     updateNews();
    // }

    const fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));
        setTotalResults(parseData.totalResults);
      };

        return (
           <>
            {/* With Previous and Next Buttons */}
            {/*<div className="container my-3">
                <h1 className="text-center" style={{margin: '35px 0px'}}>NewsHunter - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                
                {loading && <Spinner/>}
                <div className="row">
                    {!loading && articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                {!loading && <div className="container d-flex justify-content-between">
                    <button disabled={page<=1} type="button" className="btn btn-dark btn-sm" onClick={handlePrevClick()}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark btn-sm" onClick={handleNextClick()}>Next &rarr;</button>
                </div>}
                </div> */}

                {/* Adding Infinite Scroll */}
                <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>NewsHunter - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                    >
                    <div className="container">
                        <div className="row">
                            { articles.map((element)=>{
                                return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
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
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
