import { FormEvent, useState } from 'react';
import { InviteGuestsModal } from './invite-guests-modal';
import { ConfirmGuestModal } from './confirm-guests-modal';
import { useNavigate } from 'react-router-dom';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';
import { Footer } from './footer/footer';
import { Header } from './header/header';

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
    navigate('/trips/124');
  }

  return (
    <div className="h-screen flex justify-center items-center bg-bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
        <Header />

        <div className="space-y-4">
          <DestinationAndDateStep
            handleGuestInput={handleGuestInput}
            isGuestInputOpen={isGuestInputOpen}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              handleModal={handleModal}
              openConfirmTripModal={openConfirmTripModal}
            />
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

        <Footer />
      </div>
    </div>
  );
}
