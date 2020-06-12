import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.common.appName
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

// NOTE: this was giving a warning so I commented it, might not be necessary with hashrouter
// App.contextTypes = {
//   router: PropTypes.object.isRequired
// }

export default connect(mapStateToProps, () => ({}))(App);
