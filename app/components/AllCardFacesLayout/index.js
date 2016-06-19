import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import LayoutBase from 'components/LayoutBase'
import Card from 'components/Card';

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
            <div className={classNames(styles.allCardFacesLayout)}>
                {superContent}
                {cards.map((item, index) => {
                    var newCard = 
                    return (
                        <Card key={'P' + index} card={item} position={index} showDetails={this.showDetails.bind(this)} flipped={false}/>
                    );
                })}
            </div>
        );
    }
}
