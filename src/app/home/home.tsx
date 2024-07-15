import { LoginNavBar } from '@/app/main/dashboard/loginTopBar/';
import Image from 'next/image';

import { Text } from '@/components/ui/title';

export default async function Home() {
  return (
    <main className="flex flex-col h-screen w-screen justify-start items-center align-middle bg-[#FFEAD7]">
      <section className="flex flex-col max-lg:z-10 absolute mt-[180px] lg:mt-[130px] max-lg:mt-[80px] w-[70%] max-lg:w-auto items-center align-middle text-center left-3 space-y-5">
        <Image src="/images/logotipo.png" width={373} height={53} alt={'logotipo clientX'} priority />
        <Text type="h1" className="text-primary lg:text-[50px] text-[70px] font-semibold">
          Envie Mensagens, Gerencie e Venda!
        </Text>
        <Text type={'h2'} className="mb-3">
          Transforme suas comunicações no WhatsApp!
        </Text>

        <Text type="h3" className="flex flex-col w-[60%] lg:w-[70%]">
          <span>
            Um sistema simples e eficiente que permite enviar mensagens, gerenciar seus contatos e aumentar suas vendas
            com <span className="bg-chart-4">muita facilidade</span>.
            <p />
          </span>
          <span className="mt-2">
            Cadastre seu telefone, adicione os contatos, crie sua mensagem e pronto! Agende o envio no melhor horário
            para você e acompanhe os resultados em tempo real.
          </span>
        </Text>
        <LoginNavBar />
      </section>
      <div className="absolute md:-z-[0] max-lg:opacity-50 max-lg:right-[2%] max-lg:top-[320px] top-[120px] right-[60px]">
        <Image
          src="/images/woman-ballon.png"
          width={472}
          height={724}
          alt={'logotipo clientX'}
          priority
          className="w-[400px] xl:w-[500px] h-auto pl-7 lg:pl-10"
        />
      </div>
    </main>
  );
}
