import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import Deck from '../../deck.js';
import Card from 'components/Card';

export default class TestQuestion extends React.Component {
    static propTypes = {
        score: React.PropTypes.func
    };

    render() {
        let cards = Deck.draw(3, true);
        let selected = Math.floor(Math.random() * 3);
        return (
            <div className={styles.testQuestion}>
                <div className="question">
                    <b>Pick the card that matches the description:</b><br/>
                    <p>{cards[selected].notes[0]}</p>
                </div>
                <div className="answers">
                    {cards.map((card, index) => {
                        return (
                            <div className="col">
                                <Card key={index} card={card} position={index} flipped={false} onClick={(position) => {
                                    console.log(position, selected);
                                }} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
