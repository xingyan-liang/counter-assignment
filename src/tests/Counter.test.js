// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import Counter component
import Counter from '../components/Counter';

beforeEach(() => { 
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: "+" });
  fireEvent.click(incrementButton);
  const incCount = Number(screen.getByTestId('count').textContent);
  expect(incCount).toEqual(1);
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByRole('button', { name: "-" });
  fireEvent.click(decrementButton);
  const decCount = Number(screen.getByTestId('count').textContent);
  expect(decCount).toEqual(-1);
});
