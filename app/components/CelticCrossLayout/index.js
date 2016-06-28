import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import LayoutBase from 'components/LayoutBase'
import Card from 'components/Card';

export default class CelticCrossLayout extends LayoutBase {
    componentWillMount(){
        super.draw(10);
    }

    getPositionData(num){
        switch(num){
            case 1: return { index: num, desc: 'Present. Where the querent currently is.' };
            case 2: return { index: num, desc: 'Challenges. The problem facing the querent.' };
            case 3: return { index: num, desc: 'Subconscious influences of the querent.' };
            case 4: return { index: num, desc: 'Past. Events leading up tot he present' };
            case 5: return { index: num, desc: 'Goal or aspirations of the querent.' };
            case 6: return { index: num, desc: 'Near future of the querent.' };
            case 7: return { index: num, desc: 'Advice for the querent.' };
            case 8: return { index: num, desc: 'External influences, beyond the control of the querent.' };
            case 9: return { index: num, desc: 'Hopes and/or fears.' };
            case 10: return { index: num, desc: 'Outcome, resolution. ' };
            default: return { index: num, desc: 'No position data available.' };
        }
    }

    render() {
        let cards = this.state.cards;
        let superContent = super.render();
        return (
            <div className={classNames('layout', styles.celticCrossLayout)}>
                {superContent}
                <div className="col">
                    <Card key="p3" card={cards[3]} position={4} extraclasses="center-vertical" onClick={this.showDetails.bind(this)}/>
                </div>
                <div className="col">
                    <Card key="p0" card={cards[0]} position={1} extraclasses="center-vertical" style={{ left: '0%', right: 'auto'}} onClick={this.showDetails.bind(this)}/>
                    <Card key="p1" card={cards[1]} position={2} extraclasses="center-vertical" style={{ right: '0%', left: 'auto'}} onClick={this.showDetails.bind(this)}/>
                    <Card key="p2" card={cards[2]} position={3} style={{ bottom: '0%'}} onClick={this.showDetails.bind(this)}/>
                    <Card key="p4" card={cards[4]} position={5} style={{ top: '0%'}} onClick={this.showDetails.bind(this)}/>
                </div>
                <div className="col">
                    <Card key="p5" card={cards[5]} position={6} extraclasses="center-vertical" onClick={this.showDetails.bind(this)}/>
                </div>
                <div className="col">
                    <Card key="p7" card={cards[6]} position={7} style={{ bottom: '0%'}} onClick={this.showDetails.bind(this)}/>
                    <Card key="p8" card={cards[7]} position={8} style={{ bottom: '20%'}} onClick={this.showDetails.bind(this)}/>
                    <Card key="p9" card={cards[8]} position={9} style={{ top: '20%'}} onClick={this.showDetails.bind(this)}/>
                    <Card key="p10" card={cards[9]} position={10} style={{ top: '0%'}} onClick={this.showDetails.bind(this)}/>
                </div>
            </div>
        );
    }
}
