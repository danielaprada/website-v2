import React from 'react';
import styled from 'styled-components';
import {graphql} from 'gatsby';
import PropTypes from 'prop-types';
import '../../assets/css/bootstrap.min.css';

const Credentials = (props) => (
  <>
    {/* <div>
      {data.allMarkdownRemark.edges.map((item) => (
        <div key={item.node.id}>{item.node.frontmatter.name}</div>
      ))}
    </div> */}
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Credentials</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="row">
            <span>Rated </span>{props.rating}
          </div>
          <div className="row">
            <div className="col-4">
              <img src={props.googleImage} width="72" />
            </div>
            <div className="col-4">
              {props.switchImage}
            </div>
            <div className="col-4">
              {props.reportImage}
            </div>
          </div>
        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
        <div className="col-3">

        </div>
      </div>
    </div>
  </>
);


export default Credentials;
Credentials.propTypes = {
  rating: PropTypes.string.isRequired,
  googleImage: PropTypes.string,
  switchImage: PropTypes.string,
  reportImage: PropTypes.string,
};
