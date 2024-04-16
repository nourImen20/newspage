import React, { useState } from 'react';
import './toparticles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Article from './Article'; 
import articles from './articlesData';

const ArticlesList = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  // Set the current date for articles with no date property
  const updatedArticles = articles.map((article) => ({
    ...article,
    date: article.date || currentDate,
  }));

  // Filter articles to include only those with the current date
  const topArticles = updatedArticles.filter((article) => article.date === currentDate).slice(0, 2); // Limiting it to show just two articles 

  // State to store the filtered articles for "All articles" section
  const [filteredArticles, setFilteredArticles] = useState(updatedArticles.filter(article => !topArticles.includes(article)));

  // Function to filter articles by category
  const filterItems = (catItem) => {
    const updateItems = updatedArticles.filter((curtItem) => curtItem.type === catItem && !topArticles.includes(curtItem));
    setFilteredArticles(updateItems);
  };

  return (
    <div>
      <div id='top' className='Toparticles-container'>
        <div className="d-flex justify-content-between d-grid">
          <div className='Top-article align-items-center ms-5 my-4'> 
            <span>Latest news</span>
          </div>
        </div>
        {/* Top Articles */}
        {topArticles.map((article, index) => (
          <React.Fragment key={index}>
            <Article article={article} layout="right" />
            {index < topArticles.length - 1 && <div className="article-spacing"></div>}
          </React.Fragment>
        ))}
        <hr className="my-4 mx-auto custom-hr" style={{ borderTop: '1px solid black'}} />
      </div>
      
      <div className='Allarticles-container' id='all'>
        {/* All Articles */}
        <div className="d-flex justify-content-between d-grid">
          <div className='d-flex Top-article justify-content-center align-items-center ms-5 mb-4'> 
            <span>All articles</span>
          </div>
          <div className="dropdown-filter d-md-flex justify-content-md-end align-items-center me-5 mb-4">
            <button type="button" className="btn btn-dark dropdown-toggle px-4" data-bs-toggle="dropdown" aria-expanded="false">
              Filter  
            </button>
            <ul className="dropdown dropdown-menu">
              <li><button className="dropdown-item" onClick={() => setFilteredArticles(updatedArticles.filter(article => !topArticles.includes(article)))}>All</button></li>
              <li><button className="dropdown-item" onClick={() => filterItems("tech")}>Technology</button></li>
              <li><button className="dropdown-item" onClick={() => filterItems("education")}>Education</button></li>
              {/* Add more categories as needed */}
            </ul>
          </div>
        </div>
        {/* Render filtered articles */}
        {filteredArticles.map((article, index) => (
          <React.Fragment key={index}>
            <Article article={article} layout="left" />
            {index < filteredArticles.length - 1 && <div className="article-spacing"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
