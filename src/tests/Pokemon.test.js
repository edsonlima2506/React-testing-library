import React from 'react';
import { screen } from '@testing-library/react';
import pokemons from '../data';
import { Pokemon } from '../components';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokemon', () => {
  beforeEach(() => {
    renderWithRouter(<Pokemon
      isFavorite
      pokemon={ pokemons[0] }
    />);
  });

  test('Testa as informações do pokemon', () => {
    const pokemonEl = screen.getByText(pokemons[0].name);
    expect(pokemonEl).toBeInTheDocument();

    const atualPokemonType = screen.getByText(/Electric/i);
    expect(atualPokemonType.textContent).toBe(pokemons[0].type);

    const atualPokemonWeitgh = screen.getByTestId('pokemon-weight');
    const valuePikachu = `Average weight: ${pokemons[0].averageWeight.value} kg`;
    expect(atualPokemonWeitgh.textContent).toBe(valuePikachu);

    const atualPokemonImage = screen.getByAltText(`${pokemons[0].name} sprite`);
    expect(atualPokemonImage.src).toBe(pokemons[0].image);
    expect(atualPokemonImage).toBeInTheDocument();
  });

  test('Testa se o card do Pokémon indicado na Pokédex contém um link', () => {
    const linkPokemon = screen.getByRole('link', { name: 'More details' });
    expect(linkPokemon.href).toBe(`http://localhost/pokemons/${pokemons[0].id}`);
    expect(linkPokemon).toBeInTheDocument();
  });

  test('Testa se tem a estrela de favorito', () => {
    const favoriteStar = screen.getByRole('img', { name: /Pikachu is marked/i });
    expect(favoriteStar).toBeInTheDocument();
    const string = favoriteStar.src;
    const DEZESSEIS = 16;
    expect(string.slice(DEZESSEIS)).toBe('/star-icon.svg');
    expect(favoriteStar.alt).toBe(`${pokemons[0].name} is marked as favorite`);
  });
});
