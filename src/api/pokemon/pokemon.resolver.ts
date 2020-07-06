import { Query, Resolver } from '@nestjs/graphql';
import { PokemonQl } from './pokemon.ql';
import { Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { pokemon } from '../../generated/rpc';
import PokemonService = pokemon.PokemonService;

@Resolver(of => PokemonQl)
export class PokemonResolver {
  private readonly _pokemonService: PokemonService;

  constructor(@Inject('POKEMON_PACKAGE') private client: ClientGrpc) {
    this._pokemonService = this.client.getService('PokemonService');
  }

  @Query(_ => PokemonQl)
  public pokemon() {
    console.log(this.client);
    return this._pokemonService.findOne({ id: 1 });
  }
}
