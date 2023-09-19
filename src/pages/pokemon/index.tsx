import { useRouter } from "next/router";
import { useState } from "react";

const PokemonIndex = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    router.push(`/pokemon/${value}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label>Id:</label>
      <input
        type="text"
        name="id"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PokemonIndex;
