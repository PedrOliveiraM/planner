import { ArrowRight, UserRoundPlus } from 'lucide-react';

interface InviteGuestsStepProps {
  handleModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  emailsToInvite,
  handleModal,
  openConfirmTripModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex items-center bg-zinc-900 h-16 rounded-xl px-4 shadow-shape gap-3">
      {emailsToInvite.length > 0 ? (
        <div className="flex items-center gap-2 flex-1">
          <UserRoundPlus className="size-5 text-zinc-400" />
          <button
            onClick={handleModal}
            type="button"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left text-zinc-400"
          >
            {emailsToInvite.length} pessoa(s) convidada(s)
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 flex-1">
          <UserRoundPlus className="size-5 text-zinc-400" />
          <button
            onClick={handleModal}
            type="button"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left text-zinc-400"
          >
            Quem estará na viagem?
          </button>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800"></div>
      <button
        onClick={openConfirmTripModal}
        className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg  flex items-center gap-2 font-medium hover:bg-lime-400 "
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    </div>
  );
}
