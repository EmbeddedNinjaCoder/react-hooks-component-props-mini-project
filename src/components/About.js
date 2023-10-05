import React from "react";

function About(props) {
  return (
    <aside>
      <img
        src={props.blogImage}
        placeholder="https://via.placeholder.com/215"
        alt="blog logo"
      ></img>
      <p>{props.blogAbout}</p>
    </aside>
  );
}

export default About;
