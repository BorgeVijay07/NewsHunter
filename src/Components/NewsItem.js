import React, { Component } from 'react'

export class NewsItem extends Component {

    

    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
        return (
            <>  <div className='my-3'>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={!imgUrl?"https://images.moneycontrol.com/static-mcnews/2021/08/shutterstock_527211817-770x433.jpg":imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" className="btn btn-primary btn-sm">View More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem