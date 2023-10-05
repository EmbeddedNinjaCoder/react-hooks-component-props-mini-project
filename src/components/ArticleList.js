import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

//console.log(blogData.posts);

const blogEntries = blogData.posts;

console.log(blogEntries);

function ArticleList() {
  const post = blogEntries.map((element) => {
    return (
      <Article
        key={crypto.randomUUID()}
        title={element.title}
        date={element.date}
        preview={element.preview}
      />
    );
  });

  console.log(post);
  return <main>{post}</main>;
}

export default ArticleList;
