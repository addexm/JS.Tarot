import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';
import Menu from 'components/Menu';

export default class BoardBase extends React.Component {
    constructor () {
        super();
        this.state = {
            imageset: 'RW',
            allowreversed: true
        };
    }

    componentDidMount(){
        let imageset = localStorage.getItem('imageset');
        if (imageset){
            this.setState({ imageset: imageset });
        }

        let allowreversed = localStorage.getItem('allowreversed');
        if (allowreversed){
            this.setState({ allowreversed: eval(allowreversed) });
        }
    }

    changeImageSet(imageset){
        localStorage.setItem('imageset', imageset);
        this.setState({ imageset: imageset });
    }

    changeAllowReversed(allowreversed){
        localStorage.setItem('allowreversed', allowreversed);
        this.setState({ allowreversed: allowreversed });
    }

    renderMenu(children){
        return (<Menu ref="menu"
            changeImageSet={this.changeImageSet.bind(this)}
            defaultImageSet={this.state.imageset}
            changeAllowReversed={this.changeAllowReversed.bind(this)}
            defaultAllowReversed={this.state.allowreversed}>
            {children}
        </Menu>);
    }
}
