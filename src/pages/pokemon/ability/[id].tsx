import PokemonAbility from "@/components/PokemonAbility/PokemonAbility";
import { PokemonAbilityType } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Ability = () => {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState<PokemonAbilityType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`);
      const responseData = await response.json();
      setData(responseData);
    };
    if (id) {
      fetchData();
    }
  }, [router]);
  console.log(data);

  return data ? (
    <PokemonAbility
      is_main_series={data.is_main_series}
      name={data.name}
      id={data.id}
    />
  ) : (
    <>Loading</>
  );
};

export default Ability;
