import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import Card from 'components/Card';
import _ from 'underscore';

export default class CardDetails extends React.Component {
    static propTypes = {
        card: React.PropTypes.object,
        position: React.PropTypes.object,
        open: React.PropTypes.bool,
        imageset: React.PropTypes.string
    };

    constructor () {
        super();
        this.state = {
            open: false,
            blown: false,
            scratch: ''
        };
    }

    componentDidMount(){
        this.setState({open: this.props.open });
    }

    componentWillReceiveProps(nextProps){
        if (typeof nextProps.open !== 'undefined'){
            this.setState({open: nextProps.open});
        }

        if (typeof nextProps.card !== 'undefined' && nextProps.card !== null) {
            this.setState({scratch: localStorage.getItem('Card' + nextProps.card.index) || ''});
        }
    }

    render() {
        if (!this.props.card)return null;
        var blownCard = _.extend({}, this.props.card, { inverted: false });
        return (
            <div className={classNames('cardDetails', {'cardDetails-open': this.state.open })} onClick={(event) => { event.stopPropagation(); }}>
                <Card ref="card" card={this.props.card} position={this.props.positions} flipped={false} imageset={this.props.imageset} onClick={() => {
                    this.setState({ blown: !this.state.blown });
                }}/>
                <div className="cardDetails-content cardDetails-notes">
                    <h1>{this.props.card.name}{this.props.card.inverted?' (Reversed)':''}</h1>
                    <b>Divinatory Meanings:</b>
                    <p className={!this.props.card.inverted?'highlighted':''}>{this.props.card.divinatory}</p>
                    <b>Reversed Meanings:</b>
                    <p className={this.props.card.inverted?'highlighted':''}>{this.props.card.reversed}</p>
                    <b>Additional Meanings:</b>
                    <p>{this.props.card.additional || 'N/A'}</p>
                    <b>Description</b>
                    {this.props.card.desciption.map((item, index)=>{
                        return (<p key={index}>{item}</p>)
                    })}
                </div>
                <div className="cardDetails-panel">
                    <div className="cardDetails-content cardDetails-position">
                        <b>Position #{this.props.position.index}</b>
                        <p>{this.props.position.desc}</p>
                    </div>
                    <div className="cardDetails-content cardDetails-scratch">
                        <b>Your Notes:</b><br/>
                        <textarea onChange={(event) => {
                            var data = event.target.value;
                            localStorage.setItem('Card' + this.props.card.index, data);
                            this.setState({ scratch: data });
                        }} value={this.state.scratch}>
                        </textarea>
                    </div>
                </div>
                <i className="ion-ios-close" onClick={() => {
                    this.setState({open: false});
                }} />
                <div className={classNames("cardDetails-blown", { "cardDetails-blown-open": this.state.blown })}
                    onClick={() => {
                        this.setState({ blown: !this.state.blown });
                    }}
                >
                    <Card ref="card" card={blownCard} position={null} flipped={false} imageset={this.props.imageset} onClick={() => {
                        this.setState({ blown: !this.state.blown });
                    }} />
                </div>
            </div>
        );
    }
}
