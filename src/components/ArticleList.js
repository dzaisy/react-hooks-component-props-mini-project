import React from "react";
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post, index) => (
        <Article key={index} title={post.title} content={post.content} preview={post.preview} date={post.date} />
      ))}
    </main>
  );
};

export default ArticleList;