import { useEffect, useRef } from "react";
// import GokuSound from "../../public/sounds/Goku.mp3";

export function Modal({ children, setSelected, selected, gif, sound }) {
  const audioRef = useRef(null);
  const reproducir = () => {
    switch (sound) {
      case "/sounds/Broly.mp3":
        audioRef.current.currentTime = 80.5;

        break;
      case "/sounds/Piccolo.mp3":
        audioRef.current.currentTime = 2;

      case "/sounds/Freezer.mp3":
        audioRef.current.currentTime = 0;

      case "/sounds/Gohan.mp3":
        audioRef.current.currentTime = 22.1;

      default:
        break;
    }
    audioRef.current.volume = 0.15;
    audioRef.current.play();
  };

  useEffect(() => {
    if (selected) reproducir();

    setTimeout(() => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }, 60000);
  }, []);
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelected(false)}>
      <div className="bg-gray-800 rounded-lg shadow-lg p-0 max-w-4xl w-full mx-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex">
          <div className={`w-1/2 bg-gray-700 flex items-center justify-center ${selected.image && !gif ? "p-10" : ""}`}>
            <img src={gif ?? selected.image} alt="Image" className={`${selected.image && !gif ? "max-h-80 w-auto" : "w-full h-full object-cover"}`} />
          </div>

          <div className="w-1/2 p-6 flex items-center justify-center">
            <div className="text-white">
              <h3 className="text-gray-400 text-lg mb-4 text-center">Descripción</h3>
              <p className="text-gray-300">{children}</p>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src={sound} />
    </div>
  );
}
