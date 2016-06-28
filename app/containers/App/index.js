import React from 'react';
import styles from './styles.less';


export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
