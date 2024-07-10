import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from 'lucide-react';
import { FormEvent, useState } from 'react';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmGuestModal } from './confirm-guests-modal';
import { useNavigate } from 'react-router-dom';

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  function handleGuestInput() {
    setIsGuestInputOpen(!isGuestInputOpen);
  }

  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();
    console.log(email);

    if (!email) return;

    if (emailsToInvite.includes(email)) return alert('Email já adicionado');

    setEmailsToInvite([...emailsToInvite, email]);
  }

  function removeEmailToInvite(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  }

  function openConfirmTripModal() {
    setIsConfirmModalOpen(!isConfirmModalOpen);
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/trip/1234');
  }

  return (
    <div className="h-screen flex justify-center items-center bg-bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <div>
          <img src="/logo.svg" alt="Plann.er" className="w-32 mx-auto" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
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

          {isGuestInputOpen && (
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
          )}
        </div>

        {isModalOpen && (
          <InviteGuestsModal
            emailsToInvite={emailsToInvite}
            removeEmailToInvite={removeEmailToInvite}
            addNewEmailToInvite={addNewEmailToInvite}
            handleModal={handleModal}
          />
        )}

        {isConfirmModalOpen && (
          <ConfirmGuestModal
            openConfirmTripModal={openConfirmTripModal}
            createTrip={createTrip}
          />
        )}

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br /> com nossos
          <a className="underline text-zinc-300" href="#">
            termos de uso
          </a>{' '}
          e{' '}
          <a className="underline text-zinc-300" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
