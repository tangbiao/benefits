import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders shallow', () => {
  shallow(<App />);
});

it('access local storage', () => {
  localStorage.getItem('key');
})