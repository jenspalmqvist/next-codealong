import PokemonAbility from "@/components/PokemonAbility/PokemonAbility";
import PokemonBaseInfo from "@/components/PokemonBaseInfo/PokemonBaseInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type PokemonBaseInfoType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
};

export type PokemonAbilityType = {
  is_hidden: boolean;
  slot: number;
  ability: { name: string };
};

export type PokemonType = PokemonBaseInfoType & {
  abilities: PokemonAbilityType[];
};

const Pokemon = () => {
  const router = useRouter();

  const id = router.query.id;
  const [data, setData] = useState<PokemonType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const responseData = await response.json();
      setData(responseData);
    };
    if (id) {
      fetchData();
    }
  }, [router]);
  console.log(data?.abilities);
  return data ? (
    <>
      <div>Base info:</div>
      <PokemonBaseInfo
        id={data.id}
        name={data.name}
        base_experience={data.base_experience}
        height={data.height}
        is_default={data.is_default}
        weight={data.weight}
        order={data.order}
      />
      {data.abilities.map((ability) => {
        console.log(ability);
        return (
          <PokemonAbility
            is_hidden={ability.is_hidden}
            slot={ability.slot}
            ability={ability.ability}
          />
        );
      })}
    </>
  ) : (
    <>
      <div>Loading</div>
    </>
  );
};

export default Pokemon;
