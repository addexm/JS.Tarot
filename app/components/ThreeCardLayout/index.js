import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import LayoutBase from 'components/LayoutBase'
import Card from 'components/Card';

export default class ThreeCardLayout extends LayoutBase {
    componentWillMount(){
        super.draw(3);
    }

    render() {
        let cards = this.state.cards;
        let superContent = super.render();
        return (
            <div className={classNames(styles.threeCardLayout)}>
                {superContent}
                <div className="col">
                    <Card key="p1" card={cards[0]} position={1} extraclasses="center-vertical" showDetails={this.showDetails.bind(this)}/>
                </div>
                <div className="col">
                    <Card key="p2" card={cards[1]} position={2} extraclasses="center-vertical" showDetails={this.showDetails.bind(this)}/>
                </div>
                <div className="col">
                    <Card key="p3" card={cards[2]} position={3} extraclasses="center-vertical" showDetails={this.showDetails.bind(this)}/>
                </div>
            </div>
        );
    }
}
