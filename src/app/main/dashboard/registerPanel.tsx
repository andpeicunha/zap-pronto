import { Button, Card } from '@/components/ui';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/title';

function RegisterPanel() {
  return (
    <section className="ml-10 mt-5 h-max w-auto grid grid-cols-3 pr-3 space-y-3">
      <Text type={'h2'} className="col-span-full">
        Painel Pincipal
      </Text>
      <div className="col-span-full mt-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg">Cadastrar seu WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between align-middle items-center">
            <div className="flex flex-col">
              <Text type={'regular'} className="text-lg p-0 m-0 font-semibold">
                Você ainda não cadastrou seu número do WhatsApp
              </Text>
              <Text type={'regular'} className="text-sm p-0 m-0 text-gray-600">
                É preciso finalizar essa etapa para liberar as demais funções
              </Text>
            </div>
            <Button variant="highlight">Cadastrar WhatsApp</Button>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2">
        <Card className="w-full">
          <CardHeader variant={'transparent'}>
            <CardTitle className="text-lg font-semibold">Mensagens Agendadas</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between align-middle items-center">
            <Card className="w-full">
              <CardContent className="flex justify-between align-middle items-center">
                <div className="flex flex-col">
                  <Text type={'regular'} className="text-lg text-gray-600 p-0 m-0 font-medium">
                    Nenhuma mensagem agendada
                  </Text>
                  <Text type={'regular'} className="text-xs p-0 m-0 mt-1 text-gray-600">
                    É preciso finalizar essa etapa para liberar as demais funções
                  </Text>
                </div>
                <Button disabled variant="default" size={'lg'}>
                  Agendar Mensagem
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default RegisterPanel;
