import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Index() {

    const [news, setNews] = useState([]);
    const fetchNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=145e00c10f8b47f897066ebaf07208ad').then((response) => {
            setNews(response.data.articles);
        })
    }
    return (
        <div className="container">
            <h1 class="text-center text-light">FAKE NEWS API USING AXIOS</h1>
            <div className="mt-3 row">
                <div className="col-md-12 d-flex justify-content-center align-items-center mx-auto">
                    <button className="btn btn-success w-100" onClick={fetchNews}>Fetch NEWS</button>
                </div>
            </div>
            <div className="row mt-3">
                {
                    news.map((value, index) => {
                        return (
                            <div className="col-md-4 mb-3" key={index}> 
                                <div className="card custom_card">
                                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <Link to={value.url} className="btn btn-warning w-100">Click here</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Index