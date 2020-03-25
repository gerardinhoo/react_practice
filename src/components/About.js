import React from 'react';

const About = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.image} style={{ width: "50%" }} />
        <h1>{props.name}</h1>
        <h1>{props.nationality}</h1>
      </div>
    </div>
  )
}


export default About;
