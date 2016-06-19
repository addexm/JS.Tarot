import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';

export default class Menu extends React.Component {
    static propTypes = {
        setLayout: React.PropTypes.func.isRequired,
        shuffle: React.PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    delayClose(){
        window.setTimeout(() => {
            this.setState({open: !this.state.open});
        }, 300);
    }

    render() {
        return (
            <div className={classNames(styles.menu, {'menu-open': this.state.open})}>
                <i className="ion-navicon-round" onClick={() => {
                    this.setState({open: !this.state.open});
                }}/>
                <div>
                    <div className="form-element">
                        <button onClick={() => {
                            this.props.shuffle();
                            this.delayClose();
                        }}>
                            <i className="ion-shuffle"/>Shuffle
                        </button>
                    </div>
                    <div className="form-element">
                        <label for="Layout">Layout</label>
                        <select id="Layout" onChange={(event) => {
                            this.props.setLayout(event.target.value);
                            this.delayClose();
                        }}>
                            <option value="CelticCrossLayout">Celtic Cross</option>
                            <option value="ThreeCardLayout">Three Card</option>
                            <option value="AllCardFacesLayout">All Card Faces</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
