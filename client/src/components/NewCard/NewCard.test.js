import React from 'react';
import ReactDOM from 'react-dom';
import NewCard from './NewCard';
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
  ReactDOM.render(<NewCard />, container);
});

it('renders the NewCard correctly', () => {
  act(() => {
    ReactDOM.render(<NewCard />, container);
  });

  const newCard = container.querySelector('.NewCard');
  expect(newCard.textContent).toBe('Press here to insert a new card');
  expect(newCard.className).toBe('NewCard btn card bg-light d-flex justify-content-center align-items-center');
});

it('triggers the NewCard onclick', () => {
  act(() => {
    ReactDOM.render(<NewCard />, container);
  });

  const newCard = container.querySelector('.NewCard');
  fireEvent.click(screen.getByText('Press here to insert a new card'));
  expect(newCard.className).toBe('NewCard card form-group bg-light');
});
