import React, { useState, useEffect} from "react";
import ArticleCard from "./ArticleCard"
import axios from "axios";
import Timeout from "await-timeout"

export default function ArticleList() {
  const [articles, set_articles] = useState()

  const articleButtonHide = () => {
    articles ? set_articles([]) : set_articles(articles)
}

useEffect(() => {
    async function dataFetching() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      console.log("I'm gonna fetch some data!");
      await Timeout.set(2000); // time in milliseconds!
      console.log("Got back:",response.data);
      set_articles(response.data)
    }
    dataFetching();
  }, []);


return (
<div>
  <button on onClick={articleButtonHide}>Clean Notifications</button>
  {!articles ? <h1>loading...</h1> : articles.map((article) => {
      return <div key={article.id}>
          <h5>{article.title}</h5>
          <p>{article.body}</p>
      </div>
  })}
</div>
);
}