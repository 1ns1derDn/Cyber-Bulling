import React from 'react'
import classNames from 'classnames';

import './Layout.scss';

const Layout = ({ children, ...props }) => (
  <div {...props} className={classNames(
    'container',
    { 'container--auth': props.type === 'auth' },
    { 'container--main': props.type === 'main' })
  }>
    {children}
  </div>
)

export default Layout
