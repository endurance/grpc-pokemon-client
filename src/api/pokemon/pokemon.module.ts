import { Module } from '@nestjs/common';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonClientModule } from './client.module';

@Module({
  imports: [PokemonClientModule],
  providers: [PokemonResolver],
})
export class PokemonModule {}
