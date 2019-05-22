import React from "react";

export default function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <hr />
      <br />
      <p className="grey-text text-lighten">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        exercitationem repellat esse voluptatum aliquid neque ullam perferendis
        eveniet sunt officiis beatae facilis minus, ducimus vel atque eligendi
        quam, ex non.
      </p>
      <br />
      <hr />
      <br />
      <h5>Version</h5>
      <p className="grey-text text-lighten">1.0.0</p>
      <br />
      <hr />
      <br />
      <p className="grey-text text-lighten-1">
        Created with <i className="material-icons red-text">favorite</i> by{" "}
        <a href="https://www.danielzaharia.com">Daniel Zaharia</a>
      </p>
    </div>
  );
}
