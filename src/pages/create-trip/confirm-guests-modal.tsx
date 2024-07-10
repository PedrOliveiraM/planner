import { Mail, User, X } from 'lucide-react';
import { FormEvent } from 'react';

interface ConfirmGuestModalProps {
  openConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmGuestModal({
  openConfirmTripModal,
  createTrip,
}: ConfirmGuestModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 w-screen h-screen flex justify-center items-center">
      <div className="bg-zinc-900 w-[640px] p-5 rounded-xl">
        <div className="space-y-5">
          <div className="text-start space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg">Confirmar criação da viagem</h2>
              <button onClick={openConfirmTripModal}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>

            <p className="text-zinc-400">
              Para concluir a criação da viagem para{' '}
              <span className="text-zinc-100 font-semibold">
                Florianópolis, Brasil
              </span>{' '}
              nas datas de{' '}
              <span className="text-zinc-100 font-semibold">
                16 a 27 de Agosto de 2024
              </span>{' '}
              preencha seus dados abaixo:
            </p>
          </div>
          <form onSubmit={createTrip}>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-1 text bg-zinc-950 px-4 py-2.5 rounded-lg">
                  <User className="size-5 text-zinc-400" />
                  <input
                    type="text"
                    name="name"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left text-zinc-400"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 py-2.5 rounded-lg">
                  <Mail className="size-5 text-zinc-400 round" />
                  <input
                    type="text"
                    name="email"
                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left text-zinc-400"
                    placeholder="Seu e-mail pessoal"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-lime-300 text-lime-950 font-medium h-10 w-full rounded-lg hover:bg-lime-400"
              >
                Confirmar criação da viagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
