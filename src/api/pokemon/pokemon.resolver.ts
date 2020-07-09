import { Query, Resolver } from '@nestjs/graphql';
import { PokemonQl } from './pokemon.ql';
import { Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { PokemonServiceClient } from '@endurance/grpc-pokemon-server';

@Resolver(of => PokemonQl)
export class PokemonResolver {
  private readonly _pokemonService: PokemonServiceClient;

  constructor(@Inject('POKEMON_PACKAGE') private client: ClientGrpc) {
    this._pokemonService = this.client.getService('PokemonService');
  }

  @Query(_ => [PokemonQl])
  public async pokemon() {
    const results = await this._pokemonService.findAll({}).toPromise();
    return results.pokemon;
  }

  @Query(_ => PokemonQl)
  public singlePokemon() {
    return this._pokemonService.findOne({ id: 1 });
  }
}
