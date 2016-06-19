import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';

export default class Card extends React.Component {
    static propTypes = {
        card: React.PropTypes.object,
        pos: React.PropTypes.number,
        horizontal: React.PropTypes.bool
    };

    constructor () {
        super();
        this.state = {
            flipped: true
        };
    }

    componentWillReceiveProps(){
        this.setState({flipped: true });
    }

    render() {
        return (
            <div className={classNames(styles.card,
                'card-' + this.props.card.index,
                {'card-inverted': this.props.card.inverted },
                {'card-horizontal': this.props.horizontal },
                {'card-flipped': this.state.flipped },
                this.props.extraclasses)}
            style={this.props.style}
            onClick={() => {
                this.setState({flipped: !this.state.flipped});
            }}>
                <div className="card-back">
                    <h1>{this.props.pos}</h1>
                </div>
                <div className="card-front">
                    <div />
                    <span>{this.props.card.name}</span>
                </div>
            </div>
        );
    }
}