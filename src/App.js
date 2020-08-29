import React, { useState, useEffect } from 'react';
// import {Button} from '@material-ui/core';
import './App.css';
import News from './Components/News/News';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-29&sortBy=publishedAt&apiKey=3a63e8d3667149988e0c53d08ef57baa";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setArticles(data.articles);
    })
  }, [])

  return (
    <div className="App">
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
