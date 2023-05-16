import React from "react"
import PokeCard from './PokeCard';

function App() {
  return(
    <div>
      <div>Pokedex</div>
      <section>
        <PokemonName inputText={inputText} />
        <PokemonImage imageSource={imageSource} />
        <PokemonType inputType={inputType} />
      </section>
    </div>
  );
}

export default App;
