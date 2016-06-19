import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import CelticCrossLayout from 'components/CelticCrossLayout';
import ThreeCardLayout from 'components/ThreeCardLayout';
import Menu from 'components/Menu';

export default class Board extends React.Component {
    constructor () {
        super();
        this.state = {
            layout: 'CelticCrossLayout',
            shuffle: Date.now()
        };
    }

    render() {
        let layoutComponent = null;
        if (this.state.layout === 'ThreeCardLayout'){
            layoutComponent = <ThreeCardLayout shuffle={this.state.shuffle} />
        }else{
            layoutComponent = <CelticCrossLayout shuffle={this.state.shuffle} />
        }
        return (
            <div className={styles.board}>
                {layoutComponent}
                <Menu setLayout={(layout) => {
                    this.setState({layout: layout});
                }} shuffle={() => {
                    this.setState({shuffle: Date.now()});
                }}/>
            </div>
        );
    }
}
