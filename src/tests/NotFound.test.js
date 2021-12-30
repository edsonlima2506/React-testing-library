import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../renderWithRouter';

test('Testa a tela Not Found', () => {
  renderWithRouter(<NotFound />);

  const NotFoundText = 'Page requested not found Crying emoji';
  const titleNotFound = screen.getByRole('heading', { level: 2, name: NotFoundText });
  expect(titleNotFound).toBeInTheDocument();
  // comentario aqui para dar  push
  const imageEl = screen.getByRole('img', { name: /Pikachu crying/i });
  expect(imageEl).toBeInTheDocument();
  expect(imageEl).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
