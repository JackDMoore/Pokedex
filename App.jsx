import PokeCard from './PokeCard';

function App() {
  return(
    <div>
      <div>Pokedex</div>

      <PokeCard title="Alexa" handle="@alexa99" />
      <PokeCard title="Cortana" handle="@Cortana32" />
      <PokeCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
