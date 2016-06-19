import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Deck from '../../deck.js';
import CardDetails from 'components/CardDetails';

export default class LayoutBase extends React.Component {
    static propTypes = {
        shuffle: React.PropTypes.number
    };

    constructor () {
        super();
        this.state = {
            card: null,
            position: null,
            showingDetails: false,
            cards: null
        };
    }

    showDetails(position, card){
        this.setState({ position: this.getPositionData(position), card: card, showingDetails: true });
    }

    getPositionData(num){
        return { index: num, desc: 'No position data available.' };
    }

    draw(num){
        this.setState({ cards: Deck.draw(num) });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.shuffle !== this.props.shuffle){
            this.draw(this.state.cards.length);
            this.setState({ card: null, position: -1, showingDetails: false });
        }
    }

    render(){

        return(
            <CardDetails position={this.state.position} card={this.state.card} open={this.state.showingDetails} />
        );
    }
}
