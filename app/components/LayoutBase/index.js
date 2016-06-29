import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Deck from '../../deck.js';
import CardDetails from 'components/CardDetails';

export default class LayoutBase extends React.Component {
    static propTypes = {
        shuffle: React.PropTypes.number,
        imageset: React.PropTypes.string,
        allowreversed: React.PropTypes.bool
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

    hideDetails(event){
        if (event)event.stopPropagation();
        this.setState({ showingDetails: false });
    }

    getPositionData(num){
        return { index: num, desc: 'No position data available.' };
    }

    draw(num, allowreversed){
        var ar;
        if (allowreversed === false)ar = false;
        this.setState({ cards: Deck.draw(num, ar) });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.shuffle !== this.props.shuffle || nextProps.allowreversed !== this.props.allowreversed){
            this.draw(this.state.cards.length, nextProps.allowreversed);
            this.setState({ card: null, position: null, showingDetails: false });
        }
    }

    render(){
        return(
            <CardDetails position={this.state.position} card={this.state.card} open={this.state.showingDetails} imageset={this.props.imageset} />
        );
    }
}
