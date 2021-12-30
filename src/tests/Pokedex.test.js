import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pokedex } from '../components';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Testa a pagina Pokedex', () => {
  beforeEach(() => {
    renderWithRouter(<Pokedex
      pokemons={ pokemons }
      isPokemonFavoriteById={ App.setIsPokemonFavoriteById() }
    />);
  });
  test('Testa se tem o titulo: Pokemons Encontrados', () => {
    const titlleEl = screen.getByRole('heading', { name: 'Encountered pokémons' });
    expect(titlleEl).toBeInTheDocument();
  });

  test('Testa se clicando no botão aparece o próximo pokémon', () => {
    const buttonEl = screen.getByRole('button', { name: 'Próximo pokémon' });
    expect(buttonEl).toBeInTheDocument();

    const pokemonName = screen.getByText(pokemons[0].name);
    for (let i = 1; i < pokemons.length; i += 1) {
      userEvent.click(buttonEl);
      expect(pokemonName.textContent).toBe(pokemons[i].name);
    }

    const atualPokemon = screen.getByText(pokemons[pokemons.length - 1].name);
    userEvent.click(buttonEl);
    expect(atualPokemon.textContent).toBe(pokemons[0].name);
  });

  test('Testa se é mostrado apenas um pokemon por vez', () => {
    const pokemonEl = screen.getAllByTestId('pokemon-name');
    expect(pokemonEl).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro', () => {
    const pokemonTypes = screen.getAllByTestId('pokemon-type-button');
    const numberOfTypes = 7;
    expect(pokemonTypes).toHaveLength(numberOfTypes);

    const filterButton = screen.getByRole('button', { name: /Psychic/i });
    expect(filterButton).toHaveTextContent(/Psychic/i);
  });

  test('Testa se a pokedex tem um botao pare resetar o filtro', () => {
    const resetFilterButton = screen.getByText('All');
    expect(resetFilterButton).toBeInTheDocument();

    userEvent.click(resetFilterButton);
    const atualPokemonNotFiltred = screen.getByTestId('pokemon-name');
    expect(atualPokemonNotFiltred.textContent).toBe(pokemons[0].name);
  });
});
