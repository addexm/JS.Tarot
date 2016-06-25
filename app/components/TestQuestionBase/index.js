import React from 'react';
import styles from './styles.less';

export default class TestQuestionBase extends React.Component {
    static propTypes = {
        score: React.PropTypes.func,
        cards: React.PropTypes.array,
        answer: React.PropTypes.number,
        property: React.PropTypes.string
    };

    constructor () {
        super();
        this.state = {
            scored: false
        };
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.cards !== this.props.cards) {
            this.setState({scored: false});
        }
    }

    setScore(position){
        if (!this.state.scored){
            let correct = position === this.props.answer;
            this.setState({ scored: true });
            this.props.score(correct);
        }
    }
}
