import { Button, Card } from '@/components/ui';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/title';

function CardScheduleMessage() {
  return (
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
  );
}

export default CardScheduleMessage;
