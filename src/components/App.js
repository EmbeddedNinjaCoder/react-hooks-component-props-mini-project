import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

//console.log(blogData);
//console.log(blogData.name);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About blogImage={blogData.image} blogAbout={blogData.about} />
      <ArticleList />
    </div>
  );
}

export default App;
