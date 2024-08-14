// @vitest-environment happy-dom

import { screen, fireEvent } from '@testing-library/react';
import Counter from '.';
import { renderComponent } from './test/utilities'

test('it should render the component', () => {
  renderComponent(<Counter />)
});

test(
  'it should increment when the "Increment" button is pressed',
  async () => {
    const { user } = renderComponent(<Counter />)
    const currentCount = screen.getByTestId('current-count')
    expect(currentCount).toHaveTextContent('0')
    const incrementButton = screen.getByRole('button', { name: 'Increment'})
    await user.click(incrementButton)
    expect(currentCount).toHaveTextContent('1')
  },
);

test(
  'it should accept an initialCount property',
  async () => {
    const { user } = renderComponent(<Counter initialCount={5} />)
    const currentCount = screen.getByTestId('current-count')
    expect(currentCount).toHaveTextContent('5')
    const incrementButton = screen.getByRole('button', { name: 'Increment'})
    await user.click(incrementButton)
    expect(currentCount).toHaveTextContent('6')
  },
);

test(
  'it should reset the value when reset is clicked',
  async () => {
    const { user } = renderComponent(<Counter initialCount={5} />)
    const currentCount = screen.getByTestId('current-count')
    expect(currentCount).toHaveTextContent('5')
    const incrementButton = screen.getByRole('button', { name: 'Increment'})
    await user.click(incrementButton)
    expect(currentCount).toHaveTextContent('6')
    const resetButton = screen.getByRole('button', { name: 'Reset'})
    await user.click(resetButton)
    expect(currentCount).toHaveTextContent('0')
  },
);
