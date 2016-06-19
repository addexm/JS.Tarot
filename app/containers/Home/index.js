import React from 'react';
import styles from './styles.less';
import Board from 'components/Board';

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                <h1>JS Tarot</h1>
                <Board />
            </div>
        );
    }
}
