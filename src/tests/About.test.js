import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

test('Testa o component About', () => {
  render(<About />);

  const titleEl = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
  expect(titleEl).toBeInTheDocument();

  const imageEl = screen.getByRole('img', { name: /Pokédex/i });
  expect(imageEl).toBeInTheDocument();
  expect(imageEl).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');

  const firstParagraphEl = screen.getByText(/This application simulates a Pokédex/i);
  expect(firstParagraphEl).toBeInTheDocument();

  const secondParagraphEl = screen.getByText(/One can filter Pokémons by type/i);
  expect(secondParagraphEl).toBeInTheDocument();
});
