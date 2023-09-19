import { PokemonAbilityType } from "@/types/types";

type PokemonAbilityProps = PokemonAbilityType & { color?: string };

const PokemonAbility = ({
  color,
  id,
  name,
  is_main_series,
}: PokemonAbilityProps) => {
  return (
    <>
      <div>is_main_series: {is_main_series + ""}</div>
      <div>name: {name}</div>
      <div>id: {id}</div>
    </>
  );
};

export default PokemonAbility;
