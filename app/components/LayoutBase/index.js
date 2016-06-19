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
            position: -1,
            showingDetails: false,
            cards: null
        };
    }

    showDetails(position, card){
        this.setState({ position: position, card: card, showingDetails: true });
    }

    draw(num){
        this.setState({ cards: Deck.draw(num) });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.shuffle !== this.props.shuffle){
            this.draw(this.state.cards.length);
        }
    }

    render(){
        return(
            <CardDetails position={this.state.position} card={this.state.card} open={this.state.showingDetails} />
        );
    }
}
