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

    render() {
        return (
            <div className={classNames(styles.menu, {'menu-open': this.state.open})}>
                <i className="ion-navicon-round" onClick={() => {
                    this.setState({open: !this.state.open});
                }}/>
                <div>
                    <div>
                        <div className="form-element">
                            <button onClick={() => {
                                this.props.shuffle();
                                window.setTimeout(() => {
                                    this.setState({open: !this.state.open});
                                }, 400);
                            }}>Shuffle</button>
                        </div>
                        <div className="form-element">
                            <label for="Layout">Layout:</label>
                            <select id="Layout" onChange={(event) => {
                                this.props.setLayout(event.target.value);
                                window.setTimeout(() => {
                                    this.setState({open: !this.state.open});
                                }, 400);
                            }}>
                                <option value="CelticCrossLayout">Celtic Cross</option>
                                <option value="ThreeCardLayout">Three Card</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
