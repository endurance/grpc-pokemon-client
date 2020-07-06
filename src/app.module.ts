import { Module } from '@nestjs/common';
import { PokemonModule } from './api/pokemon/pokemon.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    PokemonModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'generated_schema.gql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
