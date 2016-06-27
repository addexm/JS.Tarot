import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import TestQuestionBase from 'components/TestQuestionBase';
import Card from 'components/Card';

export default class PickCardQuestion extends TestQuestionBase {
    render() {
        let cards = this.props.cards;
        if (!cards)return null;
        return (
            <div className={classNames('testQuestion', styles.pickCardQuestion)}>
                <div>
                    <b>Pick the card that matches the <span>{this.props.property}</span> meaning:</b>
                    <div className="question">
                        <p>{cards[this.props.answer][this.props.property]}</p>
                    </div>
                    <div className="answers">
                        {cards.map((card, index) => {
                            return (
                                <div className={classNames('answer', { 'answer-scored': this.state.scored }, { 'answer-scored-correct': this.state.scored && index === this.props.answer })} key={index}>
                                    <Card card={card} position={index} flipped={false} onClick={(position) => {
                                        this.setScore(position);
                                    }} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
