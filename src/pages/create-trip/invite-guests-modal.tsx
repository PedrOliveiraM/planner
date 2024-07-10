import { AtSign, Plus, X } from 'lucide-react';
import { FormEvent } from 'react';
interface InviteGuestsModalProps {
  emailsToInvite: string[];
  handleModal: () => void;
  removeEmailToInvite: (email: string) => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

export function InviteGuestsModal({
  emailsToInvite,
  handleModal,
  removeEmailToInvite,
  addNewEmailToInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 w-screen h-screen flex justify-center items-center">
      <div className="bg-zinc-900 w-[640px] p-5 rounded-xl">
        <div className="space-y-5">
          <div className="space-y-2 text-start">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">Selecionar convidados</h2>
              <button onClick={handleModal}>
                <X className="text-zinc-400 size-5" />
              </button>
            </div>
            <p className="text-zinc-400">
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {emailsToInvite.map((email) => (
              <div
                key={email}
                className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-800 rounded-md w-auto"
              >
                <span className="text-zinc-200">{email}</span>
                <button onClick={() => removeEmailToInvite(email)}>
                  <X className="text-zinc-400 size-4" />
                </button>
              </div>
            ))}
          </div>
          <form onSubmit={addNewEmailToInvite}>
            <div className="flex items-center bg-zinc-950 h-16 rounded-xl px-4 shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <AtSign className="size-5 text-zinc-400" />
                <input
                  type="text"
                  name="email"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left text-zinc-400"
                  placeholder="Digite o e-mail do convidado"
                />
              </div>
              <div className="w-px h-6 bg-zinc-800"></div>
              <button
                type="submit"
                className="bg-lime-300 text-lime-950 px-5 py-2 rounded-lg  flex items-center gap-2 font-medium hover:bg-lime-400 "
              >
                Convidar
                <Plus className="size-5 text-lime-950" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
