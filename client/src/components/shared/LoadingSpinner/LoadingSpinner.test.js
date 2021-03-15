import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './LoadingSpinner';
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
  ReactDOM.render(<LoadingSpinner />, container);
});

it('renders the LoadingSpinner correctly', () => {
  act(() => {
    ReactDOM.render(<LoadingSpinner />, container);
  });

  const spinner = container.querySelector('.LoadingSpinner-container');
  expect(spinner.textContent).toBe('Loading...');
  expect(spinner.className).toBe('LoadingSpinner-container vh-100 d-flex flex-column justify-content-center align-items-center');
  expect(spinner.children[0].className).toBe('LoadingSpinner-spinner spinner-border text-primary');
  expect(spinner.children[1].className).toBe('LoadingSpinner-text sr-only h3');
});