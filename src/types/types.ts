export type PokemonBaseInfoType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
};

export type PokemonAbilitiesType = {
  is_hidden: boolean;
  slot: number;
  ability: PokemonAbilityType;
};

export type PokemonAbilityType = {
  id: number;
  name: string;
  is_main_series: boolean;
};

export type PokemonType = PokemonBaseInfoType & {
  abilities: PokemonAbilitiesType[];
};
