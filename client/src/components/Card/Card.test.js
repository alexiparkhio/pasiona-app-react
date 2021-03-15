import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { act } from '@testing-library/react';
import '@testing-library/jest-dom';

let container;

const mockedCardProps = {
  cardId: 'some-id',
  title: 'test-title',
  description: 'test-description',
  created: new Date(),
  onDelete: jest.fn(),
  onUpdate: jest.fn()
}

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


it('renders without crashing', () => {
  ReactDOM.render(<Card props={mockedCardProps} />, container);
});

it('renders the Card correctly', () => {
  act(() => {
    ReactDOM.render(<Card props={mockedCardProps} />, container);
  });

  const card = container.querySelector('.Card');
  expect(card.className).toBe('Card card');
  expect(card.children[0].className).toBe('card-title p-3 mb-2 bg-info text-white');
  expect(card.children[1].className).toBe('card-body');
  expect(card.children[2].className).toBe('card-footer d-flex justify-content-end');
});