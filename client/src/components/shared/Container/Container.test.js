import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  ReactDOM.render(<Container>Test Container</Container>, container);
});

it('renders the Container correctly', () => {
  act(() => {
    ReactDOM.render(<Container><p>Test children</p></Container>, container);
  });

  const mainContainer = container.querySelector('.container');
  expect(mainContainer.textContent).toBe('Test children');
  expect(mainContainer.children[0].className).toBe('row');
});