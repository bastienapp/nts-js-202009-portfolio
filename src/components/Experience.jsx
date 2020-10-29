import React from 'react';

const Experience = (props) => {

  return <section className="Experience">
    <h2>{props.year}</h2>
    <h3>{props.company}</h3>
    <p>{props.job}</p>
  </section>
}

export default Experience;