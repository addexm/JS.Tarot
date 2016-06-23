import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';

function Header(props) {
  return (
    <h1 className={styles.header}>
        JS Tarot
    </h1>
  );
}

export default Header;
