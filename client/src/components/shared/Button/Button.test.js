import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { act, fireEvent, screen } from '@testing-library/react';
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
  ReactDOM.render(<Button>Test Button</Button>, container);
});

it('renders the Button correctly', () => {
  act(() => {
    ReactDOM.render(<Button>Test Button</Button>, container);
  });

  const button = container.querySelector('.Button');
  expect(button.textContent).toBe('Test Button');
  expect(button.className).toBe('Button btn btn-primary');
});

it('renders the Button correctly with danger variant', () => {
  act(() => {
    ReactDOM.render(<Button variant="danger">Test Button Danger</Button>, container);
  });

  const button = container.querySelector('.Button');
  expect(button.textContent).toBe('Test Button Danger');
  expect(button.className).toBe('Button btn btn-danger');
});

it('triggers the Button onclick', () => {
  act(() => {
    ReactDOM.render(<Button variant="danger">Test Button</Button>, container);
  });
  
  fireEvent.click(screen.getByText('Test Button'));
});