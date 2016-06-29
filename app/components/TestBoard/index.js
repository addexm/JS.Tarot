import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import Menu from 'components/Menu';
import Deck from '../../deck.js';
import BoardBase from 'components/BoardBase';
import PickCardQuestion from 'components/PickCardQuestion';
import PickDescQuestion from 'components/PickDescQuestion';


export default class TestBoard extends BoardBase {
    constructor() {
        super();
        Object.assign(this.state, {
            score: 0,
            count: 0,
            cards: null,
            answer: 0,
            type: 0,
            property: null,
            mode: 'Random'
        });
    }

    componentDidMount(){
        super.componentDidMount();
        let stored = localStorage.getItem('score');
        if (stored){
            this.setState(JSON.parse(stored));
        }
        this.nextQuestion();
    }

    getRand(ceil){
        return Math.floor(Math.random() * ceil);
    }

    nextQuestion(){
        let inversion = this.state.allowreversed === false ? false : this.getRand(2) === 1;
        let newCards = Deck.draw(3, inversion);
        this.setState({
            cards: newCards,
            answer: this.getRand(3),
            type: this.getRand(2),
            property: inversion ? 'reversed' : 'divinatory'
        });
    }

    score(isCorrect){
        let count = this.state.count + 1;
        let score = isCorrect ? this.state.score + 1 : this.state.score;
        let newState = { count: count , score: score };
        this.setState(newState);
        localStorage.setItem('score', JSON.stringify(newState));
        window.setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    resetScore(){
        let newState = { count: 0, score: 0 };
        this.setState(newState);
        localStorage.setItem('score', JSON.stringify(newState));
    }

    render() {
        let Qtype = null;
        if (this.state.mode === 'Random'){
            if (this.state.type === 0){
                Qtype = PickCardQuestion;
            }else{
                Qtype = PickDescQuestion;
            }
        } else if (this.state.mode === 'PickCard'){
            Qtype = PickCardQuestion;
        }else{
            Qtype = PickDescQuestion;
        }

        let menuItems = (
            <div>
                <div className="form-element">
                    <label for="TestMode">Test Mode</label>
                    <select id="TestMode" onChange={(event) => {
                            this.setState({mode: event.target.value});
                            this.nextQuestion();
                            this.refs.menu.close();
                        }}>
                        <option value="Random">Random</option>
                        <option value="PickCard">Pick a Card</option>
                        <option value="PickDesc">Pick a Meaning</option>
                    </select>
                </div>

                <div className="form-element">
                    <button onClick={() => {
                            this.nextQuestion();
                            this.refs.menu.close();
                        }}>
                        <i className="ion-ios-skipforward"/>Skip Question
                    </button>
                </div>
                <div className="form-element">
                    <button onClick={() => {
                            this.resetScore();
                            this.refs.menu.close();
                        }}>
                        <i className="ion-refresh"/>Reset Score
                    </button>
                </div>
            </div>
        );

        return (
            <div className={styles.testBoard}>
                {super.renderMenu(menuItems)}
                <Qtype cards={this.state.cards} answer={this.state.answer} property={this.state.property} imageset={this.state.imageset} score={(isCorrect) => {
                    this.score(isCorrect);
                }}/>
                <div className="testBoard-score">
                    <span>{this.state.score}</span>
                    <span>/</span>
                    <span>{this.state.count}</span>
                </div>
            </div>
        );
    }
}
