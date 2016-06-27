import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import TestQuestionBase from 'components/TestQuestionBase';
import Card from 'components/Card';

export default class PickDescQuestion extends TestQuestionBase {
    render() {
        let cards = this.props.cards;
        if (!cards)return null;
        return (
            <div className={classNames('testQuestion', styles.pickDescQuestion)}>
                <div>
                    <b>Pick the <span>{this.props.property}</span> meaning that matches the card:</b>
                    <div className="row">
                        <div className="question">
                            <Card card={cards[this.props.answer]} position={0} flipped={false} />
                        </div>
                        <div className="answers">
                            {cards.map((card, index) => {
                                return (
                                    <div className={classNames('answer', { 'answer-scored': this.state.scored }, { 'answer-scored-correct': this.state.scored && index === this.props.answer })} key={index}
                                    onClick={() => {
                                        this.setScore(index);
                                    }}
                                    >
                                        <p>{index + 1}. {card[this.props.property]}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
