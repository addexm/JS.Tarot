import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import CelticCrossLayout from 'components/CelticCrossLayout';
import ThreeCardLayout from 'components/ThreeCardLayout';
import TwoCardLayout from 'components/TwoCardLayout';
import OneCardLayout from 'components/OneCardLayout';
import AllCardFacesLayout from 'components/AllCardFacesLayout';
import BoardBase from 'components/BoardBase';
import Menu from 'components/Menu';

export default class Board extends BoardBase {
    constructor () {
        super();
        Object.assign(this.state, {
            layout: 'CelticCrossLayout',
            shuffle: Date.now()
        });
    }

    componentDidMount(){
        super.componentDidMount();
        let savedlayout = localStorage.getItem('savedlayout');
        if (savedlayout){
            this.setState({layout: savedlayout});
        }
    }

    render() {
        let menuItems = (
            <div>
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
                    <select id="Layout" value={this.state.layout} onChange={(event) => {
                        localStorage.setItem('savedlayout', event.target.value);
                        this.setState({layout: event.target.value});
                        this.refs.menu.close();
                    }}>
                        <option value="CelticCrossLayout">Celtic Cross</option>
                        <option value="ThreeCardLayout">Three Card</option>
                        <option value="TwoCardLayout">Two Card</option>
                        <option value="OneCardLayout">One Card</option>
                        <option value="AllCardFacesLayout">All Card Faces</option>
                    </select>
                </div>
            </div>
        );

        let LayoutComponent = null;
        if (this.state.layout === 'ThreeCardLayout'){
            LayoutComponent = ThreeCardLayout;
        }else if (this.state.layout === 'TwoCardLayout') {
            LayoutComponent = TwoCardLayout;
        }else if (this.state.layout === 'OneCardLayout') {
            LayoutComponent = OneCardLayout;
        }else if (this.state.layout === 'AllCardFacesLayout') {
            LayoutComponent = AllCardFacesLayout;
        }else{
            LayoutComponent = CelticCrossLayout;
        }
        return (
            <div className={styles.board}>
                <LayoutComponent shuffle={this.state.shuffle} imageset={this.state.imageset} allowreversed={this.state.allowreversed} />
                {super.renderMenu(menuItems)}
            </div>
        );
    }
}
