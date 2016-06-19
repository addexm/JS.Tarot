import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';

import Card from 'components/Card';

function CelticCrosssLayout(props) {
    let cards = props.deck.draw(10);
    return (
        <div className={classNames(styles.celticCrossLayout)}>
            <div>
                <Card key="p3" card={cards[3]} pos={4} extraclasses="center-vertical"/>
            </div>
            <div>
                <Card key="p0" card={cards[0]} pos={1} extraclasses="center-vertical" style={{ left: '0%', right: 'auto'}} />
                <Card key="p1" card={cards[1]} pos={2} extraclasses="center-vertical" style={{ right: '0%', left: 'auto'}} />
                <Card key="p2" card={cards[2]} pos={3} style={{ bottom: '0%'}} />
                <Card key="p4" card={cards[4]} pos={5} style={{ top: '0%'}}/>
            </div>
            <div>
                <Card key="p5" card={cards[5]} pos={6} extraclasses="center-vertical"/>
            </div>
            <div>
                <Card key="p7" card={cards[6]} pos={7} style={{ bottom: '0%'}}/>
                <Card key="p8" card={cards[7]} pos={8} style={{ bottom: '20%'}}/>
                <Card key="p9" card={cards[8]} pos={9} style={{ top: '20%'}}/>
                <Card key="p10" card={cards[9]} pos={10} style={{ top: '0%'}}/>
            </div>
        </div>
    );
}

CelticCrosssLayout.propTypes = {
    deck: PropTypes.object.isRequired
};

export default CelticCrosssLayout;
