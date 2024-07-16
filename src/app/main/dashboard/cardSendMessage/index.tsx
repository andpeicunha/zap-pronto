import { Button, Card } from '@/components/ui';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/title';
import { useStore } from '@/store/useStore';

import 'react-international-phone/style.css';
import ModalSendMessage from './modalSendMessage';

function CardSendMessage() {
  const toogleModal = useStore((state) => state.toggleModal);

  return (
    <>
      <ModalSendMessage>
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
            <Button variant="highlight" onClick={toogleModal}>
              Envio Individual
            </Button>
            <Button variant="highlight" onClick={toogleModal}>
              Envio em Lote
            </Button>
          </CardContent>
        </Card>
      </ModalSendMessage>
    </>
  );
}

export default CardSendMessage;
