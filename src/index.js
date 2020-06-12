import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Route } from 'react-router-dom';

class Demo extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path='/' component={App} />
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);
