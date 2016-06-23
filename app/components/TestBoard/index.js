import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import Menu from 'components/Menu';
import TestQuestion from 'components/TestQuestion';

export default class TestBoard extends React.Component {
    static propTypes = {
    };

    constructor() {
        super();
        this.state = {
            score: 0,
            count: 0
        };
    }

    render() {
        return (
            <div className={styles.testBoard}>
                <Menu ref="menu">
                    <div className="form-element">
                        <button onClick={() => {
                        this.refs.menu.close();
                    }}>
                            <i className="ion-ios-skipforward"/>Skip Question
                        </button>
                    </div>
                </Menu>
                <TestQuestion />
                <div className="testBoard-score">
                    <span>{this.state.score}</span>
                    <span>/</span>
                    <span>{this.state.count}</span>
                </div>
            </div>
        );
    }
}
