import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './Layer.scss';

const layer = (props) => (
  <div {...props} className={classNames("layer", props.className)} />
)

layer.propTypes = {
  className: PropTypes.string
};

export default layer
