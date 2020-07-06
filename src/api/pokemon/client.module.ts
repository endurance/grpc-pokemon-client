import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { srcPath } from '../../directory';

export const PokemonClientModule = ClientsModule.register([
  {
    name: 'POKEMON_PACKAGE',
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5000',
      package: 'pokemon',
      protoPath: join(srcPath, 'protos/pokemon.proto'),
    },
  },
]);
