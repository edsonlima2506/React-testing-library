import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa componente App', () => {
  test('Testa links de navegação', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const linkHome = screen.getByRole('link', { name: /home/i });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /about/i });
    expect(linkAbout).toBeInTheDocument();

    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(linkFavorite).toBeInTheDocument();
  });

  test('Testa se a aplicação é redirecionada para a home page', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /home/i });

    userEvent.click(linkHome);
    expect(history.location.pathname).toBe('/');
  });

  test('Testa se a aplicação é redirecionada para a pagina de favoritos', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorites = screen.getByRole('link', { name: /favorite pokémons/i });

    userEvent.click(linkFavorites);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Testa se a aplicação é redirecionada para a pagina Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/lalaland');
    const spanNotFound = screen.getByAltText(/Pikachu crying/i);
    expect(spanNotFound).toBeInTheDocument();
  });
});
