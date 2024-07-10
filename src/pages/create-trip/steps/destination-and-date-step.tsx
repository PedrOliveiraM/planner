import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  handleGuestInput: () => void;
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  handleGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex items-center bg-zinc-900 h-16 rounded-xl px-4 shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          placeholder="Para onde você vai?"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          disabled={isGuestInputOpen}
          type="text"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none w-24"
          placeholder="Quando?"
        />
      </div>
      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestInputOpen ? (
        <button
          onClick={handleGuestInput}
          className="bg-zinc-800 text-zinc-200 px-5 py-2 rounded-lg  flex items-center gap-2 font-medium hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5 text-zinc-200" />
        </button>
      ) : (
        <button
          onClick={handleGuestInput}
          className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg  flex items-center gap-2 font-medium hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5 text-lime-950" />
        </button>
      )}
    </div>
  );
}
