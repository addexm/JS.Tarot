import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import LayoutBase from 'components/LayoutBase'
import Card from 'components/Card';

export default class OneCardLayout extends LayoutBase {
    componentWillMount(){
        super.draw(1, this.props.allowreversed);
    }

    render() {
        let cards = this.state.cards;
        let superContent = super.render();
        return (
            <div className={classNames('layout', styles.oneCardLayout)} onClick={this.hideDetails.bind(this)}>
                {superContent}
                <div className="col" onClick={this.hideDetails.bind(this, event)}>
                    <Card key="p1" card={cards[0]} position={1} extraclasses="center-vertical" onClick={this.showDetails.bind(this)} imageset={this.props.imageset}/>
                </div>
            </div>
        );
    }
}
