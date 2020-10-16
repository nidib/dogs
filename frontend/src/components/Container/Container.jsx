import React from 'react';
import PropTypes from 'prop-types';
import { container } from './Container.module.css';

const Container = ({ children, ...rest }) => {
  return (
    <div className={container} {...rest}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Container.defaultProps = {
  style: {},
};

export default Container;
