import React from 'react';
import classNames from 'classnames';
import styles from './styles.less';

export default class CardDetails extends React.Component {
    static propTypes = {
        card: React.PropTypes.object,
        position: React.PropTypes.number,
        open: React.PropTypes.bool
    };

    render() {
        return (
            <div className={classNames('cardDetails', {'cardDetails-open': this.props.open })}>
                {this.props.position}
            </div>
        );
    }
}
