import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`

})
export class AppComponent implements OnInit{

  title = `Liste de pokémons`;

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

    if (pokemon) {
      console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Vous avez demandé un pokémon qui n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
