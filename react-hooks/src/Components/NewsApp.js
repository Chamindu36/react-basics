import React, { Component, useState, useEffect } from "react";

const NewsApp = () => {
  // State
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );

  var newsss;
  // Fetch news
  const fetchNews = () => {
    setLoading(true);

    fetch(url)
      .then((result) => result.json())
      .then((data) => setNews(data.hits))
      .catch((error) => console.log(error));
    console.log(news);

    // setNews(newsss.hits);
  };

  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
  };

  return (
    <div>
      <h2>News</h2>
      {loading ? <h3> Loading.....</h3> : ""}

      <form onSubmit={handleOnSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button> Search</button>
      </form>
      {news != [] &&
        news.map((n, i) => {
          <p key={i}> {n.title} </p>;
        })}
    </div>
  );
};

export default NewsApp;
