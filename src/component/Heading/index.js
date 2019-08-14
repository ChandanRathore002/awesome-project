import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ headingProps, children, as }) => {
  switch (as) {
    case 'h1':
      return <h1 {...headingProps}>{children}</h1>;
    case 'h2':
      return <h2 {...headingProps}>{children}</h2>;
  }
};

Heading.propTypes = {
  headingProps: PropTypes.object,
};

Heading.defaultProps = {
  headingProps: {},
};

export default Heading;
