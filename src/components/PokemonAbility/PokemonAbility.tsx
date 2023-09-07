import { PokemonAbilityType } from "@/pages/pokemon/[id]";

const PokemonAbility = ({ is_hidden, slot, ability }: PokemonAbilityType) => {
  console.log("hej?");
  return (
    <>
      <div>is_hidden: {is_hidden + ""}</div>
      <div>slot: {slot}</div>
      <div>name: {ability.name}</div>
    </>
  );
};

export default PokemonAbility;
