import React, { useState } from 'react';
import useNewsService from '../hooks/useNewsServices';

const News = () => {
    // State to track the selected category
    const [category, setCategory] = useState("general");

    // Fetching news based on selected category
    const { news, isLoading, isError } = useNewsService(category);

    return (
        <div className='news'>
            {/* Category Dropdown Menu */}
            <div className="mb-3">
                <label className="form-label fw-bold p-2">Select News Category :</label>
                <select 
                    className="form-select shadow-sm"
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {["general", "world", "nation", "business", "technology", "entertainment", "sports", "science", "health"]
                        .map((cat) => (
                            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                        ))}
                </select>
            </div>

            {/* Show Spinner while Loading */}
            {isLoading && (
                <div className="d-flex justify-content-center my-4">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {/* Show Error Message */}
            {isError && <h3 className="text-danger text-center">Error loading news...</h3>}

            {/* News Cards */}
            {!isLoading && !isError && (
                <div className="row gy-2">
                    {news.map((n) => (
                        <div key={n.url} className="col-12 col-sm-12 col-md-4 col-lg-4 p-4">
                            <div className="card shadow h-100 p-4" id="n-card">
                                <img src={n.image} className="card-img-top w-100" alt="News" />
                                <div className="card-body">
                                    <h5 className="card-title">{n?.source?.name}</h5>
                                    <p className="card-text">{n.title}</p>
                                    <a href={n.url} className="btn" id="c-btn" target="_blank" rel="noopener noreferrer">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
            )}
        </div>
    );
}

export default News;
