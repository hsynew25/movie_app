import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        Hi, I am SY. It is my first React.js Project. If you want to look around
        this project, go Home and click each movie. You can see movie detail. I
        hope you have a nice day. Bye bye.
      </p>
    </div>
  );
}

export default About;
