import * as $protobuf from "protobufjs";
/** Namespace pokemon. */
export namespace pokemon {

    /** Represents a PokemonService */
    class PokemonService extends $protobuf.rpc.Service {

        /**
         * Constructs a new PokemonService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new PokemonService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): PokemonService;

        /**
         * Calls FindOne.
         * @param request PokemonById message or plain object
         * @param callback Node-style callback called with the error, if any, and Pokemon
         */
        public findOne(request: pokemon.IPokemonById, callback: pokemon.PokemonService.FindOneCallback): void;

        /**
         * Calls FindOne.
         * @param request PokemonById message or plain object
         * @returns Promise
         */
        public findOne(request: pokemon.IPokemonById): Promise<pokemon.Pokemon>;
    }

    namespace PokemonService {

        /**
         * Callback as used by {@link pokemon.PokemonService#findOne}.
         * @param error Error, if any
         * @param [response] Pokemon
         */
        type FindOneCallback = (error: (Error|null), response?: pokemon.Pokemon) => void;
    }

    /** Properties of a PokemonById. */
    interface IPokemonById {

        /** PokemonById id */
        id?: (number|null);
    }

    /** Represents a PokemonById. */
    class PokemonById implements IPokemonById {

        /**
         * Constructs a new PokemonById.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemon.IPokemonById);

        /** PokemonById id. */
        public id: number;

        /**
         * Creates a new PokemonById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokemonById instance
         */
        public static create(properties?: pokemon.IPokemonById): pokemon.PokemonById;

        /**
         * Encodes the specified PokemonById message. Does not implicitly {@link pokemon.PokemonById.verify|verify} messages.
         * @param message PokemonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemon.IPokemonById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokemonById message, length delimited. Does not implicitly {@link pokemon.PokemonById.verify|verify} messages.
         * @param message PokemonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemon.IPokemonById, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokemonById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokemonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemon.PokemonById;

        /**
         * Decodes a PokemonById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokemonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemon.PokemonById;

        /**
         * Verifies a PokemonById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokemonById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokemonById
         */
        public static fromObject(object: { [k: string]: any }): pokemon.PokemonById;

        /**
         * Creates a plain object from a PokemonById message. Also converts values to other types if specified.
         * @param message PokemonById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemon.PokemonById, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokemonById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pokemon. */
    interface IPokemon {

        /** Pokemon id */
        id?: (number|null);

        /** Pokemon name */
        name?: (string|null);
    }

    /** Represents a Pokemon. */
    class Pokemon implements IPokemon {

        /**
         * Constructs a new Pokemon.
         * @param [properties] Properties to set
         */
        constructor(properties?: pokemon.IPokemon);

        /** Pokemon id. */
        public id: number;

        /** Pokemon name. */
        public name: string;

        /**
         * Creates a new Pokemon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pokemon instance
         */
        public static create(properties?: pokemon.IPokemon): pokemon.Pokemon;

        /**
         * Encodes the specified Pokemon message. Does not implicitly {@link pokemon.Pokemon.verify|verify} messages.
         * @param message Pokemon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pokemon.IPokemon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pokemon message, length delimited. Does not implicitly {@link pokemon.Pokemon.verify|verify} messages.
         * @param message Pokemon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pokemon.IPokemon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pokemon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pokemon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pokemon.Pokemon;

        /**
         * Decodes a Pokemon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pokemon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pokemon.Pokemon;

        /**
         * Verifies a Pokemon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pokemon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pokemon
         */
        public static fromObject(object: { [k: string]: any }): pokemon.Pokemon;

        /**
         * Creates a plain object from a Pokemon message. Also converts values to other types if specified.
         * @param message Pokemon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pokemon.Pokemon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pokemon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
