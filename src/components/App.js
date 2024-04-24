import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App({}) {
  const posts = [{title: 'post a', content: 'raawr'}, {title: 'post b', content: 'qwaaks'}, {title: 'post c', content: 'mooo'}]
  return (
    <div className="App">
      <header>
        <Header name="dzaisy"/>
      </header>
      <About
        image="https://via.placeholder.com/215"
        about="lalalalalala"
      />
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
