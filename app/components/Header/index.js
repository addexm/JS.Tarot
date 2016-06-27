import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import Icon from 'components/Icon';

function Header(props) {
  return (
    <h1 className={styles.header}>
        <Icon /> JS Tarot
    </h1>
  );
}

export default Header;
