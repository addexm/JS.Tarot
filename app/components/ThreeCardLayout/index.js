import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import LayoutBase from 'components/LayoutBase'
import Card from 'components/Card';

export default class ThreeCardLayout extends LayoutBase {
    componentWillMount(){
        super.draw(3);
    }

    getPositionData(num){
        switch(num){
            case 1: return { index: num, desc: 'Mind, Past, Background. ' };
            case 2: return { index: num, desc: 'Body, Present, Problem.' };
            case 3: return { index: num, desc: 'Spirit, Future, Advice' };
        }
    }

    render() {
        let cards = this.state.cards;
        let superContent = super.render();
        return (
            <div className={classNames('layout', styles.threeCardLayout)} onClick={this.hideDetails.bind(this)}>
                {superContent}
                <div className="col" onClick={this.hideDetails.bind(this, event)}>
                    <Card key="p1" card={cards[0]} position={1} extraclasses="center-vertical" onClick={this.showDetails.bind(this)} imageset={this.props.imageset}/>
                </div>
                <div className="col" onClick={this.hideDetails.bind(this, event)}>
                    <Card key="p2" card={cards[1]} position={2} extraclasses="center-vertical" onClick={this.showDetails.bind(this)} imageset={this.props.imageset}/>
                </div>
                <div className="col" onClick={this.hideDetails.bind(this, event)}>
                    <Card key="p3" card={cards[2]} position={3} extraclasses="center-vertical" onClick={this.showDetails.bind(this)} imageset={this.props.imageset}/>
                </div>
            </div>
        );
    }
}
