import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import Card from 'components/Card';

export default class CardDetails extends React.Component {
    static propTypes = {
        card: React.PropTypes.object,
        position: React.PropTypes.object,
        open: React.PropTypes.bool
    };

    constructor () {
        super();
        this.state = {
            open: false
        };
    }

    componentDidMount(){
        this.setState({open: this.props.open});
    }

    componentWillReceiveProps(nextProps){
        if (typeof nextProps.open !== 'undefined'){
            this.setState({open: nextProps.open});
        }
    }

    render() {
        if (!this.props.card)return null;
        return (
            <div className={classNames('cardDetails', {'cardDetails-open': this.state.open })}>
                <Card card={this.props.card} position={this.props.positions} flipped={false}/>
                <div className="cardDetails-content cardDetails-notes">
                    <b>{this.props.card.name}{this.props.card.inverted?' (Reversed)':''}</b>
                    {this.props.card.notes.map((item, index)=>{
                        let cls = '';
                        if (item.indexOf('Reversed') > -1 && this.props.card.inverted)cls = 'highlighted';
                        return (<p className={cls} key={index}>{item}</p>)
                    })}
                </div>
                <div className="cardDetails-panel">
                    <div className="cardDetails-content cardDetails-position">
                        <b>Position #{this.props.position.index}</b>
                        <p>{this.props.position.desc}</p>
                    </div>
                    <div className="cardDetails-content cardDetails-scratch">
                    </div>
                </div>
                <i className="ion-ios-close" onClick={() => {
                    this.setState({open: false});
                }} />
            </div>
        );
    }
}
