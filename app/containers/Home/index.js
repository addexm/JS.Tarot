import React from 'react';
import styles from './styles.less';
import Header from 'components/Header';
import Board from 'components/Board';

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                <Header />
                <Board />
            </div>
        );
    }
}
