import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import LayoutBase from 'components/LayoutBase'
import Card from 'components/Card';
import _ from 'underscore';

export default class AllCardFacesLayout extends LayoutBase {
    componentWillMount() {
        super.draw(78);
    }

    getPositionData(num) {
        return {index: num, desc: 'No position data available.'};
    }

    render() {
        let cards = this.state.cards;
        let superContent = super.render();
        return (
            <div className={classNames('layout', styles.allCardFacesLayout)}>
                {superContent}
                {_.sortBy(cards, (item) => { return item.index; } ).map((item, index) => {
                    var newCard = _.extend({}, item, { inverted: false });
                    return (
                        <Card key={'P' + index} card={newCard} position={index} onClick={this.showDetails.bind(this)} flipped={false}/>
                    );
                })}
            </div>
        );
    }
}
