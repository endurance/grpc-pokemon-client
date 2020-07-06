import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Pokemon')
export class PokemonQl {
  @Field(_ => ID)
  public id: string;

  @Field()
  public name: string;
}
