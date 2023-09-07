import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Pokemon = () => {
  const router = useRouter();

  const id = router.query.id;
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const responseData = await response.json();
      setData(responseData);
    };
    fetchData();
  }, []);
  return <div>Pokemon data: {JSON.stringify(data)}</div>;
};

export default Pokemon;
