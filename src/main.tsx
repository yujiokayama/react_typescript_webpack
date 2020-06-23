import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SubComponent } from './sub-component';
import './scss/index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="test">Hello React!</h1>
        <SubComponent name="My Counter for TypeScript" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
