import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
  return (
    <div>
      <h1>About this app</h1>
      <p className="my-1">This is a fullstack app for keeping contacts</p>
      <p className="bg-dark p">
        <strong>Version </strong> 1.0.0
      </p>
    </div>
  );
};

About.propTypes = {};

export default About;
