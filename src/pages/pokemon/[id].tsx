import PokemonAbility from "@/components/PokemonAbility/PokemonAbility";
import PokemonBaseInfo from "@/components/PokemonBaseInfo/PokemonBaseInfo";
import { PokemonType } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <br />
      <div>Abilities:</div>
      {data.abilities.map((abilityInfo, index) => {
        return (
          <PokemonAbility
            key={index}
            is_main_series={abilityInfo.ability.is_main_series}
            name={abilityInfo.ability.name}
            id={abilityInfo.ability.id}
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
