import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';

class Menu extends React.Component {
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
                                this.setState({open: !this.state.open});
                            }}>Shuffle</button>
                        </div>
                        <div className="form-element">
                            <label for="Layout">Layout:</label>
                            <select id="Layout" onChange={(event) => {
                                this.props.setLayout(event.target.value);
                                this.setState({open: !this.state.open});
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

export default Menu;
