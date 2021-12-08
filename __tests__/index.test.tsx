import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/pages/index';

describe('loads and display the Home page', () => {
  test('render the TopBox', async () => {
    await act(async () => render(<Home />));

    const Series = await screen.findByTestId('series');
    const Movies = await screen.findAllByTestId('movies');

    expect(Series).toBeVisible();
    expect(Movies).toBeVisible();
  });
});
