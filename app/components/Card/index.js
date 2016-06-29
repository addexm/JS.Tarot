import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import imagesSets from './imagesSets.less';

export default class Card extends React.Component {
    static propTypes = {
        card: React.PropTypes.object,
        position: React.PropTypes.number,
        onClick: React.PropTypes.func,
        flipped: React.PropTypes.bool,
        imageSet: React.PropTypes.string
    };

    constructor () {
        super();
        this.state = {
            flipped: true
        };
    }

    componentWillMount(){
        if (typeof this.props.flipped !== 'undefined'){
            this.setState({flipped: this.props.flipped});
        }
    }

    componentWillReceiveProps(nextProps){
        if (this.props.card.index !== nextProps.card.index) {
            this.setState({flipped: true});
        }
        if (typeof this.props.flipped !== 'undefined'){
            this.setState({flipped: this.props.flipped});
        }
    }

    render() {
        var imageSet = 'imageset-' + (this.props.imageset || 'marseilles').toLowerCase();
        return (
            <div className={classNames(styles.card,
                imageSet,
                'card-' + this.props.card.index,
                {'card-inverted': this.props.card.inverted },
                {'card-flipped': this.state.flipped },
                'card-pos' + this.props.position,
                this.props.extraclasses)}
            style={this.props.style}
            onClick={(event) => {
                event.stopPropagation();
                if (this.state.flipped){
                    this.setState({flipped: false});
                }else{
                    if (this.props.onClick){
                        this.props.onClick(this.props.position, this.props.card, this);
                    }
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