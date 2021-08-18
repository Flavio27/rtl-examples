import { useState } from "react";
import { Contador } from "./components/contador/Contador";
import { Dropdown } from "./components/dropdown/Dropdown";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  return (
    <div className="App">
      {selectedPokemon && (
        <div>Seu Pokémon selecionado é <span className={selectedPokemon}>{selectedPokemon}</span></div>
      )}
      <Dropdown
        title="Selecione seu Pokémon inicial!"
        options={["Charmander", "Squirtle", "Bulbasaur"]}
        onSelect={setSelectedPokemon}
      />
      <Contador/>
    </div>
  );
}

export { App };
