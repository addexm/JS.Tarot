import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import { Link, IndexLink, withRouter } from 'react-router'
import FacebookProvider, { Like } from 'react-facebook';

export default class Menu extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        defaultImageSet: React.PropTypes.string,
        changeImageSet: React.PropTypes.func,
        defaultAllowReversed: React.PropTypes.bool,
        changeAllowReversed: React.PropTypes.func
    };

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    close(){
        window.setTimeout(() => {
            this.setState({open: !this.state.open});
        }, 0);
    }

    render() {
        return (
            <div className={classNames(styles.menu, {'menu-open': this.state.open})}>
                <i className="ion-navicon-round" onClick={() => {
                    this.setState({open: !this.state.open});
                }}/>
                <div>
                    <div className="menu-links">
                        <Link activeClassName="active" to=''>Readings</Link>
                        <Link activeClassName="active" to='/test'>Test Your Knowledge</Link>
                    </div>
                    <div className="menu-functions">
                        {this.props.children}
                    </div>
                    <div className="menu-common">
                        <div className="form-element">
                            <label for="ImageSet">Image Set</label>
                            <select id="ImageSet" value={this.props.defaultImageSet} onChange={(event) => {
                                this.props.changeImageSet(event.target.value);
                                this.close();
                            }}>
                                <option value="RW">Rider Waite Smith</option>
                                <option value="Marseilles">Marseilles</option>
                            </select>
                        </div>
                        <div className="form-element inline">
                            <input type="checkbox" id="AllowReversed" checked={this.props.defaultAllowReversed} onChange={(event) => {
                                this.props.changeAllowReversed(event.target.checked);
                                this.close();
                            }}/>
                            <label for="AllowReversed">Allow Reversed Cards</label>
                        </div>
                    </div>
                    <div className="menu-social">
                        <FacebookProvider appID="1127613583965709">
                            <Like href="http://jstarot.com" colorScheme="dark" showFaces={true} share width={280}/>
                        </FacebookProvider>
                    </div>
                </div>
            </div>
        );
    }
}
