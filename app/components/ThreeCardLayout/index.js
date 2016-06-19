import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';

import Card from 'components/Card';

function ThreeCardLayout(props) {
    let cards = props.deck.draw(3);
    return (
        <div className={classNames(styles.threeCardLayout)}>
            <div>
                <Card key="p1" card={cards[0]} pos={1} extraclasses="center-vertical"/>
            </div>
            <div>
                <Card key="p2" card={cards[1]} pos={2} extraclasses="center-vertical"/>
            </div>
            <div>
                <Card key="p3" card={cards[2]} pos={3} extraclasses="center-vertical"/>
            </div>
        </div>
    );
}

ThreeCardLayout.propTypes = {
    deck: PropTypes.object.isRequired
};

export default ThreeCardLayout;
