import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
  User,
  Mail,
} from 'lucide-react';
import { FormEvent, useState } from 'react';
function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);

  function handleGuestInput() {
    setIsGuestInputOpen(!isGuestInputOpen);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

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

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  function openConfirmTripModal() {
    setIsConfirmModalOpen(!isConfirmModalOpen);
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
                    Os convidados irão receber e-mails para confirmar a
                    participação na viagem.
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
        )}

        {
          //outro modal
          isConfirmModalOpen && (
            <div className="fixed inset-0 bg-black/60 w-screen h-screen flex justify-center items-center">
              <div className="bg-zinc-900 w-[640px] p-5 rounded-xl">
                <div className="space-y-5">
                  <div className="text-start space-y-2">
                    <div className="flex items-center justify-between">
                      <h2 className="font-bold text-lg">
                        Confirmar criação da viagem
                      </h2>
                      <button>
                        <X className="size-5 text-zinc-400" />
                      </button>
                    </div>

                    <p className="text-zinc-400">
                      Para concluir a criação da viagem para Florianópolis,
                      Brasil nas datas de 16 a 27 de Agosto de 2024 preencha
                      seus dados abaixo:
                    </p>
                  </div>
                  <form>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 py-2.5 rounded-lg">
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
                          <Mail className="size-5 text-zinc-400" />
                          <input
                            type="text"
                            name="email"
                            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left text-zinc-400"
                            placeholder="Seu e-mail pessoal"
                            required
                          />
                        </div>
                      </div>
                      <button className="bg-lime-300 text-lime-950 font-medium h-10 w-full rounded-lg hover:bg-lime-400">
                        Confirmar criação da viagem
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )
        }

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

export default App;
