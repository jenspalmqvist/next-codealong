import { PokemonBaseInfoType } from "@/pages/pokemon/[id]";

const PokemonBaseInfo = ({
  id,
  name,
  base_experience,
  height,
  is_default,
  order,
  weight,
}: PokemonBaseInfoType) => {
  return (
    <>
      <div>Pokemon id: {id}</div>
      <div>Pokemon name: {name}</div>
      <div>Pokemon base_experience: {base_experience}</div>
      <div>Pokemon height: {height}</div>
      <div>Pokemon is_default: {is_default + ""}</div>
      <div>Pokemon order: {order}</div>
      <div>Pokemon weight: {weight}</div>
    </>
  );
};

export default PokemonBaseInfo;
