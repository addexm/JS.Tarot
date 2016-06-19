import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';

export default class Card extends React.Component {
    static propTypes = {
        card: React.PropTypes.object,
        position: React.PropTypes.number,
        showDetails: React.PropTypes.func.isRequired
    };

    constructor () {
        super();
        this.state = {
            flipped: true
        };
    }

    componentWillReceiveProps(nextProps){
        if (this.props.card.index !== nextProps.card.index) {
            this.setState({flipped: true});
        }
    }

    render() {
        return (
            <div className={classNames(styles.card,
                'card-' + this.props.card.index,
                {'card-inverted': this.props.card.inverted },
                {'card-flipped': this.state.flipped },
                this.props.extraclasses)}
            style={this.props.style}
            onClick={() => {
                if (this.state.flipped){
                    this.setState({flipped: false});
                }else{
                    this.props.showDetails(this.props.position, this.props.card);
                }
            }}>
                <div className="card-back">
                    <h1>{this.props.position}</h1>
                </div>
                <div className="card-front">
                    <div />
                    <span>{this.props.card.name}</span>
                </div>
            </div>
        );
    }
}