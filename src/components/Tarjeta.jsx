export function Tarjeta({ character, setSelected }) {
  if (!character) {
    return (
      <div className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gradient-to-br from-gray-300 to-gray-400 p-8 flex items-center justify-center">
          <div className="h-80 w-full flex items-center justify-center">
            <div className="text-gray-600 text-6xl">🔍</div>
          </div>
        </div>

        <div className="p-4 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Sin resultados</h2>
          <p className="text-orange-400 text-sm mb-4">Intenta otra búsqueda</p>

          <div className="space-y-2">
            <div>
              <span className="text-gray-400 text-sm">Sugerencia:</span>
              <p className="text-orange-400 font-semibold">Busca por nombre</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg" onClick={() => setSelected(character)}>
      <div className="bg-gradient-to-br from-gray-300 to-gray-400 p-8 flex items-center justify-center">
        <img src={character.image} className="h-80 w-auto object-contain transition-transform duration-300 hover:scale-115 cursor-pointer" />
      </div>

      <div className="p-4 text-white">
        <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
        <p className="text-orange-400 text-sm mb-4">{character.race}</p>

        <div className="space-y-2">
          <div>
            <span className="text-gray-400 text-sm">Base KI:</span>
            <p className="text-orange-400 font-semibold">{character.ki || "60.000.000"}</p>
          </div>

          <div>
            <span className="text-gray-400 text-sm">Total KI:</span>
            <p className="text-orange-400 font-semibold">{character.maxKi}</p>
          </div>

          <div>
            <span className="text-gray-400 text-sm">Affiliation:</span>
            <p className="text-orange-400 font-semibold">{character.affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
