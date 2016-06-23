import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.less';
import Header from 'components/Header';
import TestBoard from 'components/TestBoard';

export default class Test extends React.Component {
    render() {
        return (
            <div className={styles.test}>
                <Header />
                <TestBoard />
            </div>
        );
    }
}
