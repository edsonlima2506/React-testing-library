import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemon from '../components/FavoritePokemons';
import pokemons from '../data';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente FavoritePokemon', () => {
  test('Testa se tem o texto No Favorite found', () => {
    renderWithRouter(<FavoritePokemon />);
    const pokemon = 0;

    if (pokemon === 0) {
      const notFoundText = screen.getByText(/No favorite pokemon found/i);
      expect(notFoundText).toBeInTheDocument();
    }
  });

  test('Testa se é renderizados todos os pokemons favoritos', () => {
    renderWithRouter(<FavoritePokemon pokemons={ pokemons } />);

    pokemons.forEach((pokemon) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument();
    });
  });
});
