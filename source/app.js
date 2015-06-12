import React from 'react';
import ajax from '../lib/ajax';
import ComponentLoader from './components/component-loader/';

class App extends React.Component {
  componentWillMount() {
    ajax('GET', '/api/pages/new_report').then((response) => {
      this.setState({report: JSON.parse(response)});
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      report: {}
    };
  }

  render() {
    return (
      <div>
        <ComponentLoader config={this.state.report} />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
