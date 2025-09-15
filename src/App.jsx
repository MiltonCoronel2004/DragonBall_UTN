import { useEffect, useState } from "react";
import { getAllCharacters } from "./api/api";
import { Contenedor } from "./components/Contenedor";
import { Tarjeta } from "./components/Tarjeta";
import { SearchBar } from "./components/SearchBar";
import { Modal } from "./components/Modal";

// Gifs
import Goku from "/gifs/Goku.gif";
import Vegeta from "/gifs/Vegeta.gif";
import Broly from "/gifs/Broly.gif";
import Piccolo from "/gifs/Piccolo.gif";
import Bulma from "/gifs/Bulma.gif";
import Gohan from "/gifs/Gohan.gif";
import Whis from "/gifs/Whis.gif";
// import Freezer from "../public/gifs/Freezer.gif";

import GokuSound from "/sounds/Goku.mp3";
import BulmaSound from "/sounds/Bulma.mp3";
import VegetaSound from "/sounds/Vegeta.mp3";
// import WhisSound from "/sounds/Whis.mp3";
import FreezerSound from "/sounds/Freezer.mp3";
import BrolySound from "/sounds/Broly.mp3";
import PiccoloSound from "/sounds/Piccolo.mp3";
import GohanSound from "/sounds/Gohan.mp3";
const sounds = {
  Goku: GokuSound,
  Bulma: BulmaSound,
  Vegeta: VegetaSound,
  // Whis: WhisSound,
  Freezer: FreezerSound,
  Broly: BrolySound,
  Piccolo: PiccoloSound,
  Gohan: GohanSound,
};

const gifs = {
  Goku,
  Vegeta,
  Broly,
  Piccolo,
  Bulma,
  Gohan,
  Whis,
  // Freezer,
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [affiliationFilter, setAffiliationFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    (async () => {
      setCharacters(await getAllCharacters());
      setIsLoading(false);
    })();
  }, []);

  const filtered = characters.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());

    const matchesAffiliation =
      affiliationFilter === "All" ? true : affiliationFilter === "Has Sound" ? !!sounds[c.name] : c.affiliation === affiliationFilter;

    return matchesSearch && matchesAffiliation;
  });

  if (isLoading)
    return (
      <main className="min-h-screen flex items-center justify-center">
        <span className="loading loading-infinity loading-xl"></span>
      </main>
    );

  return (
    <main className="min-h-screen">
      <div className="pt-8 pb-4 px-4">
        <div className="max-w-4xl mx-auto space-y-3">
          <SearchBar setSearch={setSearch} />
          <div className="filter">
            {[
              "All",
              "Villain",
              "Z Fighter",
              "Army of Frieza",
              "Other",
              "Pride Troopers",
              "Assistant of Vermoud",
              "Assistant of Beerus",
              "Freelancer",
              "Has Sound",
            ].map((aff) => (
              <label key={aff} className="btn">
                <input type="radio" name="affiliation" checked={affiliationFilter === aff} onChange={() => setAffiliationFilter(aff)} />
                {aff}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Contenedor filtered={filtered}>
          {filtered.length === 0 ? (
            <Tarjeta />
          ) : (
            filtered.map((character) => <Tarjeta key={character.id} character={character} setSelected={setSelected} />)
          )}
        </Contenedor>

        {selected && (
          <Modal setSelected={setSelected} gif={gifs[selected.name]} sound={sounds[selected.name]} selected={selected}>
            {selected.description}
          </Modal>
        )}
      </div>
    </main>
  );
}

export default App;
