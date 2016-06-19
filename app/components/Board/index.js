import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';

import CelticCrosssLayout from 'components/CelticCrosssLayout';
import ThreeCardLayout from 'components/ThreeCardLayout';
import Deck from '../../deck.js';
import Menu from 'components/Menu';

export default class Board extends React.Component {
    constructor () {
        super();
        this.state = {
            layout: 'CelticCrossLayout',
            deck: Deck
        };
    }

    render() {
        let layoutComponent = null;
        if (this.state.layout === 'ThreeCardLayout'){
            layoutComponent = <ThreeCardLayout deck={this.state.deck}/>
        }else{
            layoutComponent = <CelticCrosssLayout deck={this.state.deck}/>
        }
        return (
            <div className={styles.board}>
                {layoutComponent}
                <Menu setLayout={(layout) => {
                    this.setState({layout: layout});
                }} shuffle={() => {
                    this.setState({deck: Deck});
                }}/>
            </div>
        );
    }
}
