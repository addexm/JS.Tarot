import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import CelticCrossLayout from 'components/CelticCrossLayout';
import ThreeCardLayout from 'components/ThreeCardLayout';
import AllCardFacesLayout from 'components/AllCardFacesLayout';
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
        }else if (this.state.layout === 'AllCardFacesLayout') {
            layoutComponent = <AllCardFacesLayout shuffle={this.state.shuffle} />
        }else{
            layoutComponent = <CelticCrossLayout shuffle={this.state.shuffle} />
        }
        return (
            <div className={styles.board}>
                {layoutComponent}
                <Menu ref="menu">
                    <div className="form-element">
                        <button onClick={() => {
                            this.setState({shuffle: Date.now()});
                            this.refs.menu.close();
                        }}>
                            <i className="ion-shuffle"/>Shuffle
                        </button>
                    </div>
                    <div className="form-element">
                        <label for="Layout">Layout</label>
                        <select id="Layout" onChange={(event) => {
                            this.setState({layout: event.target.value});
                            this.refs.menu.close();
                        }}>
                            <option value="CelticCrossLayout">Celtic Cross</option>
                            <option value="ThreeCardLayout">Three Card</option>
                            <option value="AllCardFacesLayout">All Card Faces</option>
                        </select>
                    </div>
                </Menu>
            </div>
        );
    }
}
